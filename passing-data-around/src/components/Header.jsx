import React from "react";

import '../App.css'

export default function Header (props) {
    
    return (
        <header>
            <p>Current user: {props.user} </p>
        </header>
    )
}