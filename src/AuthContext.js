import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

 import { auth } from "./model/firebaseModel";

const UserContext = createContext();

  function AuthProvider  ({ children }) {
  const [user, setUser] = useState({});

  function createUser (email, password){
    return createUserWithEmailAndPassword(auth, email, password);
  };

   function signIn  (email, password)  {
    return signInWithEmailAndPassword(auth, email, password)
   }

  function logout  () {
      return signOut(auth)
  }

  function personUnsubscribedACB(){
    function checkUserACB(currentUser){
      setUser(currentUser);
    }
      const unsubscribe = onAuthStateChanged(auth, checkUserACB)
    return function getUnsubscribeUser() { unsubscribe()};
  }
  useEffect(personUnsubscribedACB, [])

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
