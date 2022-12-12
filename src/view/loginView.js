import { Link } from "react-router-dom";
import "../css/login.css";

export default function LoginView() {
    return (
        <div>
            <form>
                <label htmlFor="email">Email address:</label><br />
                <input type="email" placeholder="abc@email.com"></input><br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" placeholder="**********"></input><br />
                <button type="submit">Log in</button>
                <Link to={"/signup"}>Don't have a account? Sign up</Link>
            </form>
        </div>
    )
}
