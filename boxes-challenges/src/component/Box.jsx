import React from "react";
// import { useEffect } from "react";

export default function Box (props) {

    const [isOn, setIsOn] = React.useState(props.isOn )

    const styles = {
    backgroundColor: isOn ? "#222222" : "current"
  }

   function handleClikcks () {
    setIsOn(prevIsOn => !prevIsOn)
   }
// const [isOn, setIsOn] = React.useState(false);
// useEffect(()=>{
//     setIsOn(props.on)
// },[props.on])

    return (
         <div  style={styles} className='box' onClick={handleClikcks} ></div>
    )
}