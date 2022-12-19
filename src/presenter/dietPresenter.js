import SearchView from "../view/searchView.js";
import DietResultView from "../view/dietResultView.js";
import React from "react";
import promiseNoData from "../view/promiseNoData.js";
import { getMacroInfo } from "../fetchSource";
import "../css/diet.css"
import InformationView from "../view/informationView.js";


export default function DietPresenter(props){
    const [age, setAge] = React.useState(props.model.person.age);
    const [weight, setWeight] = React.useState(props.model.person.weight);
    const [height, setHeight] = React.useState(props.model.person.height);
    const [gender, setGender] = React.useState(props.model.person.gender);
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [show, setShow] = React.useState(false); 
    const [dietinfo, setDietInfo] = React.useState(false);

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
    function showInfo(){
        setDietInfo(true);
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
                <InformationView />
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