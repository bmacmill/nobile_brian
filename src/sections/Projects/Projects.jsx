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
            <div className={styles.projectsContainer}>
                <ProjectCard
                    src={viberr}
                    p="Quiz App"
                    h3="Quizzical"
                    link="https://github.com/bmacmill/quizzical_app"
                />

                <ProjectCard
                    src={freshBurger}
                    link="https://github.com/bmacmill/notes-app-react"
                    h3="Notes App"
                    p="Notes clone"
                />
                <ProjectCard
                    src={hipsster}
                    link="https://github.com/bmacmill/tenzies_vite/tree/master/tenzies_scrimba"
                    h3="Tenzies Game"
                    p="Tenzies clone"
                />
                <ProjectCard
                    src={fitLift}
                    link="https://github.com/bmacmill/nasa-app-react"
                    h3="NASA Photo"
                    p="Photo of the day"
                />
            </div>
        </section>
    )
}