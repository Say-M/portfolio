import React from 'react'
import Typewriter from 'typewriter-effect'

const About = () => {
    return (
        <section className="lead bg-light">
            <div className="container">
                <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                    <h2>I am <span className="text-success d-inline-flex">
                        <Typewriter
                            options={{
                                strings: ['Mohammad Sayem', 'Web Designer', 'Web Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></span>
                    </h2>
                    <p className="my-3 text-muted">Passionated about programming Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eligendi magnam commodi quasi veritatis?
                    </p>
                    <button className="btn btn-lg btn-outline-success">Download CV</button>
                    <ul>
                        <li>
                            <a href="https://facebook.com/sayem.me" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/am-sayem" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                            <a href="https://github.com/say-m" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                            <a href="https://twitter.com/am-sayem" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About
