import React from "react"
import './App.css';

function App() {
  const [StarWarsData, setStarWarsData] = React.useState({})
  const[count, setCount] = React.useState(0)
  console.log("component render")

  // get the data (fetch)
  //save data to state

//sideEffect
React.useEffect(function(){
  console.log("Effect function ran")
  fetch(`https://swapi.dev/api/people/${count}`)
    .then(res => res.json())
    .then(data => setStarWarsData(data))

}, [count])

  return (
    <div>
      <pre>{JSON.stringify(StarWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2><button onClick={() => setCount(prevCount => prevCount + 1)}>Get next character</button>
      
    </div>
  );
}
export default App;
