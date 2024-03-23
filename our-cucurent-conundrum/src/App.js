import React from 'react';
import './App.css';

function App() {

  const [things, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

  function addThings () {
    setThingsArray(preThingsArray => {
      return[...preThingsArray, `things ${preThingsArray.length + 1}`]
    })
  }


  const thingsElement = things.map(thing => <p key={thing}> {thing}</p>)
  return (
    <div className="App">
      <div className='container'>
        <button className='button' onClick={addThings}>Add Item</button>
      </div>
      {thingsElement}
    </div>
  );
}

export default App;
