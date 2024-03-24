import React from "react";
import '../App.css'

export default  function Body(props) {
    
    return (
        <body className="body" >
            <h1>
                <span className="span1">Welcome back,</span>
                <span className="span">{props.user}</span>
                <span>!</span>
            
            </h1>
        </body>
    )
}