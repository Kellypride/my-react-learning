import React from 'react';

function App() {
  function handleClick (){
    console.log("I was clicked!")

  }
  function handleOnMouseOver (){
    console.log("I was hovered!!")
  }
  
  return (
    <div className="flex flex-col  items-center gap-5 py-10 px-5">
      <img src={require('./3.jpg')} alt="" width={500} height={400}  title='event listener'
      onMouseOver={handleOnMouseOver} />
      <button onClick={handleClick} className=' rounded-md border-gray-400 border-2 px-4 py-2 w-96 '>Click Me</button>
      
    </div>
  );
}

export default App;
