import React from 'react';
import './index.css';

function App() {

  const [signUp, setSignUp] = React.useState({
    email: "",
    newsLetter: false,
    password: "",
    confirmPassword: "",
  })

  function handleChange(event) {
    const {name, value, type, checked} = event.target
     setSignUp (prevSignUP => {
      return {
        ...prevSignUP,
        [name]: type === "checkbox" ? checked : value

      }
     })
  }
  console.log(signUp)
  
  function handleSubmit(event){
    event.preventDefault()
    if(signUp.password === signUp.confirmPassword){
      console.log("Successfully signed Up")
    }else{
      console.log("Password do not match")
      return
    }

    if(signUp.newsLetter){
      console.log("Thanks for signing up for our newsletter")
    }
    
  }
  return (
    <div className='bg-purple-800 px-10 py-10 h-screen flex flex-row justify-center items-center'>  
      <form className='bg-white rounded-xl flex flex-col items-center justify-center space-y-8 text-2xl w-full h-full' onSubmit={handleSubmit}>
        <input
          className='rounded-md border border-gray-300 py-6 px-4 w-1/3 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 hover:bg-gray-200'
          type="email" 
          placeholder="email address"
          name="email"
          onChange={handleChange} 
          value={signUp.email}
        />
        <input
          className='rounded-md border border-gray-300 py-6 px-4 w-1/3 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 hover:bg-gray-200'
          type='password'
          placeholder='password'
          name="password"
          onChange={handleChange} 
          value={signUp.password}
        />
        <input
          className='rounded-md border border-gray-300 py-6 px-4 w-1/3 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 hover:bg-gray-200'
          type='password'
          placeholder='confirm password'
          name="confirmPassword"
          onChange={handleChange} 
          value={signUp.confirmPassword}
        />
        <div className='flex items-center'>
          <input
            className='mr-2 w-4 h-4 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50'
            type="checkbox"
            id='newsLetter'
            name="newsLetter"
            checked={signUp.newsLetter}
            onChange={handleChange} 
          />
          <label htmlFor="newsPaper">I want to join the newsletter</label>
        </div>
        <button className='bg-purple-800 text-white py-2 px-8 w-50 rounded-md hover:bg-blue-700'>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
