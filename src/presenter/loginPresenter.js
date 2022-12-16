import React from "react";
import LoginView from "../view/loginView.js";
import { AuthProvider } from "./AuthContext.js";
import Signin from "../components/Signin.jsx";


export default function LoginPresenter() {

    return (
        <AuthProvider>
             <div>
                 <Signin />
            </div>
        </AuthProvider>
       
    )

}