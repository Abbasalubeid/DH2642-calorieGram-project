import { Link } from "react-router-dom";
import "../css/register.css";

export default function LoginView() {
    return (
        <div>
            <form onSubmit>
                <label htmlFor="email">Email address:</label><br />
                <input type="email" placeholder="abc@email.om" onChange></input> <div>
                    <label htmlFor="username">Username:</label><br />
                    <input type="username" onChange></input></div>
                <label htmlFor="password">Password:</label><br />
                <input type="password" placeholder="**********" onChange></input><br />
                <label htmlFor="password">Retype password:</label><br />
                <input type="password" placeholder="**********" onChange></input><br />
                <Link to="/login">Already have a account? Sign in</Link><br />
                <button type='submit'>Sign up</button>
            </form>
        </div>
    )
}
