import React from "react";
import photo from "../../assets/photo-grid.png"
import "./Hero.css"

export default function Hero() {
    return (
        <div>
            <section className="hero">
                <img src={photo} alt="hero-img" className="hero-image" />
                <div className="hero-contents">
                    <h1 className="hero-header">Online Experiences</h1>
                    <p className="hero-para">Join unique interactive activities led by one-of-a-kind-host-all without leaving home.</p>
                </div>
            </section>
            
        </div>
    )
}