import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from  "../model/firebaseModel";

export default function  Account () {
  const { user, logout } = UserAuth();
 
  
  const navigate = useNavigate();

  async function handleLogout  ()  {
    try {
      await logout();
      navigate('/');
     
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div >
      
      <h1 >Account</h1>
      <p>User Email: {user && user.email}</p>

      <button onClick={handleLogout} >
        Logout
      </button>
    </div>
  );
};

  
