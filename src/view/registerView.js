import { Link } from "react-router-dom";
import "../css/register.css";

export default function LoginView() {
    return (
        <div>
            <form>
                <label htmlFor="email">Email address:</label><br />
                <input type="email" placeholder="abc@email.om"></input> <div>
                    <label htmlFor="username">Username:</label><br />
                    <input type="username"></input></div>
                <label htmlFor="password">Password:</label><br />
                <input type="password" placeholder="**********"></input><br />
                <label htmlFor="password">Retype password:</label><br />
                <input type="password" placeholder="**********"></input><br />
                <button type='submit'>Sign up</button>
                <Link to="/login">Already have a account? Sign in</Link><br />
            </form>
        </div>
    )
}
