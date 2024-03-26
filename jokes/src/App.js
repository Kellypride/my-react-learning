import './App.css';
import Jokes from './joke';
import jokeData from './jokeData';


function App() {

  const jokeElements = jokeData.map(jokes => {
    return <Jokes  setup={jokes.setup} punchline={jokes.punchline} />
  })
  return (
    <div className='APP'>
      {jokeElements}
      
    </div>
    
  )
}

export default App;
