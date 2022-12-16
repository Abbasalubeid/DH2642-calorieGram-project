import React from "react";
import "../css/bmiSearch.css";
import "../css/dietSearch.css";
import "../css/goalsSearch.css";

export default function SearchView(props) {

    const [ageError, setAgeError] = React.useState("");
    const [heightError, setHeightError] = React.useState("");
    const [weightError, setWeightError] = React.useState("");
    const [emptyBoxError, setEmptyBoxError] =  React.useState("");

    function userSavedACB(event) {
        event.preventDefault();
        if(props.age === "" || props.height === "" || props.weight === ""){
            setEmptyBoxError(true);
            return;
        }
        props.onUserSearched();
    }

    function userTypedAgeACB(event) {

        try {
            props.onUserChangedAge(event.target.value);
            setAgeError("");
        } catch (error) {
            setAgeError(error.message);
        }

    }

    function userTypedWeightACB(event) {
        try {
            props.onUserChangedWeight(event.target.value);
            setWeightError("");
        } catch (error) {
            setWeightError(error.message);
        }
    }

    function userTypedHeightACB(event) {
        try {
            props.onUserChangedHeight(event.target.value);
            setHeightError("");
        } catch (error) {
            setHeightError(error.message);
        }
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
                        {emptyBoxError&&props.age === ""? 
                        <label className="error-msg"> {"<--"}Age is required!</label> : ""}
                    </div>
                    {ageError !== ""? 
                    <label className="error-msg">{ageError}</label> : ""}
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
                        {emptyBoxError&&props.weight === ""? 
                        <label className="error-msg"> {"<--"}Weight is required!</label> : ""}
                        </div>
                        {weightError !== ""?
                    <label className="error-msg">{weightError}</label> : ""}
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
                            defaultValue = {props.height} className="input-box"/>
                        {emptyBoxError&&props.height === ""? 
                        <label className="error-msg"> {"<--"}Height is required!</label> : ""}
                        </div>
                        {heightError !== ""? 
                    <label className="error-msg">{heightError}</label> : ""}
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
