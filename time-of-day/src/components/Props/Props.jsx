import React from "react";
import "./Props.css"

export default function Props (){

    const date = new Date()
    const hours = date.getHours()
    let timeofDay

    if (hours < 12) {
        timeofDay = "Morning"
        
    }else if (hours >=12 && hours < 17) {
        timeofDay = "AFternoon"
    }else if (hours >=17 && hours < 20) {
        timeofDay = "evening"
    }else {
        timeofDay = "Night"
    }
    return (
        <h2>Good {timeofDay}</h2>
  

    )
}