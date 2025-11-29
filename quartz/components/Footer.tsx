import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? {}
    return (
      <footer className={`${displayClass ?? ""}`}>
        <p id="changingtext">This is a random text field. Enable your js, silly!!!</p>
        <p>best viewed on a 4:19 apple macintosh 2 crimson edition. please switch off airplane mode and enable
                boat
                mode. this website is not y2k compliant.</p>
        <br />
        <a href="https://stellophiliac.github.io/roboring/442811/previous">←</a>
        <a href="https://stellophiliac.github.io/roboring">roboring</a>
        <a href="https://stellophiliac.github.io/roboring/442811/next">→</a>
        <br />
        <br />
        <a href="https://maia.crimew.gay/" target="_blank" rel="noopener noreferrer"><img src="assets/maia.crimew.gay.png"
                        alt="maia.crimew.gay website" /></a>
        <a href="https://ilwag.com/" target="_blank" rel="noopener noreferrer"><img src="assets/ilwagbannersmol.png"
                        alt="inlovewithaghost website" /></a>
        <a href="https://endeavouros.com/" target="_blank" rel="noopener noreferrer"><img src="assets/endeavouros.png" alt="endeavouros logo" /></a>
        <a href="https://sapphic.moe"><img src="assets/sapphic.png" alt="sapphic.moe 88x31 redirect" width="88"
                        height="31" /></a>
        <a href="https://999eagle.moe"><img src="https://999eagle.moe/images/88x31/440729.png"
                        alt="⛧-440729's button" /></a>
        <a href="https://pukpal.dev"><img src="assets/pukpaldevButton-export.png"
                        alt="pukpal.dev's button" /></a>
        <a href="https://sophari.org/"><img src="https://sophari.org/img/sophari.gif" alt="sophari's button" /></a>
        <img src="assets/this_machine_kills_fascists.png" alt="this machine kills fascists" />
        <a href="https://www.youtube.com/watch?v=Jy2EYLuMN_8">
          <img src="assets/pantheon88x31.png" alt="PANTHEON (please watch it please please please please please please)" width="88" height="31" />
        </a>
        <p>
          &copy; {year} skysyrup. {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz" target="_blank" rel="noopener noreferrer"> Quartz {version}</a>.
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
