import React from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Logout() {

    const [error, setError] = React.useState('')
    const [currentUser, logout] = React.useState()
    const navigate = useNavigate()
   async function userLogedOutACB() {
        setError("")
        try {
            logout()
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