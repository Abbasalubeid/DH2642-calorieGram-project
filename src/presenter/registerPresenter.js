import React from "react";
import { AuthProvider } from "./AuthContext.js";
import RegisterView from "../view/registerView.js";


export default function LoginPresenter(props) {
  
    return (
        <AuthProvider>
            <div>
                <RegisterView />
            </div>
        </AuthProvider>
       
    )

}