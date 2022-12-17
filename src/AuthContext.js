
// import { createContext, useContext, useEffect, useState } from 'react';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from 'firebase/auth';
// // import { auth } from '../firebase';


//  import { auth } from "./model/firebaseModel";

// const UserContext = createContext();

//   function AuthProvider  ({ children }) {
//   const [user, setUser] = useState({});

//   const createUser = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//    const signIn = (email, password) =>  {
//     return signInWithEmailAndPassword(auth, email, password)
//    }

//   function logout  () {
//       return signOut(auth)
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
     
//       setUser(currentUser);
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
    
//     <UserContext.Provider value={{ createUser, user, logout, signIn }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

//  function UserAuth  () {
//   return useContext(UserContext);
// };


// export{UserAuth, AuthProvider}