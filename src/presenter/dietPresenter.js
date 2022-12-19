import SearchView from "../view/searchView.js";
import DietResultView from "../view/dietResultView.js";
import React from "react";
import promiseNoData from "../view/promiseNoData.js";
import { getMacroInfo } from "../fetchSource";
import "../css/diet.css"


export default function DietPresenter(props){
    const [age, setAge] = React.useState(props.model.person.age);
    const [weight, setWeight] = React.useState(props.model.person.weight);
    const [height, setHeight] = React.useState(props.model.person.height);
    const [gender, setGender] = React.useState(props.model.person.gender);
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [show, setShow] = React.useState(false);

    const [searchParams, setSearchParams] = React.useState({});


    function observerACB(){
        setAge(props.model.person.age);
        setWeight(props.model.person.weight)
        setHeight(props.model.person.height)
        setGender(props.model.person.gender)
    }

    function promiseHasChangedACB() {
        setData(null);
        setError(null);
        let cancelled = false;

        function changedAgainACB() { cancelled = true; }
        if (promise)
            promise.then(function saveData(data) { if (!cancelled) setData(data); }).
                catch(function saveError(error) { if (!cancelled) setError(error); });

        return changedAgainACB;
    }

    function userSearchedACB() {
        searchParams.age = props.model.person.age;
        searchParams.gender = props.model.person.gender;
        searchParams.height = props.model.person.height;
        searchParams.weight = props.model.person.weight;
        setPromise(getMacroInfo(searchParams));
        setShow(true);
    }

    function ageIsChangedACB(age) {
        props.model.setAge(age)
    }

    function weightIsChangedACB(weight) {
        props.model.setWeight(weight)
    }

    function heightIsChangedACB(height) {
        props.model.setHeight(height)
    }

    function genderIsChangedACB(gender) {
        props.model.setGender(gender)
    }

    function activityLevelIsChangedACB(level) {
        searchParams.activitylevel = level;
        setSearchParams(searchParams);
        props.model.setUserActivity(levels[level-1].type)
    }

    function goalIsChangedACB(goal) {
        searchParams.goal = goal;

    }
    
    function wasCreatedACB() {
        props.model.addObserver(observerACB);
        return function isTakenDownACB() {                                
            props.model.removeObserver(observerACB);
        };
    }
    
    function UserChangedDiet(diet) {
        props.model.setUserDiet(diet)
    }

    function removeInfo(){
        props.model.removeUserDiet(); 
    }

    const levels = [
        { value: "1", type: "Sedentary: little or no exercise" },
        { value: "2", type: "Light Exercise (1-2 days/week)" },
        { value: "3", type: "Exercise 4-5 times/week" },
        { value: "4", type: "Daily exercise or intense exercise 3-4 times/week" },
        { value: "5", type: "Intense exercise 6-7 times/week" },
        { value: "6", type: "Very intense exercise daily, or physical job" },
    ]
    React.useEffect(wasCreatedACB, []);
    React.useEffect(promiseHasChangedACB, [promise]);

    return (
        <div className="diet-mainStyle">
            <div>
            <h1>Diet Calculate</h1>
             <p className="first-p anim">The Diet Calculator can be used to estimate the amount of protein, carbs and fats you need to match the goal and activity level you choose below.<br></br>
             A healthy diet is essential for good health and nutrition and it will help you achive your goals faster and better.</p>
            </div>
            <div className="diet-style">
                <SearchView onUserChangedAge={ageIsChangedACB}
                    onUserChangedWeight={weightIsChangedACB}
                    onUserChangedHeight={heightIsChangedACB}
                    onUserSearched={userSearchedACB}
                    onUserChangedGender={genderIsChangedACB}
                    onUserChooseLevel={activityLevelIsChangedACB}
                    onUserChooseGoal = {goalIsChangedACB}
                    showGender = {true}
                    showLevels = {true}
                    showGoals = {true}
                    showDietInfo = {true}
                    goals ={
                                [
                                    { value: "maintain", type: "Maintain weight" },
                                    { value: "mildlose", type: "Mild weight loss" },
                                    { value: "weightlose", type: "Weight loss" },
                                    { value: "extremelose", type: "Extreme Weight loss" },
                                    { value: "mildgain", type: "Mild weight gain" },
                                    { value: "weightgain", type: "Weight gain" },
                                    { value: "extremegain", type: "Extreme weight gain" }
                                ]}
                     levels ={levels}
                    age = {props.model.person.age}
                    gender = {props.model.person.gender}
                    height = {props.model.person.height}
                    weight = {props.model.person.weight}
                />
           
            <div className={!show ? "diet-info" : "hidden"}>
                <CustomInfo />
            </div>
            <div className={show ? "diet-result" : "hidden"}>
                {promiseNoData({ promise, data, error }) ||
                    <DietResultView
                        macros={data}
                        onUserChangedDiet={UserChangedDiet}
                        removeDietInfo={removeInfo}
                        >
                    </DietResultView>
                }
            </div>
            </div>
        </div>
    )

}

/* custom component */
function CustomInfo({ href, children, ...props }) {
    return (
        <div className="custom-info anim">
            <input type="checkbox" id="check" />
            <h2>Information</h2>
            <img src="healthy-diet.png" />
            <p>
                <span className="bold-text">What is a healthy diet?</span><br />
                A healthy diet is essential for good health and nutrition.<br />
                    It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer.
                    Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.<br/>
                <span className="bold-text">What is a Good Diet?</span><br />   
                    A good diet consist of three main components which we will help you calculate based on what you want to achieve:<br></br>
                    Carbs are sugar basically. No matter what you eat a chocolate, bread, pasta or sugar, in your body they get converted to the same thing,
                    spiking your blood sugar, which in turn spikes your insulin levels.
            </p>
            <div className="readmore-text">
                <p>
                    When you have a high amount of insulin in your body, you can't burn fat. Carbs will provide you with "instant energy" but they
                    are hard to consume so eating a lot will tend to make you fat. Think of the standard american diet and the obesity epidemic. Diets that
                    advocate a high carb consumption are vegan, for example. US health system advocates high carb, low fat diets.<br></br>
                    <span className="bold-text">What is Body Fat?</span> <br />
                    Fats There are at least 3 types of fat. Some are good, some are bad. There is a consensus that trans fats (from processed foods) are bad for you.
                    Saturated fat (butter, lard) is now again being considered healthy (check Time magazine, and lots of studies). Monounsaturated fat was always
                    considered healthy.
                    Diets that advocate a high fat, low carb lifestyle are keto and paleo. Sweden for example advocates low carb, high fat diets.<br></br>
                    <span className="bold-text">What is Protein?</span><br />
                    Protein is a macronutrient. To put it simply, protein is one of the main nutrients that every person needs to maintain a healthy body. It helps to repair
                    any internal or external damage, supports the immune system and contributes to an overall feeling of well-being.
                </p>
            </div>
            <label htmlFor="check">Read More</label>
        </div>
    )
}
