import React from "react";
import "./jokes.css"

export default function Jokes (props) {
    const [isShown, setIsShown] = React.useState(false)

    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }
    
    return (
        <div className="jokes">
            {props.setup && <h3 >setup: {props.setup}</h3>}
            {isShown && <p>punchline: {props.punchline}</p>}
            <button onClick={toggleShown}> show punchline</button>
            <hr />
        </div>
    )
}