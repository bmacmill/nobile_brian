import React from "react"
import styles from "./SkillsStyles.module.css"
import checkmark from "../../assets/checkmark-light.svg"
import checkmarkDark from "../../assets/checkmark-dark.svg"
import { useTheme } from "../../common/ThemeContext"
import SkillList from "../../common/SkillList"
export default function Skills() {
    const { theme, toggleTheme } = useTheme()

    const checkIcon = theme === "light" ? checkmark : checkmarkDark

    return (
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkIcon} skill="HTML" />
                <SkillList src={checkIcon} skill="CSS" />
                <SkillList src={checkIcon} skill="JavaScript" />
                <SkillList src={checkIcon} skill="React" />

            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkIcon} skill="Bootstrap" />
                <SkillList src={checkIcon} skill="SQL/Mysql" />
                <SkillList src={checkIcon} skill="GitHub" />
                <SkillList src={checkIcon} skill="Git" />

            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkIcon} skill="Product" />
                <SkillList src={checkIcon} skill="Documentation" />
                <SkillList src={checkIcon} skill="Checkmark enthusiast" />

            </div>
        </section>
    )
}