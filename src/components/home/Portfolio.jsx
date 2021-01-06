import React from 'react'
import { Link } from 'react-router-dom'
import Work from './Work'

const Portfolio = () => {
    return (
        <>
            <section className="py-5">
                <div className="container portfolio">
                    <h2 className="title">My recent works</h2>
                    <div className="row">
                        <Work />
                    </div>
                    <div className="text-center">
                        <Link to="/portfolio" className="btn btn-success mt-4">View More</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
