import styles from "./HeroStyles.module.css"
import heroImage from "../../assets/hero-img.png"
import themeIcon from "../../assets/sun.svg"
import twitterIcon from "../../assets/twitter-light.svg"
import linkedInIcon from "../../assets/linkedin-light.svg"
import githubIcon from "../../assets/github-light.svg"
import CV from "../../assets/cv.pdf"

export default function Hero() {


    return (
        <section id="hero" className={styles.container}>
            <div>
                <img className={styles.colorModeContainer} src={heroImage} alt="profile picture of brian nobile" />
                <img className={styles.colorMode} src={themeIcon} alt="color mode icon" />
            </div>

            <div>
                <h1>Brian <br />Nobile</h1>
            </div>

            <h2>frontend developer</h2>
            <span className="social-logos">
                <a href="#" alt="social logo"><img src={twitterIcon} alt="twitter icon" /></a>
                <a href="#" alt="social logo"><img src={linkedInIcon} alt="linked in icon" /></a>
                <a href="#" alt="social logo"><img src={githubIcon} alt="github icon" /></a>
            </span>
            <p>learning to develop modern react web apps through ultralearning techniques</p>
            <a href={CV} download>
                <button className="hover" >resume</button>
            </a>
        </section >
    )
}
