import styles from "./HeroStyles.module.css"
import heroImage from "../../assets/hero-img.png"
import profilePic from "../../assets/person-svgrepo-com.svg"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import mediumIcon from "../../assets/icons8-medium-50.svg"
import mediumIconDark from "../../assets/logo-medium-icon-svgrepo-com.svg"

//icons8-medium-drk.svg
import linkedInIcon from "../../assets/linkedin-light.svg"
import linkedInIconDark from "../../assets/linkedin-dark.svg"
import githubIcon from "../../assets/github-light.svg"
import githubIconDark from "../../assets/github-dark.svg"
import CV from "../../assets/brian_nobileresume.pdf"
import { useTheme } from "../../common/ThemeContext"


export default function Hero() {
    const { theme, toggleTheme } = useTheme()

    const themeIcon = theme === "light" ? sun : moon
    const mediumIconLogo = theme === "light" ? mediumIcon : mediumIconDark
    const linkedInIconLogo = theme === "light" ? linkedInIcon : linkedInIconDark
    const githubIconLogo = theme === "light" ? githubIcon : githubIconDark


    return (
        <section id="hero" className={styles.container}>
            <div>
                <img className={styles.colorModeContainer} src={profilePic} alt="profile picture of brian nobile" />
                <img onClick={toggleTheme} className={styles.colorMode} src={themeIcon} alt="color mode icon" />
            </div>

            <div>
                <div className={styles.info}>
                    <h1>Brian <br />Nobile</h1>
                </div>

                <h2>frontend developer</h2>
                <span className="social-logos">

                    <a href="https://www.linkedin.com/in/briannobile" alt="social logo"><img src={linkedInIconLogo} alt="linked in icon" /></a>
                    <a href="https://github.com/bmacmill" alt="social logo"><img src={githubIconLogo} alt="github icon" /></a>
                    <a href="https://medium.com/@bterencenobiledev" alt="social logo"><img style={{ width: "66px" }} src={mediumIconLogo} alt="medium icon" /></a>
                </span>
                <p className={styles.description}>Learning to build modern react web apps by building modern react web apps</p>
                <a href={CV} download>
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section >
    )
}
