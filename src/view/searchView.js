import React from "react";
import "../css/bmiSearch.css";
import "../css/dietSearch.css";
import "../css/goalsSearch.css";

export default function SearchView(props) {

    const [ageError, SetAgeError] = React.useState(false);
    const [heightError, SetHeightError] = React.useState(false);
    const [weightError, SetWeightError] = React.useState(false);
    

    function userSavedACB(event) {
        event.preventDefault();
        props.onUserSearched();
    }
    function userTypedAgeACB(event) {

        if(!event.target.value || (event.target.value > 1 && event.target.value < 80)){
            props.onUserChangedAge(event.target.value);
            SetAgeError(false);
            return;
        }

        if ((event.target.value < 1)){
            props.onUserChangedAge(event.target.value);
            SetAgeError("Age cannot be less than 1");
        }
        // }
        // if(event.target.value < 80)

    
        // if (!(event.target.value > 1 && event.target.value < 80)){
        //     SetAgeError(true);
        // }
        
            
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

    function renderOptionsCB(opt) {
        return <option value={opt.value} key={opt.value}>{opt.type}</option>
    }

    return (
        <div>
            {/* <div className="Activity-per-week-info">
                <div className={!props.showActivityPerWeekInfo ? "hidden" : " "}>
                    By choosing how many times you intend to train per week you will be presented
                    with a set of goals to achieve. <br></br>
                    Each set has first the main goal which can vary from mild weight loss
                    to extreme weight gain, then amount of calories you need to take daily to achieve
                    that goal.
                </div>
            </div> */}
                   < table >
                <tbody>
                    <tr className={!props.showGender ? "hidden" : " "}>
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
                                onBlur={userTypedAgeACB}
                                defaultValue={props.age}
                                className="input-box" />
                            <span className="grey-text">age</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="weight">Weight</label>
                        </td>
                        <td>
                            <input type="number" name="weight" maxLength="3"
                                width="60px" onBlur={userTypedWeightACB}
                                className="input-box" 
                                defaultValue={props.weight}/>
                                
                            <span className="grey-text">kg</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="height">Height</label>
                        </td>
                        <td>
                            <input
                                type="number" name="height" maxLength="3"
                                width="60px" onBlur={userTypedHeightACB}
                                className="input-box" defaultValue={props.height}/>
                            <span className="grey-text">cm</span>
                        </td>
                    </tr>
                    <tr className={!props.showLevels ? "hidden" : " "}>
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
                    <tr className={!props.showGoals ? "hidden" : " "}>
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
                            <input type="submit" name="submit" value="Calculate!" className="btn" onClick={userSavedACB} />
                        </td>
                    </tr>
                </tbody>
            </table >


        </div >
    );
}
