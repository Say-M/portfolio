import React from 'react'

const Experience = ({ year, title, desc }) => {
    return (
        <div className="experience">
            <i className="fas fa-graduation-cap"></i>
            <span>{year}</span>
            <h5>{title}</h5>
            <p>{desc}</p>
        </div>
    )
}

export default Experience
