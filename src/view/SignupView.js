import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from  "../AuthContext";

export default function Signup () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

 async function handleSubmit (e) {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  function handleEmailACB(e){
    setEmail(e.target.value)
  }
  function handleUsernameACB(e){
    console.log(e.target.value)
  }
  function handlePasswordACB(e){
    setPassword(e.target.value)
  }

return (
  <div className="signup-banner">
    <div className="signup-info">
    <h2 className="anim">To use our futures you will need an account!</h2>
        <h2 className="anim">It takes less than a minute😁</h2> 
        <h4 className="anim">After using our futures, you will learn the basics about a healthy lifestyle. <br></br>
          You will also learn more about your current health state and how to maintain or change it
        </h4>
        <img className="anim" src="Happy-Peace-Smiley-Face.png"/>
    </div>
      <div className="form-container">
          <h2>Create a new account</h2>
          {error}
          <form onSubmit={handleSubmit} className="form-register">
              <label htmlFor="email" >Email address:</label>
              <input type="email" placeholder="abc@email.om" onChange={handleEmailACB}></input>
              <label htmlFor="username">Username:</label>
              <input type="username" onChange={handleUsernameACB}></input>
              <label htmlFor="password">Password:</label>
              <input type="password" placeholder="**********" onChange={handlePasswordACB} ></input>
              <label htmlFor="password">Re-type password:</label>
              <input type="password" placeholder="**********" onChange={handlePasswordACB} ></input>
              <button  type='submit' className="btn">Sign up</button>
              <Link to="/">Already have a account? Sign in</Link>
          </form>
      </div>
  </div>
)

}
