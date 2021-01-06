import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({ isDark, setDark }) => {
    const [isNavbar, setNavbar] = useState(false)
    return (
        <header>
            <nav className="navbar-wrapper">
                <Link to="/" className="logo">Sayem</Link>
                <div className="show-menu" onClick={() => setNavbar(true)}><i className="fas fa-bars"></i></div>
                <div className="theme" onClick={() => isDark ? setDark(false) : setDark(true)}><i className={`fas fa-${isDark ? "moon" : "sun"}`}></i></div>
                <ul className={isNavbar ? "show" : ""}>
                    <div className="float-right close" onClick={() => setNavbar(false)}><i className="fas fa-times"></i></div>
                    <li>
                        <NavLink exact activeClassName="active" to="/">
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/about">
                            <span>About</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/Services">
                            <span>Services</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/portfolio">
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/blog">
                            <span>Blog</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/contact">
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
