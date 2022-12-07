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

    function userChooseGenderACB(event){
        props.onUserChangedGender(event.target.value);
    }

    function userChooseLevelACB(event){
        props.onUserChooseLevel(event.target.value);
    }

    function log(){
            console.log(props.data)
            
    }

    function renderGoalsCB(data){
       return console.log(data);
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Gender</td>
                        <td>
                            <label>
                                <input type="radio" value="male" name="gender" onInput={userChooseGenderACB}/> Male
                            </label>
                            <label>
                                <input type="radio" value="female" name="gender" onInput={userChooseGenderACB} /> Female
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="age">Age</label>
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
                            <label htmlFor="weight">Weight</label>
                        </td>
                        <td>
                            <input type="text" name="weight" maxLength="3"
                                   width="60px" placeholder="kg" onInput={userTypedWeightACB}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="height">Height</label>
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
                            <label htmlFor="activity">Activity</label>
                        </td>
                        <td>
                            <select name="activity" className="select" onChange={userChooseLevelACB}>
                                <option>Choose Activity</option>
                                <option value="level_1" >
                                    Sedentary: little or no exercise
                                </option>
                                <option value="level_2" >Light Exercise (1-2 days/week)</option>
                                <option value="level_3" >Exercise 4-5 times/week</option>
                                <option value="level_4" >
                                    Daily exercise or intense exercise 3-4 times/week
                                </option>
                                <option value="level_5" >Intense exercise 6-7 times/week </option>
                                <option value="level_6" >
                                    Very intense exercise daily, or physical job
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="submit" name="submit" value="Calculate!" className="submit-button" onClick={userSavedACB} />
                            <input type="submit" name="submit" value="ConsoleLog" className="submit-button" onClick={log} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
             {/* {Object.keys(props.goals).map(renderGoalsCB)} */}
            </div>
        </div>

    );
    
}
