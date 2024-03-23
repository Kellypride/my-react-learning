import Contacts from './component/Contacts/Contacts';
import './App.css';
import { cat11, cat12, cat13, cat14 } from './assets';

function App() {

  return (
    <div className="App ">
      <div className='container'>
        <Contacts 
        img={cat11} 
        name="Mr.Whiskerson" 
        phone="(213) 555-1234" 
        email="Mr.whiskaz@nap.meow"
      />
      <Contacts 
        img={cat12 }
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluffy@me.com"
      />
      <Contacts 
        img={cat13}
        name="Felix"
        phone="(212) 555-4657"
        email="thecat@hotmail.com"
      />
      <Contacts 
        img={cat14} 
        name="Pumkin"
        phone="(212) 555-5678"
        email="Pumkin@me.com"
      />
      </div>
    </div>
  );
}

export default App;
