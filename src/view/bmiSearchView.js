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
            <form>
                <table>
                    <tbody>
                        <tr><td className="column"></td></tr>
                        <tr>
                            <td><label htmlFor="age">Age</label></td>
                            <td>
                                <input
                                    type="text" name="age" maxLength="3"
                                    placeholder="age" onBlur={userTypedAgeACB}
                                    className="input-box" required />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="weight">Weight</label></td>
                            <td>
                                <input type="number" name="weight" maxLength="3"
                                    placeholder="kg" onBlur={userTypedWeightACB}
                                    className="input-box" required />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="height">Height</label></td>
                            <td>
                                <input
                                    type="number" name="height" maxLength="3"
                                    placeholder="cm" onBlur={userTypedHeightACB}
                                    className="input-box" required />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="submit" name="submit" value="Calculate!"
                                    className="btn-submit btn-lg" onClick={userSavedACB} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}
