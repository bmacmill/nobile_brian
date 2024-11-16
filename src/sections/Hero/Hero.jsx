import styles from "./HeroStyles.module.css"
import heroImage from "../../assets/hero-img.png"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import twitterIcon from "../../assets/twitter-light.svg"
import twitterIconDark from "../../assets/twitter-dark.svg"
import linkedInIcon from "../../assets/linkedin-light.svg"
import linkedInIconDark from "../../assets/linkedin-dark.svg"
import githubIcon from "../../assets/github-light.svg"
import githubIconDark from "../../assets/github-dark.svg"
import CV from "../../assets/cv.pdf"
import { useTheme } from "../../common/ThemeContext"

export default function Hero() {
    const { theme, toggleTheme } = useTheme()

    const themeIcon = theme === "light" ? sun : moon
    const twitterIconLogo = theme === "light" ? twitterIcon : twitterIconDark
    const linkedInIconLogo = theme === "light" ? linkedInIcon : linkedInIconDark
    const githubIconLogo = theme === "light" ? githubIcon : githubIconDark

    return (
        <section id="hero" className={styles.container}>
            <div>
                <img className={styles.colorModeContainer} src={heroImage} alt="profile picture of brian nobile" />
                <img onClick={toggleTheme} className={styles.colorMode} src={themeIcon} alt="color mode icon" />
            </div>

            <div>
                <h1>Brian <br />Nobile</h1>
            </div>

            <h2>frontend developer</h2>
            <span className="social-logos">
                <a href="#" alt="social logo"><img src={twitterIconLogo} alt="twitter icon" /></a>
                <a href="#" alt="social logo"><img src={linkedInIconLogo} alt="linked in icon" /></a>
                <a href="#" alt="social logo"><img src={githubIconLogo} alt="github icon" /></a>
            </span>
            <p>learning to develop modern react web apps through ultralearning techniques</p>
            <a href={CV} download>
                <button className="hover">resume</button>
            </a>
        </section>
    )
}
