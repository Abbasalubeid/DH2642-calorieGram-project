import React from "react";
import "../css/goalsSearch.css";

export default function GoalsSearchView(props) {
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

    function userChooseGenderACB(event) {
        props.onUserChangedGender(event.target.value);
    }

    function userChooseLevelACB(event) {
        props.onUserChooseLevel(event.target.value);
    }

    const options =
        [
            { value: "level_1", type: "Sedentary: little or no exercise" },
            { value: "level_2", type: "Light Exercise (1-2 days/week)" },
            { value: "level_3", type: "Exercise 4-5 times/week" },
            { value: "level_4", type: "Daily exercise or intense exercise 3-4 times/week" },
            { value: "level_5", type: "Intense exercise 6-7 times/week" },
            { value: "level_6", type: "Very intense exercise daily, or physical job" },
        ];

    function renderOptionsCB(opt) {
        return <option value={opt.value} key={opt.value}> {opt.type} </option>
    }

    return (
        <div className="goalsearchview">
            <table>
                <tbody>
                    <tr>
                        <td className="column">
                            <label>Gender</label>
                        </td>
                        <td>
                            <label className="container gender">Male
                                <input type="radio" value="male" name="gender"
                                    onInput={userChooseGenderACB} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container gender">Female
                                <input type="radio" value="female" name="gender"
                                    onInput={userChooseGenderACB} />
                                <span className="checkmark"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="age">Age</label>
                        </td>
                        <td>
                            <input
                                type="number"
                                name="age"
                                maxLength="3"
                                placeholder="age"
                                onChange={userTypedAgeACB}
                                className="input-box"
                                required="required"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="weight">Weight</label>
                        </td>
                        <td>
                            <input type="text" name="weight" maxLength="3"
                                width="60px" placeholder="kg" onChange={userTypedWeightACB}
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
                                width="60px" placeholder="cm" onChange={userTypedHeightACB}
                                className="input-box"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="activity">Activity</label>
                        </td>
                        <td>
                            <select name="activity" className="select" onChange={userChooseLevelACB}>
                                <option>Choose Activity</option>
                                {options.map(renderOptionsCB)}
                            </select>
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
