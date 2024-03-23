
import './App.css';
import React from 'react';

function App() {
const [contact, setContact] =React.useState({
  firstName: "John",
  lastName: "Deo",
  phoneNumber: "+1(719)-555-1212",
  email: "kellypride@gmail.com",
  isFavourite: true
})

function toggleFavourite (){
  setContact(preContact => 
    {
      return {
        ...preContact,
        isFavourite: !preContact.isFavourite
      }
    })
}

let starIcon = contact.isFavourite ? "yellow-star.png": "star.png"

  return (
    <div className='app'>
      <section className="card">
            <div className='container-img'>
              <img src={require('./assets/profile.png')} alt="" className="card-image" />
            </div>
            <div>
                <img src={require(`./assets/${starIcon}`)} alt="star-icon" className="card-star" 
                onClick={toggleFavourite} />
                <p className="bold">{contact.firstName} {contact.lastName}</p>
            </div>
            <p>{contact.phoneNumber}</p>
            <p>{contact.email}</p>
      </section>
    </div>
  );
}

export default App;
