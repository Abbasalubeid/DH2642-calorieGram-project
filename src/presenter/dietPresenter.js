import SearchView from "../view/searchView.js";
import DietResultView from "../view/dietResultView.js";
import React from "react";
import promiseNoData from "../view/promiseNoData.js";
import { getMacroInfo } from "../fetchSource";


export default function DietPresenter(props){
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    const [searchParams, setSearchParams] = React.useState({});

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
    }

    function goalIsChangedACB(goal) {
        searchParams.goal = goal;
    }

    React.useEffect(promiseHasChangedACB, [promise]);

    return (
        <div className="goal-mainStyle">
            <div >
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
                     levels ={
                                [
                                    { value: "1", type: "Sedentary: little or no exercise" },
                                    { value: "2", type: "Light Exercise (1-2 days/week)" },
                                    { value: "3", type: "Exercise 4-5 times/week" },
                                    { value: "4", type: "Daily exercise or intense exercise 3-4 times/week" },
                                    { value: "5", type: "Intense exercise 6-7 times/week" },
                                    { value: "6", type: "Very intense exercise daily, or physical job" },
                                ]}
                />
            </div>
            <div className="result-nopadding result">
                {promiseNoData({ promise, data, error }) ||
                    <DietResultView
                        macros={data}>
                    </DietResultView>
                }
            </div>
        </div>
            )

}
