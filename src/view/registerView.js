import { Link } from "react-router-dom";
import "../css/login.css";

export default function LoginView(props) {
    function handleRegisterACB(e) {
        e.preventDefault();
        props.onUserSignUp(e.target.value);
    }
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
                <form onSubmit={handleRegisterACB} className="form-register">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" placeholder="abc@email.om" onChange={handleEmailACB}></input>
                    <label htmlFor="username">Username:</label>
                    <input type="username" onChange={handleUsernameACB}></input>
                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder="**********" onChange={handlePasswordACB}></input>
                    <label htmlFor="password">Re-type password:</label>
                    <input type="password" placeholder="**********" onChange={handlePasswordACB}></input>
                    <button type='submit' className="btn">Sign up</button>
                    <Link to="/login">Already have a account? Sign in</Link>
                </form>
            </div>
        </div>
    )
}
