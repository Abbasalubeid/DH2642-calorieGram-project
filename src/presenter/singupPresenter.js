import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { UserAuth } from  "../model/AuthContext";
import Signup from '../view/signupView';
import { AuthProvider } from '../model/AuthContext';

export default function SignupPresenter () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

 async function handleSubmitACB (e) {
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
    setEmail(e)
  }
 
  function handlePasswordACB(e){
    setPassword(e)
  }

return (
    <AuthProvider>

  <div className="login-banner">
      <div className="form-container">
        <Signup  onUserSubmit={handleSubmitACB} onUserEmail={handleEmailACB} 
                onUserPassword={handlePasswordACB} onUserError={error}
        />
      </div>
  </div>
    </AuthProvider>
)

}
