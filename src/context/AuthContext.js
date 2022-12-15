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
        console.log("user " + currentUser.email + " sign up")
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password) {
        console.log("user " + currentUser.email + " logged in")
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logout() {
        console.log("user " + currentUser.email + " logged out")
        return auth.signOut;
        
    }
    function userCurrent(user){
        setCurrentUser(user);
        setLoading(false)
    }
    
    function unsubscrbedUser(){
        const unsubscribe = auth.onAuthStateChanged(userCurrent)
        
        return unsubscribe
    }

    useEffect(unsubscrbedUser, [])
    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}