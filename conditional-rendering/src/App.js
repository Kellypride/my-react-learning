
import React from 'react';
import './App.css';


function App() {
  const[messages, setMessages] = React.useState(["a"])
  return (
    <div className="App">
      {
          messages.length === 0 ?
          <h1>You're all caught up!</h1>:
          <h1>you have{messages.length} unread! {messages.length > 1 ? "messages" : "message"}</h1>
      }
    </div>
  );
}

export default App;
