import { Link } from "react-router-dom";
import "../css/login.css";

export default function LoginView(props) {

    function handleLoginACB(e) {
        e.preventDefault();
        props.onUserSignIn();
    }

    function userEmailACB(event) {
        props.onUserEmail(event.target.value)
    }

    function userPasswordACB(event) {
        props.onUserPassword(event.target.value)
    }
    return (
        <div>
            <form onSubmit={handleLoginACB}>
                <label htmlFor="email">Email address:</label><br />
                <input type="email" placeholder="abc@email.com" onChange={userEmailACB}></input><br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" placeholder="**********" onChange={userPasswordACB}></input><br />
                <Link to={"/signup"}>Create a new account</Link>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}
