import React from "react";
// import { useEffect } from "react";

export default function Box ({on,id, toggle}) {

    // const [isOn, setIsOn] = React.useState(props.isOn )

    const styles = {
    backgroundColor: on ? "#222222" : "currents"
  }

// const [isOn, setIsOn] = React.useState(false);
// useEffect(()=>{
//     setIsOn(props.on)
// },[props.on])

    return (
         <div  style={styles} className='box' onClick={() => toggle(id)}>
            
         </div>
    )
}