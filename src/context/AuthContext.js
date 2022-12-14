import React, {useContext, useEffect} from "react";
import { auth } from "../model/firebaseModel";

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){

    const[currentUser, setCurrentUser] = React.useState()

    const[loading, setLoading] = React.useState(true)

    function signup(email, password) {
     return auth.createUserWithEmailAndPassword(email, password)   
    }
   useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user => { 
       
        setCurrentUser(user);
        setLoading(false)
    })
    return unsubscribe
   }, [])
    const value = {
        currentUser,
        signup
    }

    return(
        <AuthContext.Provider value={value}> 
            {!loading && children}
        </AuthContext.Provider>
    )
}