import React from 'react';
import styles from "../sections/Projects/ProjectsStyles.module.css"

export default function ProjectCard({ src, link, h3, p }) {

    return (
        <a href={link} target="_blank">
            <img className={styles.projectImg} src={src} alt={`${h3} logo`} />
            <h3>{h3}</h3>
            <p>{p}</p>
        </a>
    );
}
