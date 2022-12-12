import { Link } from "react-router-dom";
import "../css/login.css";

export default function LoginView() {
    return (
        <div>
            <form onSubmit>
                <label htmlFor="email">Email address:</label><br />
                <input type="email" placeholder="abc@email.com" onChange></input><br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" placeholder="**********" onChange></input><br />
                <Link to={"/signup"}>Create a new account</Link>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}
