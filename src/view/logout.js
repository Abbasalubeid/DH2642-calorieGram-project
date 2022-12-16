import React from "react"
import { useNavigate } from "react-router-dom"
import {UserAuth } from "../presenter/AuthContext"

export default function Logout() {

    const [error, setError] = React.useState('')
    const {currentUser, logout} = UserAuth();
    const navigate = useNavigate()
   
    async function userLogedOutACB() {
        setError("")
        try {
            await logout()
            
            navigate("/login")
            
        } catch  {
            setError("failed to log out")
     }
    }

    return(
            
            <div>
                <button onClick={userLogedOutACB} className ="btn">Log out</button>
            </div>
            
          )
    
}