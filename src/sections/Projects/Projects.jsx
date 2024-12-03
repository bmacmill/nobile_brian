import React from "react"
import styles from "./ProjectsStyles.module.css"
import question from "../../assets/question-and-answer-svgrepo-com.svg"
import notesApp from "../../assets/notes-notepad-svgrepo-com.svg"
import tenzies from "../../assets/ten-svgrepo-com.svg"
import nasa from "../../assets/camera-svgrepo-com.svg"
// import "./ProjectsStyles.module.css"
import ProjectCard from "../../common/ProjectCard"

export default function Projects() {
    // https://react-icons.github.io/react-icons/icons/im/
    //https://react-icons.github.io/react-icons/icons/hi/
    //1---https://www.svgrepo.com/
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard
                    src={question}
                    p="Quiz App"
                    h3="Quizzical"
                    link="https://github.com/bmacmill/quizzical_app"
                />

                <ProjectCard
                    src={notesApp}
                    link="https://github.com/bmacmill/notes-app-react"
                    h3="Notes App"
                    p="Notes clone"
                />
                <ProjectCard
                    src={tenzies}
                    link="https://github.com/bmacmill/tenzies_vite/tree/master/tenzies_scrimba"
                    h3="Tenzies Game"
                    p="Tenzies clone"
                />
                <ProjectCard
                    src={nasa}
                    link="https://github.com/bmacmill/nasa-app-react"
                    h3="NASA Photo"
                    p="Photo of the day"
                />
            </div>
        </section>
    )
}