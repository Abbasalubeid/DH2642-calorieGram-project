import { Link } from "react-router-dom";
import React, {useRef, useState} from "react";
import "../css/login.css";
// new import
import { useAuth } from "../context/AuthContext";


export default function LoginView() {
   
   // from here 
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup} = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('pasword do not match')
        }
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
        console.log(e.target.value);
    }

    function handleEmailACB(e) {
        console.log(e.target.value);
    }
    function handlePasswordACB(e) {
        console.log(e.target.value);
    }
    function handleUsernameACB(e) {
        console.log(e.target.value);
    }

    return (
        <div className="login-banner">
            <div className="form-container">
                <h2>Create a new account</h2>
                {error}
                <form onSubmit={handleSubmit} className="form-register">
                    <label htmlFor="email" >Email address:</label>
                    <input type="email" placeholder="abc@email.om" onChange={handleEmailACB} ref={emailRef}></input>
                    <label htmlFor="username">Username:</label>
                    <input type="username" onChange={handleUsernameACB}></input>
                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder="**********" onChange={handlePasswordACB} ref={passwordRef}></input>
                    <label htmlFor="password">Re-type password:</label>
                    <input type="password" placeholder="**********" onChange={handlePasswordACB} ref={passwordConfirmRef}></input>
                    <button disabled={loading} type='submit' className="btn">Sign up</button>
                    <Link to="/login">Already have a account? Sign in</Link>
                </form>
            </div>
        </div>
    )
}
