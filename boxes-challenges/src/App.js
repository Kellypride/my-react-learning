 import React from 'react';
 import boxes from "./boxes"
 import './App.css';
 import Box from './component/Box';
// import { useEffect } from 'react';

function App() {

  const [squares, setSquares] = React.useState(boxes);
  // useEffect(()=>{
  //   setSquares(boxes)
  // },[])

  const squareElements = squares.map(square => (
    <Box key={square.id } on={square.on} />
  ))


  return (
    <div className="App">
      <main className="App-header">
        <h1> Boxes will go here</h1>
        {squareElements}

      </main>
    </div>
  );
}

export default App;
