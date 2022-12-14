import React, { useContext, useEffect } from "react";
import { auth } from "../model/firebaseModel";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = React.useState()

    const [loading, setLoading] = React.useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    function rer(user){
        setCurrentUser(user);
        setLoading(false)
    }
    

    function unsubscrbedUser(){
        const unsubscribe = auth.onAuthStateChanged(rer)
        
        return unsubscribe
    }

    useEffect(unsubscrbedUser, [])
    const value = {
        currentUser,
        signup,
        login
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}