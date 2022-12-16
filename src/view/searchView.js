import React from "react";
import "../css/bmiSearch.css";
import "../css/dietSearch.css";
import "../css/goalsSearch.css";

export default function SearchView(props) {

    const [ageError, setAgeError] = React.useState(false);
    const [heightError, setHeightError] = React.useState(false);
    const [weightError, setWeightError] = React.useState(false);
    const [emptyBox, setEmptyBox] =  React.useState(false);

    function userSavedACB(event) {
        console.log(props.age)

        event.preventDefault();
        props.onUserSearched();

    }

    function userTypedAgeACB(event) {

        if(!event.target.value || (event.target.value > 1 && event.target.value < 80)){
            console.log(event.target.value);
            
            props.onUserChangedAge(event.target.value);
            console.log(props.age)
            setAgeError(false);
        }
        else
            setAgeError(true);
        
    }

    function userTypedWeightACB(event) {

        if(!event.target.value || (event.target.value < 160 && event.target.value >  40 )){
            console.log(event.target.value);    
            console.log(props.weight)
            props.onUserChangedWeight(event.target.value);
            setWeightError(false);
        }
        else
            setWeightError(true);
    }

    function userTypedHeightACB(event) {

        if(!event.target.value || (event.target.value > 130 && event.target.value <  230 )){ 
            console.log(event.target.value);    
            console.log(props.height)
            props.onUserChangedHeight(event.target.value);
            setHeightError(false);
        }
        else
            setHeightError(true);
        

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
           
            <div className="Activity-per-week-info">
                <div className={!props.showActivityPerWeekInfo ? "hidden" : " "}>
                    By choosing how many times you intend to train per week you will be presented
                    with a set of goals to achieve. <br></br>
                    Each set has first the main goal which can vary from mild weight loss
                    to extreme weight gain, then amount of calories you need to take daily to achieve
                    that goal.
                </div>
            </div>
            <form>
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
                    <div>
                        <input
                            type="number"
                            name="age"
                            maxLength="3"
                            placeholder="age"
                            onChange={userTypedAgeACB}
                            defaultValue = {props.age}
                            className="input-box"
                        />
                    </div>
                    {ageError? 
                    <label className="error-msg">Age must be an integer between 2 and 80!</label> : ""}
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="weight">Weight</label>
                    </td>
                    
                    <td>
                        <div>
                        <input type="number" name="weight" maxLength="3"
                            width="60px" placeholder="kg" onChange={userTypedWeightACB}
                            defaultValue = {props.weight} className="input-box" />
                        </div>
                        {weightError? 
                    <label className="error-msg">Weight must be an integer between 40 and 160!</label> : ""}
                    </td>

                </tr>
                <tr>
                    <td>
                        <label htmlFor="height">Height</label>
                    </td>
                    <td>
                        <div>
                        <input
                            type="number"  name="height" maxLength="3"
                            width="60px" placeholder="cm" onChange={userTypedHeightACB}
                            defaultValue = {props.height} className="input-box"
                        />
                        </div>
                        {heightError? 
                    <label className="error-msg">Height must be an integer between 130 and 230!</label> : ""}
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
        </form>
        
            
    </div>
);
       
}
