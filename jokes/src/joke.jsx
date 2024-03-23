import React from "react";
import "./jokes.css"

export default function Jokes (props) {
    return (
        <div className="jokes">
            {props.setup && <h3 >setup: {props.setup}</h3>}
            <p>punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}