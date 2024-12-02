import React from "react"
import styles from "./ProjectsStyles.module.css"
import viberr from "../../assets/viberr.png"
import freshBurger from "../../assets/fresh-burger.png"
import hipsster from "../../assets/hipsster.png"
import fitLift from "../../assets/fitlift.png"
// import "./ProjectsStyles.module.css"
import ProjectCard from "../../common/ProjectCard"

export default function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.container}>
                <ProjectCard
                    src={viberr}
                    p="Streaming App"
                    h3="Viberr"
                    link="#"
                />
                {/* <a href="#" target="_blank">
                    <img className={styles.projectImg} src={viberr} alt="viberr logo" />
                    <h3>Viberr</h3>
                    <p>streaming app</p>
                </a> */}
                <ProjectCard
                    src={freshBurger}
                    link="#"
                    h3="Fresh Burger"
                    p="Hamburger Restaurant"
                />
                <ProjectCard
                    src={hipsster}
                    link="#"
                    h3="Hipsster"
                    p="Glasses Shop"
                />
                <ProjectCard
                    src={fitLift}
                    link="#"
                    h3="FitLift"
                    p="Fitness App"
                />
            </div>
        </section>
    )
}