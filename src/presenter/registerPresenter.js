import React from "react";
import RegisterView from "../view/registerView.js";


export default function LoginPresenter(props) {
    const [searchParams, setSearchParams] = React.useState({});

    function userSearchedACB() {
        setPromise(getFitnessInfo(searchParams));
    }

    return (
        <div>
            <RegisterView />
        </div>
    )

}