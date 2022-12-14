import React from "react";
import LoginView from "../view/loginView.js";
import { AuthProvider } from "../context/AuthContext.js";


export default function LoginPresenter(props) {
    // const [searchParams, setSearchParams] = React.useState({});

    // function userSearchedACB() {
    //     setPromise(getFitnessInfo(searchParams));
    // }

    return (
        <AuthProvider>
             <div>
            <LoginView />
            </div>
        </AuthProvider>
       
    )

}