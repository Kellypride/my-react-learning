import React from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';

function App() {

  const [user, setUser] = React.useState("Jeo")

  return (
    <main className="App">
      <Header user={user} />
      <Body  user= {user}/>
     
    </ main>
  );
}

export default App;
