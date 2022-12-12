import { Link } from "react-router-dom";
import "../css/register.css";

export default function LoginView(props) {

    function handleLoginACB(e) {
        e.preventDefault();
        props.onUserCreate();
    }

    function userEmailACB(event) {
        props.onUserEmail(event.target.value)
    }

    function userPasswordACB(event) {
        props.onUserPassword(event.target.value)
    }
    function userNameACB(event) {
        props.onUserName(event.target.value)
    }
    return (
        <div>
            <form onSubmit={handleLoginACB}>
                <label htmlFor="email">Email address:</label><br />
                <input type="email" placeholder="abc@email.om" onChange={userEmailACB}></input> <div>
                    <label htmlFor="username">Username:</label><br />
                    <input type="username" onChange={userNameACB}></input></div>
                <label htmlFor="password">Password:</label><br />
                <input type="password" placeholder="**********" onChange={userPasswordACB}></input><br />
                <label htmlFor="password">Retype password:</label><br />
                <input type="password" placeholder="**********" onChange={userPasswordACB}></input><br />
                <Link to="/login">Already have a account? Sign in</Link><br />
                <button type='submit'>Sign up</button>
            </form>
        </div>
    )
}
