import React from "react";
import { AuthProvider } from "../context/AuthContext.js";
import RegisterView from "../view/registerView.js";


export default function RegisterPresenter(props) {

    return (
        <AuthProvider>
            <div>
                <RegisterView />
            </div>
        </AuthProvider>

    )

}