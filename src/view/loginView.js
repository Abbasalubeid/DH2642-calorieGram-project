import { Link } from "react-router-dom";
import "../css/login.css";
import FitnessModel from "../model/FitnessModel.js";
import FirebaseModel from "../model/firebaseModel.js";

export default function LoginView(props) {
    function handleLoginACB(e) {
        e.preventDefault();
        props.onUserSignIn(e.target.value);
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
                <h2>Login</h2>
                <form onSubmit={handleLoginACB} className="form-login">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" placeholder="abc@email.com" onChange={handleEmailACB} required="required"></input>
                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder="**********" onChange={handlePasswordACB}></input>
                    <button type="submit" className="btn">Log in</button>
                    <Link to={"/signup"}>Don't have a account? Sign up</Link>
                </form>
            </div>
        </div>
    )
}
