import React from "react";
import LoginView from "../view/loginView.js";


export default function LoginPresenter(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleEmailACB(email) {
        setEmail(email)
    }

    function handlePasswordACB(password) {
        setPassword(password)
    }

    function handleLoginACB() {
        props.model.signIn(email, password);
    }

    return (
        <div>
            <LoginView onUserSignIn={handleLoginACB} onUserEmail={handleEmailACB} onUserPassword={handlePasswordACB} />
        </div>
    )

}