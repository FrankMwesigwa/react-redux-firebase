import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className="nav-wrapper">
            <div className="container">
                <a className="logo">Porker Games</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;