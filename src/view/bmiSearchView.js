import React from "react";

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
                                width="60px"
                                placeholder="age"
                                onInput={userTypedAgeACB}
                                className="input-box"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="weight">Weight</label>
                        </td>
                        <td>
                            <input type="text" name="weight" maxLength="3"
                                width="60px" placeholder="kg" onInput={userTypedWeightACB}
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
                                width="60px" placeholder="cm" onInput={userTypedHeightACB}
                                className="input-box"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="submit" name="submit" value="Calculate!" className="btn-submit btn-lg" onClick={userSavedACB}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
