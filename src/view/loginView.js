import { Link } from "react-router-dom";
import "../css/login.css";
// new import
import { useAuth } from "../context/AuthContext";
import React, {useRef, useState} from "react";

export default function LoginView() {
    // from here 
    const emailRef = useRef();
    const passwordRef = useRef();
    const {signup} = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch  {
            setError("Failed To create account")
        }
            setLoading(false)
       
    }
    // to here are new

    function handleLoginACB(e) {
        e.preventDefault();
        console.log(e);
    }

    function handleEmailACB(e) {
        console.log(e.target.value);
    }
    function handlePasswordACB(e) {
        console.log(e.target.value);
    }
    return (
        <div className="login-banner">
            <div className="form-container">
                <h2>Login</h2>
                
                <form onSubmit={handleSubmit} className="form-login">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" placeholder="abc@email.com" onChange={handleEmailACB} required="required" ref={emailRef}></input>
                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder="**********" onChange={handlePasswordACB} ref={passwordRef}></input>
                    <button disabled={loading} type="submit" className="btn">Log in</button>
                    <Link to={"/signup"}>Don't have a account? Sign up</Link>
                </form>
            </div>
        </div>
    )
}
