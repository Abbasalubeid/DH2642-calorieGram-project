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
            <table>
                <tbody>
                    <tr>
                        <td>Gender</td>
                        <td>
                            <label>
                                <input type="radio" value="Male" name="gender" /> Male
                            </label>
                            <label>
                                <input type="radio" value="Female" name="gender" /> Female
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="age">Age</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="age"
                                maxLength="3"
                                width="60px"
                                placeholder="age"
                                onInput={userTypedAgeACB}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="weight">Weight</label>
                        </td>
                        <td>
                            <input
                                type="text" name="weight" maxLength="3"
                                width="60px" placeholder="kg" onInput={userTypedWeightACB}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="height">Height</label>
                        </td>
                        <td>
                            <input
                                type="text" name="height" maxLength="3"
                                width="60px" placeholder="cm" onInput={userTypedHeightACB}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="activity">Activity</label>
                        </td>
                        <td>
                            <select name="activity" className="select">
                                <option>Choose Activity</option>
                                <option value="1.2">
                                    Sedentary: little or no exercise
                                </option>
                                <option value="1.375">Light Exercise (1-2 days/week)</option>
                                <option value="1.55">Exercise 4-5 times/week”,</option>
                                <option value="1.725">
                                    Daily exercise or intense exercise 3-4 times/week”,
                                </option>
                                <option value="1.825">Intense exercise 6-7 times/week”,</option>
                                <option value="1.9">
                                    Very intense exercise daily, or physical job”
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="submit" name="submit" value="Calculate!" className="submit-button" onClick={userSavedACB} />
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* <div>
                <input type="radio" value="Male" name="gender" /> Male
                <input type="radio" value="Female" name="gender" /> Female
                <input type="radio" value="Other" name="gender" /> Other
            </div>
            <input placeholder="Age" onInput={userTypedAgeACB}></input>
            <input placeholder="Weight" onInput={userTypedWeightACB}></input>
            <input placeholder="Height" onInput={userTypedHeightACB}></input>
            <button onClick={userSavedACB}>Calculate</button> */}
        </div>
    );

}
