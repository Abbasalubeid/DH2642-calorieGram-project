import React from "react";
import RegisterView from "../view/registerView.js";


export default function LoginPresenter(props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');



    return (
        <div>
            <RegisterView />
        </div>
    )

}