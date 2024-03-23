import React from "react"
import "./Main.css"
import profile from '../../assets/profile.jpg'
// const profile = require('../../assets/profile.jpg')

export default function Main() {
    return (
        <div className="main">
            <img src={profile} alt="profile-pic" />
            <div className="main-profile">
                <h1 className="main-h1">Laura Smith</h1>
                <p className="main-h4">Frontend Developer</p>
                <small className="main-small">luarasmith.website</small>
            </div>
            <div className="main-button">
                    <button className="main-email">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="1.3rem" viewBox="0 0 24 24"><path fill="black" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"></path></svg>
                        <a href="mailto:youremail@example.com" class="button" id="email">Email</a></button>
                    <button className="main-linkedin">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.2rem" viewBox="0 0 20 20"><path fill="white" d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545zM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44m1.484 10.85h-2.97V7.5h2.97zM18.522 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0z"></path></svg>
                        <a href="https://www.linkedin.com/in/yourprofile" class="button">LinkedIn</a>
                    </button>
            </div>
            <div className="about">
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn. </p>
            </div>
            <div className="interest">
                <h2>Interest</h2>
                <p>Foot expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja . Cofee tanatic</p>
            </div>
        </div>
    )
}