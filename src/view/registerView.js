import { Link, useNavigate } from "react-router-dom";

import "../css/login.css";
// new import
import { useAuth } from "../context/AuthContext";
import React, { useRef, useState } from "react";


export default function LoginView(props) {

    // from here 
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('pasword do not match')
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
            alert("Your account have successfully created.")
            navigate("/login")
        } catch {
            setError("Failed To create account")
        }
        setLoading(false)

    }
    // to here are new

    function handleUsernameACB(e) {
        props.onUserName(e.target.value);
    }
    function handleEmailACB(e) {
        props.onUserEmail(e.target.value);
    }
    function handlePasswordACB(e) {
        props.onUserPassword(e.target.value);
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
