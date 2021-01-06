import React from 'react'
import { NavLink } from 'react-router-dom'
import Work from '../home/Work'

const PortfolioPage = () => {
    return (
        <>
            <section className="bg-light py-5">
                <div className="container portfolio">
                    <h1 className="title">My recent works</h1>
                    <ul className="portfolio-tags">
                        <li>
                            <NavLink to="">Show all</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Html</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Css</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Bootstrap</NavLink>
                        </li>
                        <li>
                            <NavLink to="">javascript</NavLink>
                        </li>
                        <li>
                            <NavLink to="">jquery</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Frontend</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Backend</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Fullstack</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Node js</NavLink>
                        </li>
                        <li>
                            <NavLink to="">React js</NavLink>
                        </li>
                    </ul>
                    <div className="row">
                        <Work />
                    </div>
                </div>
            </section>
        </>
    )
}

export default PortfolioPage
