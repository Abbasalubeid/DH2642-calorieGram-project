import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
 import { UserAuth } from  "../AuthContext";
 import "../css/login.css";
 import { AuthProvider } from  "../AuthContext";


export default function Signin()  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/profile')
    } catch (e) {
      setError(e.message)
    }
  };
    function handleEmailACB(e){
      setEmail(e.target.value)
    }
  
    function handlePasswordACB(e) {
      setPassword(e.target.value)
    }
      return (
        <AuthProvider>

        <div className="login-banner">
            <div className="form-container">
                <h2>Login</h2>
                {error} 
                <form onSubmit={handleSubmit} className="form-login">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" placeholder="abc@email.com" onChange={handleEmailACB} required="required" ></input>
                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder="**********" onChange={handlePasswordACB} ></input>
                    <button  type="submit" className="btn">Log in</button>
                    
                    <Link to={"/signup"}>Don't have a account? Sign up</Link>
                </form>
            </div>
        </div>
        </AuthProvider>
    )
};

