import React from "react"

export default function SkillList({ src, skill }) {
    return (
        <span>
            <img src={src} alt="check mark" />
            <p>{skill}</p>
        </span>
    )
}