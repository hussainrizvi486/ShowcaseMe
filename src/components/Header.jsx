import React from 'react'
import '../styles/Header.css'

import { CgMenuRightAlt } from 'react-icons/cg'


const Header = () => {
    return (
        <header>
            <nav className="desktop-navbar">
                <div className="desktop-nav-sec-1">
                    <h1>Title.</h1>
                </div>
                <div className="desktop-nav-sec-2">
                    <ul>
                        <li><a href="#about">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#about">Skills</a></li>
                        <li><a href="#about">Contact</a></li>
                    </ul>
                </div>
                <div className="desktop-nav-sec-3">
                    <a href="mailto:hussainrizvi486@gmail.com">Email</a>
                </div>

                <div className="mobile-nav-menu"><CgMenuRightAlt /></div>
            </nav>
        </header>
    )
}

export default Header