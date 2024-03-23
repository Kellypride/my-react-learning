import './App.css';
import Jokes from './joke';
import jokeDate from './jokeData';


function App() {

  const jokeElements = jokeDate.map(jokes => {
    return <Jokes setup={jokes.setup} punchline={jokes.punchline} />
  })
  return (
    <div className='APP'>
      {jokeElements}
    </div>
    
  )
}

export default App;
