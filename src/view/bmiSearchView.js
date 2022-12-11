import React from "react";
import "../css/bmiSearch.css";

export default function BmiSearchView(props) {
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
        <div className="searchview-container">
            <table>
                <tbody>
                    <tr>
                        <td className="column">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="age">Age</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="age"
                                maxLength="3"
                                placeholder="age"
                                onChange={userTypedAgeACB}
                                defaultValue = {props.age}
                                className="input-box"
                            />
                            <span className="greytext">nr</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="weight">Weight</label>
                        </td>
                        <td>
                            <input type="text" name="weight" maxLength="3"
                                placeholder="kg" onChange={userTypedWeightACB}
                                defaultValue = {props.weight}
                                className="input-box" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="height">Height</label>
                        </td>
                        <td>
                            <input
                                type="text" name="height" maxLength="3"
                                placeholder="cm" onChange={userTypedHeightACB}
                                defaultValue = {props.height}
                                className="input-box"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="submit" name="submit" value="Calculate!" className="btn-submit btn-lg" onClick={userSavedACB} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
