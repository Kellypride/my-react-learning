 import React from 'react';
 import boxes from "./boxes"
 import './App.css';
 import Box from './component/Box';
// import { useEffect } from 'react';

function App() {
  const [squares, setSquares] = React.useState(boxes);
  
  // declarative method
  function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id? {...square.on} : square
      })
    })
  }

  /* //imparative method
  function toggle(id) {
    setSquares(prevSquares => {
      const newSquares = [];
      for (let i = 0; i < prevSquares.length; i++) {
          const currentSquare = prevSquares[i];
          if (currentSquare.id === id) {
            const updatedSquare = {
              ...currentSquare,
              on: !currentSquare.on 
            };
            newSquares.push(updatedSquare);
          } else {
            newSquares.push(currentSquare);
          }
        }
        return newSquares;
      });
    } */

  const squareElements = squares.map(square => (
    <Box  
    key={square.id } 
    id={square.id}
    on={square.on} 
    toggle={toggle}
    />
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
