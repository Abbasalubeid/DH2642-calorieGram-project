import React from "react";
import "../css/bmi.css";
import "../css/diet.css";
import "../css/goals.css";
import "../css/profile.css";

export default function SearchView(props) {

    const [ageError, setAgeError] = React.useState("");
    const [heightError, setHeightError] = React.useState("");
    const [weightError, setWeightError] = React.useState("");
    const [invalidError, setInavilError] = React.useState(false);
    const [emptyBoxError, setEmptyBoxError] =  React.useState(false);
    const [newValues, setNewValues] =  React.useState(true);
    const [save, setSave] =  React.useState(true);
    const [calculated, setCalculated] =  React.useState(true);

    function userSavedACB(event) {
        event.preventDefault();
        if(!props.age || !props.height || !props.weight || !props.weight){
            setEmptyBoxError(true);
        }
        if(ageError !== "" || heightError !== "" || weightError !== ""){
            props.onPersonChanged();
            setInavilError(true);
            setEmptyBoxError(false);
        }

        else{
            props.onUserSearched(save);
            setCalculated(true)
        }
            
    }

    function userTypedAgeACB(event) {

        try {
            props.onPersonChanged?.();
            props.onUserChangedAge(event.target.value);
            setAgeError("");
            setInavilError(false);
            setEmptyBoxError(false);
            if(event.target.value !== props.age)
                setNewValues(false);
        } catch (error) {
            setAgeError(error.message);
            
        }
        setEmptyBoxError(false);
    }

    function userTypedWeightACB(event) {
        try {
            props.onPersonChanged?.();
            props.onUserChangedWeight(event.target.value);
            setWeightError("");
            setInavilError(false);
            if(event.target.value !== props.weight)
                setNewValues(false);
        } catch (error) {
            setWeightError(error.message);
        }
        setEmptyBoxError(false);
    }

    function userTypedHeightACB(event) {
        try {
            props.onPersonChanged?.();
            props.onUserChangedHeight(event.target.value);
            setHeightError("");
            setInavilError(false);
            if(event.target.value !== props.height)
                setNewValues(false); 
        } catch (error) {
            setHeightError(error.message);
        }
        setEmptyBoxError(false);
    }
    
    function userChooseGenderACB(event) {
        if(event.target.value !== props.gender)
            setNewValues(false);
        props.onPersonChanged?.();
        props.onUserChangedGender(event.target.value);
    }

    function userChooseLevelACB(event) {
        props.onUserChooseLevel(event.target.value);
    }
    function userChooseGoalACB(event){
        props.onUserChooseGoal(event.target.value);
}

    function dontSaveAfterChangeACB(event){
        event.preventDefault();
        setNewValues(true)
        setSave(false);
        setCalculated(false);
    }

    function saveAfterChangeACB(event){
        event.preventDefault();
        setNewValues(true)
        setSave(true);
        setCalculated(false);
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
                                        onInput={userChooseGenderACB}
                                        defaultChecked = {props.gender&&props.gender === "male" ? true : false} />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container gender label">Female
                                    <input type="radio" value="female" name="gender"
                                        onInput={userChooseGenderACB}
                                        defaultChecked = {props.gender&&props.gender === "female" ? true : false} />
                                    <span className="checkmark"></span>
                                    {(emptyBoxError && !props.gender) ? 
                                        <label className="error-msg"> {"<--"}Select a gender!</label> : ""}
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
                                    <span className="grey-text">age</span>
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
                                    <span className="grey-text">kg</span>
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
                                        <span className="grey-text">cm</span>
                                    {emptyBoxError && props.height === "" ?
                                        <label className="error-msg"> {"<--"}Height is required!</label> : ""}
                                </div>
                                {heightError !== "" ?
                                    <label className="error-msg">{heightError} <br></br></label> : ""}
                                {props.userSaved?
                                <label className="saved-msg">Information saved!</label> : ""}
                                {(invalidError ||emptyBoxError)?
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
                                {!newValues&&!props.showSaveButton? <div>
                                <h3 className="saved-msg">Your information is changed, want to save it to your profile?</h3> 
                                <input type="submit" name="submit" value= "Yes" className="btn" onClick={saveAfterChangeACB}/>
                                <input type="submit" name="submit" value= "No" className="btn" onClick={dontSaveAfterChangeACB}/>
                                </div> : ""}
                                {(save&&newValues) && !calculated?
                                <h3  className="saved-msg">New information will be saved when you calculate😃</h3> : ""}
                                {(!save&&newValues) && !calculated?
                                <h3  className="saved-msg">The information will not be saved😃</h3> : ""}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div >
    );
       
}
