import React from 'react'

const Skills = () => {
    return (
        <div className="skills">
            <p>I am a Javascript Developer with 5 years experience. I worked over 50+ project with 99.99% client satisfaction. Recently I am working Nodejs, React and Firebase.</p>
            <h5>Frontend Skills</h5>
            <ul className="skill-lists">
                <li>html</li>
                <li>css</li>
                <li>Javascript</li>
                <li>jquery</li>
                <li>React</li>
            </ul>
            <h5>Backend Skills</h5>
            <ul className="skill-lists">
                <li>Nodejs</li>
                <li>Express</li>
                <li>php</li>
                <li>django</li>
            </ul>
            <h5>Database Skills</h5>
            <ul className="skill-lists">
                <li>mysql</li>
                <li>nosql</li>
                <li>mongodb</li>
                <li>Firebase</li>
            </ul>
            {/* <span>HTML</span>
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ "width": "95%" }}></div>
            </div> */}
        </div>
    )
}

export default Skills
