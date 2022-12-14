import React from "react";

export default function SearchView(props){

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
    function userChooseGoalACB(event){
    props.onUserChooseGoal(event.target.value);
}

function renderOptionsCB(opt) {
    return <option value={opt.value} key={opt.value}>{opt.type}</option>
}

return (
    <div className="goalsearchview">
        <table>
            <tbody>
                <tr className={!props.showGender?  "hidden" : " "}>
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
                            onBlur={userTypedAgeACB}
                            defaultValue = {props.age}
                            className="input-box"
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="weight">Weight</label>
                    </td>
                    <td>
                        <input type="number" name="weight" maxLength="3"
                            width="60px" placeholder="kg" onBlur={userTypedWeightACB}
                            defaultValue = {props.weight} className="input-box" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="height">Height</label>
                    </td>
                    <td>
                        <input
                            type="number"  name="height" maxLength="3"
                            width="60px" placeholder="cm" onBlur={userTypedHeightACB}
                            defaultValue = {props.height} className="input-box"
                        />
                    </td>
                </tr>
                <tr className={!props.showLevels?  "hidden" : " "}>
                    <td >
                        <label htmlFor="activity">Activity</label>
                    </td>
                    <td>
                        <select name="activity" className="select" onChange={userChooseLevelACB}>
                            <option>Choose Activity</option>
                            {props.levels?.map(renderOptionsCB)}
                        </select>
                    </td>
                </tr>
                <tr className={!props.showGoals?  "hidden" : " "}>
                    <td>
                        <label htmlFor="activity">Goal</label>
                    </td>
                    <td>
                        <select name="activity" className="select" onChange={userChooseGoalACB}>
                            <option>Choose goal</option>
                            {props.goals?.map(renderOptionsCB)}
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
