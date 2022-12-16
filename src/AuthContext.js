// import React, { useContext, useEffect } from "react";
// import { auth } from "../model/firebaseModel";

// const AuthContext = React.createContext()

// export function useAuth() {
//     return useContext(AuthContext)
// }

// export function AuthProvider({ children }) {

//     const [currentUser, setCurrentUser] = React.useState()

//     const [loading, setLoading] = React.useState(true)


//     function signup(email, password) {
//         console.log("user " + currentUser.email + " sign up")
//         return auth.createUserWithEmailAndPassword(email, password)
//     }
//     function login(email, password) {
        

//         console.log("user " + currentUser.email + " logged in")
//         return auth.signInWithEmailAndPassword(email, password)
//     }
//     function logout() {
//         console.log("user " + currentUser.email + " logged out")
//         return auth.signOut;
        
//     }
//     function userCurrent(user){
//         setCurrentUser(user);
//         setLoading(false)
//     }
    
//     function unsubscrbedUser(){
//         const unsubscribe = auth.onAuthStateChanged(userCurrent)
        
//         return unsubscribe
//     }
   
//     useEffect(unsubscrbedUser, [])
//     const value = {
//         currentUser,
//         signup,
//         login,
//         logout
//     }

//     return (
//         <AuthContext.Provider value={value}>
//             {!loading && children}
//         </AuthContext.Provider>
//     )
// }


import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
// import { auth } from '../firebase';


 import { auth } from "./model/firebaseModel";

const UserContext = createContext();

  function AuthProvider  ({ children }) {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

   const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
   }

  function logout  () {
      return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

 function UserAuth  () {
  return useContext(UserContext);
};

export{UserAuth, AuthProvider}