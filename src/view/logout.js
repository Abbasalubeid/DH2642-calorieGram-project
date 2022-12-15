import React from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Logout() {

    const [error, setError] = React.useState('')
    const {currentUser, logout} = useAuth();
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