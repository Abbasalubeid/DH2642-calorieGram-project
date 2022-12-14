import React from "react"

export default function Logout() {

    const [error, setError] = React.useState('')
    function userLogedOutACB() {
        
    }

    return(
            
            <div>
                <button onClick={userLogedOutACB}>Log out</button>
            </div>
            
          )
    
}