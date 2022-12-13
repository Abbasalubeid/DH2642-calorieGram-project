
export default function DietSearchView(props){

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

const goals =
[
    { value: "maintain", type: "Maintain weight" },
    { value: "mildlose", type: "Mild weight loss" },
    { value: "weightlose", type: "Weight loss" },
    { value: "extremelose", type: "Extreme Weight loss" },
    { value: "mildgain", type: "Mild weight gain" },
    { value: "weightgain", type: "Weight gain" },
    { value: "extremegain", type: "Extreme weight gain" }
];

const levels =
[
    { value: "1", type: "Sedentary: little or no exercise" },
    { value: "2", type: "Light Exercise (1-2 days/week)" },
    { value: "3", type: "Exercise 4-5 times/week" },
    { value: "4", type: "Daily exercise or intense exercise 3-4 times/week" },
    { value: "5", type: "Intense exercise 6-7 times/week" },
    { value: "6", type: "Very intense exercise daily, or physical job" },
];

function renderOptionsCB(opt) {
    return <option value={opt.value} key={opt.value}>{opt.type}</option>
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
                            onBlur={userTypedAgeACB}
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
                            className="input-box" />
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
                            {levels.map(renderOptionsCB)}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="activity">Goal</label>
                    </td>
                    <td>
                        <select name="activity" className="select" onChange={userChooseGoalACB}>
                            <option>Choose goal</option>
                            {goals.map(renderOptionsCB)}
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


