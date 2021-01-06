import React from 'react'
import Experience from '../home/Experience'
import Skills from '../home/Skills'

const AboutPage = () => {
    const exps = [
        {
            year: "2014-2016",
            title: "Front developer",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, hic tempora consequuntur obcaecati excepturi officia?"
        },
        {
            year: "2016-2018",
            title: "Backend developer",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, hic tempora consequuntur obcaecati excepturi officia?"
        },
        {
            year: "2018-Present",
            title: "Full stack developer",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, hic tempora consequuntur obcaecati excepturi officia?"
        },
    ]
    return (
        <section className="bg-light py-5">
            <div className="container About">
                <h1 className="title">Skills & Experience</h1>
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="mb-4">Skills</h3>
                        <Skills />
                    </div>
                    <div className="col-md-6">
                        <h3 className="mb-4">Experience</h3>
                        {exps.map((exp, i) => <Experience key={i} year={exp.year} title={exp.title} desc={exp.desc} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPage
