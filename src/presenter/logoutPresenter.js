import React from "react";

import Logout from "../view/logout.js";
import { AuthProvider } from "../context/AuthContext.js";


export default function LogoutPresenter(props) {

    return (
        <AuthProvider>
             <div>
                 <Logout />
            </div>
        </AuthProvider>
       
    )

}