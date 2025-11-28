import { QuartzTransformerPlugin } from "../types"
import { Root } from "hast"
import { visit } from "unist-util-visit"

export interface Options {
  bashScript: string
}

const defaultOptions: Options = {
  bashScript: `# Bash section - runs when you do: curl -fsSL <domain> | bash

# example: your 4 lines of logic
echo "hello world"
# more stuff here if you want
# ...

exit 0`
}

export const BashInsert: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  
  return {
    name: "BashInsert",
    htmlPlugins() {
      return [
        () => {
          return (tree: Root, file) => {
            // Only process the index page
            if (file.data.slug !== "index") {
              return
            }

            // Find the HTML comment where we want to insert the bash script
            visit(tree, "comment", (node, index, parent) => {
              if (node.value.includes("bash")) {
                // Replace the comment with the bash script
                parent!.children.splice(index!, 1, {
                  type: "text",
                  value: `\n${opts.bashScript}\n`
                })
              }
            })
          }
        }
      ]
    }
  }
}