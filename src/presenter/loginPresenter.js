import React from "react";
import LoginView from "../view/loginView.js";
import { AuthProvider } from "../context/AuthContext.js";


export default function LoginPresenter(props) {

    return (
        <AuthProvider>
             <div>
                 <LoginView />
            </div>
        </AuthProvider>
       
    )

}