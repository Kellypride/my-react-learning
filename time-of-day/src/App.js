import './App.css';

function greeting(name) {
  const date = new Date();
  const hours = date.getHours();

  let greetingText;
  if (hours >=4 && hours < 12) {
    greetingText = `Good morning, ${name}!`;
  } else if (hours >=12 && hours < 17) {
    greetingText = `Good afternoon, ${name}!`;
  } else if(hours >=17 && hours < 20 ){
    greetingText = `Good evening, ${name}!`;
  }else{
    greetingText = `Good night, ${name}!`;
  }

  return greetingText;
}

function App() {
  return (
    <div className="App">
      {greeting('Kelly')}  {/* Calling the function and displaying the returned value */}
    </div>
  );
}

export default App;