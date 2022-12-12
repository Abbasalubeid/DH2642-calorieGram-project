import { Link } from "react-router-dom";
import "../css/register.css";

export default function LoginView() {
    return (
        <div>
            <form onSubmit>
                <label htmlFor="email">Email address:</label><br />
                <input type="email" onChange></input> <div>
                    <label htmlFor="username">Username:</label><br />
                    <input type="username" onChange></input></div>
                <label htmlFor="password">Password:</label><br />
                <input type="password" onChange></input>
                <Link to={"/Login"}>back</Link>
                <button type='submit'>Sign up</button>
            </form>
        </div>
    )
}
