import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/ntfy.scss"
// @ts-ignore
import script from "./scripts/ntfy.inline"
import { classNames } from "../util/lang"

export default (() => {
  const NtfyNotification: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={classNames(displayClass, "ntfy-notification")}>
        <div class="ntfy-container">
          <input
            type="text"
            id="nfty-input"
            class="ntfy-input"
            placeholder="send me a message :3"
            aria-label="notification message"
          />
          <button id="ntfy-send" class="ntfy-button">
            [send]
          </button>
        </div>
      </div>
    )
  }

  NtfyNotification.afterDOMLoaded = script
  NtfyNotification.css = style

  return NtfyNotification
}) satisfies QuartzComponentConstructor
