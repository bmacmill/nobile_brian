import styles from "./HeroStyles.module.css"
import heroImage from "../../assets/hero-img.png"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import mediumIcon from "../../assets/icons8-medium.svg"
import mediumIconDark from "../../assets/icons8-medium-drk.svg"
import linkedInIcon from "../../assets/linkedin-light.svg"
import linkedInIconDark from "../../assets/linkedin-dark.svg"
import githubIcon from "../../assets/github-light.svg"
import githubIconDark from "../../assets/github-dark.svg"
import CV from "../../assets/cv.pdf"
import { useTheme } from "../../common/ThemeContext"

// https://www.youtube.com/watch?v=ZpIel9cv4Jk&t=2683s
export default function Hero() {
    const { theme, toggleTheme } = useTheme()

    const themeIcon = theme === "light" ? sun : moon
    const mediumIconLogo = theme === "light" ? mediumIcon : mediumIconDark
    const linkedInIconLogo = theme === "light" ? linkedInIcon : linkedInIconDark
    const githubIconLogo = theme === "light" ? githubIcon : githubIconDark


    return (
        <section id="hero" className={styles.container}>
            <div>
                <img className={styles.colorModeContainer} src={heroImage} alt="profile picture of brian nobile" />
                <img onClick={toggleTheme} className={styles.colorMode} src={themeIcon} alt="color mode icon" />
            </div>

            <div className={styles.info}>
                <h1>Brian Nobile</h1>
            </div>

            <h2>frontend developer</h2>
            <span className="social-logos">
                <a href="#" alt="social logo"><img src={mediumIconLogo} alt="medium icon" /></a>
                <a href="#" alt="social logo"><img src={linkedInIconLogo} alt="linked in icon" /></a>
                <a href="#" alt="social logo"><img src={githubIconLogo} alt="github icon" /></a>
            </span>
            <p className={styles.description}>learning to build modern react web apps by building modern react web apps</p>
            <a href={CV} download>
                <button className="hover">Resume</button>
            </a>
        </section >
    )
}
