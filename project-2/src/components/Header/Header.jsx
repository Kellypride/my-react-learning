import React from "react"
import "./Header.css"
import logo from "../../assets/logo.png"

export default function Header () {
    return (
         <header >
            <nav className="navbar">
                <img src={logo} alt="react-logo"  className="nav-logo"/>
                <ul className ="nav-items">
                    <li>pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}


