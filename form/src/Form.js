import React from "react"
import './App.css';

function Form() {

  const [formData, setFormData] = React.useState({
    firstName:"", 
    lastName: "", 
    emailAdress: "", 
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: ""
  })

  // console.log(formData.favColor)
  function handleChange(event) {
    const {name, value, type, checked} = event.target
     setFormData (prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value

      }
  
     })
  }

  function handleSubmit(event){
    event.preventDefault()
    // submitToApi(formData)
    console.log(formData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input className="input" 
          type="text" 
          placeholder="First Name"
          name="firstName"
          onChange={handleChange} 
          value={formData.firstName}
      />
      <input className="input"
          type="text" 
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange} 
          value={formData.lastName}
          
      />
      <input className="input"
          type="email" 
          placeholder="email address"
          name="emailAdress"
          onChange={handleChange} 
          value={formData.emailAdress}
          
      />
      <textarea className="input"
      type="text"
      placeholder="Write a message here"
      name="comments"
      onChange={handleChange} 
      value={formData.comments} />
      <div className="checkbox">
        <input 
        type="checkbox"
        id="ISFriendly"
        name="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange} 

        />
        <label htmlFor="isFriendly">Are you friendly</label>
      </div>
      <fieldset>
        <legend>Current employment status</legend>
        <div className="radio">
          <input 
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
        checked={formData.employment === "unemployed"}
          
          onChange={handleChange}

          />
          <label htmlFor="unemployed">Unemployed</label>
        </div>
        <div className="radio">
          <input 
          type="radio"
          id="part-time" 
          name="employment"
          value="part-time"
          checked={formData.employment === "part-time"}
          onChange={handleChange}


          />
          <label htmlFor="part-time">Part-time</label>
        </div>
        <div className="radio">
          <input 
          type="radio"
          id="full-time" 
          name="employment"
          value="full-time"
          checked={formData.employment === "full-time"}
          onChange={handleChange}

          />
          <label htmlFor="full-time">Full-time</label>
        </div>
        
      </fieldset>
      <label htmlFor="favColor">What is your favourite color</label>
      <select 
      id="favColor"
      name="favColor"
      value={FormData.favColor}
      onChange={handleChange}

      >
        <option value="">-- choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="pink">Pink</option>
        <option value="black">Black</option>
        <option value="white">White</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>

      </select>
      <button>submit</button>
    </form>
  );
}

export default Form;
