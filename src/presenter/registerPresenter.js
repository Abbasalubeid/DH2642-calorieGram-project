import React from "react";
import RegisterView from "../view/registerView.js";


export default function LoginPresenter(props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleNameACB(name) {
        setName(name)
    }
    function handleEmailACB(email) {
        setEmail(email)
    }

    function handlePasswordACB(password) {
        setPassword(password)
    }

    function handleLoginACB() {
        props.model.signUp(email, password);
    }

    return (
        <div>
            <RegisterView onUserSignUp={handleLoginACB} onUserName={handleNameACB} onUserEmail={handleEmailACB} onUserPassword={handlePasswordACB} />
        </div>
    )

}