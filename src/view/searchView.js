import React from "react";



export default function SearchView(props) {

    function userSavedACB() {
        props.onUserSearched();
    }

    function userTypedAgeACB(event) {
        props.onUserChangedAge(event.target.value);
    }
    function userTypedWeightACB(event) {
        props.onUserChangedWeight(event.target.value);
    }
    function userTypedHeightACB(event) {
        props.onUserChangedHeight(event.target.value);
    }

    return (
        <div>
            <div>
                <input type="radio" value="Male" name="gender" /> Male
                <input type="radio" value="Female" name="gender" /> Female
                <input type="radio" value="Other" name="gender" /> Other
            </div>
            <input placeholder="Age" onInput={userTypedAgeACB}></input>
            <input placeholder="Weight" onInput={userTypedWeightACB}></input>
            <input placeholder="Height" onInput={userTypedHeightACB}></input>
            <button onClick={userSavedACB}>Calculate</button>
        </div>
    );

}