import React from "react";
import "./App.css"

function State() {
   const [count, setCount] = React.useState(0) 

   function add () {
    setCount(preCount => preCount + 1)
   }
   function minus () {
    setCount(preCount => preCount - 1) 
   }
   return (
    <div className="counter">
        <button className="counter-minus" onClick={minus}>-</button>
        <div className="counter-count">
            <h1>{count}</h1>
        </div>
        <button className="counter-plus" onClick={add}>+</button>
    </div>
  );
}

export default State;