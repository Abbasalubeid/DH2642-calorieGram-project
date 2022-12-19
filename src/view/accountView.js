import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from  "../model/AuthContext"


export default function  AccountView () {
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
      <h4 className="label">User Email: {user && user.email}</h4>

      <button onClick={handleLogout} className="btn">
        Logout
      </button>
    </div>
  );
};

  
