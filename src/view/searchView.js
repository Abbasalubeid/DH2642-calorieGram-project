import React from "react";
import "../css/bmiSearch.css";
import "../css/dietSearch.css";
import "../css/goalsSearch.css";
import "../css/profile.css";

export default function SearchView(props) {

    const [ageError, setAgeError] = React.useState("");
    const [heightError, setHeightError] = React.useState("");
    const [weightError, setWeightError] = React.useState("");
    const [invalidError, setInavilError] = React.useState(false);
    const [emptyBoxError, setEmptyBoxError] =  React.useState("");

    function userSavedACB(event) {
        event.preventDefault();
        if(props.age === "" || props.height === "" || props.weight === ""){
            setEmptyBoxError(true);
            return;
        }
        else if(ageError !== "" || heightError !== "" || weightError !== ""){
            props.onPersonChanged();
            setInavilError(true);
        }
        else
            props.onUserSearched();
    }

    function userTypedAgeACB(event) {

        try {
            props.onPersonChanged?.();
            props.onUserChangedAge(event.target.value);
            setAgeError("");
            setInavilError(false);
        } catch (error) {
            setAgeError(error.message);
            
        }
        

    }

    function userTypedWeightACB(event) {
        try {
            props.onPersonChanged?.();
            props.onUserChangedWeight(event.target.value);
            setWeightError("");
            setInavilError(false);
        } catch (error) {
            setWeightError(error.message);
        }
    }

    function userTypedHeightACB(event) {
        try {
            props.onPersonChanged?.();
            props.onUserChangedHeight(event.target.value);
            setHeightError("");
            setInavilError(false);
        } catch (error) {
            setHeightError(error.message);
        }
    }
    
    function userChooseGenderACB(event) {
        props.onPersonChanged?.();
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
            <form>
                <table cellSpacing= "17">
                    <tbody>
                        <tr className={!props.showGender ? "hidden" : " "}>
                            <td className="column">
                                <label className="label">Gender</label>
                            </td>
                            <td>
                                <label className="container gender label">Male
                                    <input type="radio" value="male" name="gender"
                                        onInput={userChooseGenderACB} />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container gender label">Female
                                    <input type="radio" value="female" name="gender"
                                        onInput={userChooseGenderACB} />
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="age" className="label">Age</label>
                            </td>
                            <td>
                                <div>
                                    <input
                                        type="number"
                                        name="age"
                                        maxLength="3"
                                        placeholder="age"
                                        onChange={userTypedAgeACB}
                                        defaultValue={props.age}
                                        className="input-box"
                                    />
                                    {emptyBoxError && props.age === "" ?
                                        <label className="error-msg"> {"<--"}Age is required!</label> : ""}
                                </div>
                                {ageError !== "" ?
                                    <label className="error-msg">{ageError}</label> : ""}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="weight" className="label">Weight</label>
                            </td>

                            <td>
                                <div>
                                    <input type="number" name="weight" maxLength="4" 
                                        width="60px" placeholder="kg" onChange={userTypedWeightACB}
                                        defaultValue={props.weight} className="input-box" />
                                    {emptyBoxError && props.weight === "" ?
                                        <label className="error-msg"> {"<--"}Weight is required!</label> : ""}
                                </div>
                                {weightError !== "" ?
                                    <label className="error-msg">{weightError}</label> : ""}
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="height" className="label">Height</label>
                            </td>
                            <td>
                                <div>
                                    <input
                                        type="number" name="height" maxLength="4"
                                        width="60px" placeholder="cm" onChange={userTypedHeightACB}
                                        defaultValue={props.height} className="input-box" />
                                    {emptyBoxError && props.height === "" ?
                                        <label className="error-msg"> {"<--"}Height is required!</label> : ""}
                                </div>
                                {heightError !== "" ?
                                    <label className="error-msg">{heightError} <br></br></label> : ""}
                                {props.userSaved?
                                <label className="saved-msg">Information saved!</label> : ""}
                                {invalidError&&!props.userSaved?
                               <label className="error-msg">Please fill in valid values!</label> : ""}
                            </td>
                        </tr>
                        <tr className={!props.showLevels ? "hidden" : " "}>
                            <td >
                                <label htmlFor="activity" className="label">Activity</label>
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
                                <label htmlFor="activity" className="label">Goal</label>
                            </td>
                            <td>
                                <select name="activity" className="select" onChange={userChooseGoalACB}>
                                    <option>Choose Goal</option>
                                    {props.goals?.map(renderOptionsCB)}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="submit" name="submit" value={props.showSaveButton ? props.showSaveButton : "Calculate!"} className="btn" onClick={userSavedACB}/>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>


        </div >
    );
       
}
