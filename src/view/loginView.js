import { Link } from "react-router-dom";
import "../css/login.css";

export default function LoginView() {
    function handleLoginACB(e) {
        // e.preventDefault();
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
