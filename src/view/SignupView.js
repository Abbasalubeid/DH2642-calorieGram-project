import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../AuthContext';

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
  <div className="login-banner">
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
              <Link to="/login">Already have a account? Sign in</Link>
          </form>
      </div>
  </div>
)

}
