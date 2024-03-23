import React from "react"
import "./Navbar.css"
import logo from "../../assets/airbnb.png"

export default function Navbar() {
    return (
        <div>
            <navbar className="Navbar">
                <img src={logo} alt="airbnb logo"  className="navbar-logo"/>
            </navbar>
        </div>
    )
}