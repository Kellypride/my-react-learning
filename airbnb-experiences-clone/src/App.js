import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Hero from './components/Hero/Hero';
import Card  from './components/Card/Card';
import data from './data';
// import  {card1, card2, card3, star} from './assets'; 

function App() {
  const cards = data.map(item =>{
    return (
      <Card
        key = {item.id}
        item = {item}


        />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='cards-container'>
        {cards}
      </div>
      
    </div>
  );
}

export default App;
