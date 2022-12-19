import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
 import { UserAuth } from  "../model/AuthContext";
 import "../css/login.css";
 import { AuthProvider } from  "../model/AuthContext";
 import Signin from '../view/SigninView';

 export default function SignInPresenter(){
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();


  async function handleSubmitACB(e){
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/home')
    } catch (e) {
      setError(e.message)
    }
  };
    function handleEmailACB(e){
      setEmail(e)
    }
  
    function handlePasswordACB(e) {
      setPassword(e)
    }
      return (
        <AuthProvider>

        <div className="login-banner">
            <div className="form-container">
               <Signin  
               onUserSubmit ={handleSubmitACB} onUserEmail={handleEmailACB} 
               onUserPassword ={handlePasswordACB} onUserError ={error}
              
                />
            </div>
        </div>
        </AuthProvider>
    )
 }