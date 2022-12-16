import React from "react";

import Logout from "../view/logout.js";
import { AuthProvider } from "./AuthContext.js";
// import PrivateRoute from "../view/privateRout.js";


export default function LogoutPresenter() {

    return (
        <AuthProvider>
             <div>
                 <Logout />
                 
            </div>
        </AuthProvider>
       
    )

}