import React from "react";
import "../css/bmiSearch.css";
import "../css/goalsSearch.css";

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
    function userChooseGenderACB(event) {
        props.onUserChangedGender(event.target.value);
    }

    function userChooseLevelACB(event) {
        props.onUserChooseLevel(event.target.value);
    }
    function userChooseGoalACB(event) {
        props.onUserChooseGoal(event.target.value);
    }

    function renderOptionsCB(opt) {
        return <option value={opt.value} key={opt.value}>{opt.type}</option>
    }

    return (
        <div>
            <div className="bmi-info">
                <div className={!props.showBmiInfo ? "hidden" : " "}>
                    <p>
                        Body mass index (BMI) to determine how healthy you are.
                        For most adults, a BMI between 18.5 to 24.9 is the idead BMI to have.

                        BMI is not a perfect measure, because it does not directly assess body fat.
                        Muscle and bone are denser than fat, so an athlete or muscular person may have a high BMI, yet not have too much fat. But most people are not athletes,
                        and for most people, BMI is a very good gauge of their level of body fat.<br></br>

                        What are calories?
                        Calories are a measure of how much energy food or drink contains. The amount of energy you need will depend on: age, how active you are and your hight and weight<br></br>
                        The term calorie is commonly used as shorthand for kilocalorie. You will find this written as kcal on food packets. Kilojoules (kJ) are the equivalent of kilocalories within the International System of Units, and you'll see both kJ and kcal on nutrition labels. 4.2kJ is equivalent to approximately 1kcal.
                    </p>
                </div>
            </div>
            <div classname="Activity-per-week-info">
                <div className={!props.showActivityPerWeekInfo ? "hidden" : " "}>
                    By choosing how many times you intend to train per week you will be presented
                    with a set of goals to achieve. <br></br>
                    Each set has first the main goal which can vary from mild weight loss
                    to extreme weight gain, then amount of calories you need to take daily to achieve
                    that goal.
                </div>
            </div>
            <div classname="Diet-info">
                <div className={!props.showDietInfo ? "hidden" : " "}>
                    A healthy diet is essential for good health and nutrition.
                    It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer.
                    Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.<br></br>

                    A good diet consist of three main components which we will help you calculate based on what you want to achieve:<br></br>
                    Carbs are sugar basically. No matter that you eat a chocolate, bread, pasta or sugar, in your body they get converted to the same thing, spiking your blood sugar, which in turn spikes your insulin levels. When you have a high amount of insulin in your body, you can't burn fat. Carbs will provide you with "instant energy" but they are hard to consume so eating a lot will tend to make you fat. Think of the standard american diet and the obesity epidemic. Diets that advocate a high carb consumption are vegan, for example. US health system advocates high carb, low fat diets.<br></br>
                    Fats There are at least 3 types of fat. Some are good, some are bad. There is a consensus that trans fats (from processed foods) are bad for you. Saturated fat (butter, lard) is now again being considered healthy (check Time magazine, and lots of studies). Monounsaturated fat was always considered healthy. Diets that advocate a high fat, low carb lifestyle are keto and paleo. Sweden for example advocates low carb, high fat diets.<br></br>
                    Protein is a macronutrient. To put it simply, protein is one of the main nutrients that every person needs to maintain a healthy body. It helps to repair any internal or external damage, supports the immune system and contributes to an overall feeling of well-being.
                </div>
            </div>
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
                                className="input-box" />
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
                                className="input-box" />
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
