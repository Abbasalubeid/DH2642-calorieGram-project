import React from "react";
import "../css/bmiSearch.css"

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
        <div classname="bmi-info">
            <div className={!props.showBmiInfo?  "hidden" : " "}>
                <p>
                Body mass index (BMI) to determine how healthy you are.
                    For most adults, a BMI between 18.5 to 24.9 is the idead BMI to have.

                    BMI is not a perfect measure, because it does not directly assess body fat.
                    Muscle and bone are denser than fat, so an athlete or muscular person may have a high BMI, yet not have too much fat. But most people are not athletes,
                    and for most people, BMI is a very good gauge of their level of body fat.
                </p>
                    
                </div>
        </div>  
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
        
        
        <div classname="Activity-per-week-info">
            <div className={!props.showActivityPerWeekInfo?  "hidden" : " "}>
                        By choosing how many times you intend to train per week you will be presented 
                        with a set of goals to achieve. <br></br>
                        Each set has first the main goal which can vary from mild weight loss 
                        to extreme weight gain, then amount of calories you need to take daily to achieve
                        that goal.

                </div>
        </div>
            
    </div>
);
}
