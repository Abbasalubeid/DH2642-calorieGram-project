import SearchView from "../view/searchView.js";
import GoalsResultView from "../view/goalsResultView.js"
import React from "react";
import promiseNoData from "../view/promiseNoData.js"
import { getActivityInfo } from "../fetchSource";

export default function GoalsSearchPresenter(props) {
    const [age, setAge] = React.useState(props.model.person.age);
    const [weight, setWeight] = React.useState(props.model.person.weight);
    const [height, setHeight] = React.useState(props.model.person.height);
    const [gender, setGender] = React.useState(props.model.person.gender);
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
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
        console.log(props.model);
        searchParams.age = props.model.person.age;
        searchParams.gender = props.model.person.gender;
        searchParams.height = props.model.person.height;
        searchParams.weight = props.model.person.weight;
        setPromise(getActivityInfo(searchParams));
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

        searchParams.activitylevel = "level_" + level;
    }

    function UserChangedUserGoals(goal) {
        props.model.setUserGoal(goal)
    }

    function wasCreatedACB() {
        props.model.addObserver(observerACB);
        return function isTakenDownACB() {                                
            props.model.removeObserver(observerACB);
        };
    }


    React.useEffect(wasCreatedACB, []);
    React.useEffect(promiseHasChangedACB, [promise]);

    return (
        <div className="goal-mainStyle">
            <div>
                <SearchView onUserChangedAge={ageIsChangedACB}
                    onUserChangedWeight={weightIsChangedACB}
                    onUserChangedHeight={heightIsChangedACB}
                    onUserSearched={userSearchedACB}
                    onUserChangedGender={genderIsChangedACB}
                    onUserChooseLevel={activityLevelIsChangedACB}
                    showGender = {true}
                    showLevels = {true}
                    showActivityPerWeekInfo= {true}
                    levels = {
                                [
                                    { value: "1", type: "Sedentary: little or no exercise" },
                                    { value: "2", type: "Light Exercise (1-2 days/week)" },
                                    { value: "3", type: "Exercise 4-5 times/week" },
                                    { value: "4", type: "Daily exercise or intense exercise 3-4 times/week" },
                                    { value: "5", type: "Intense exercise 6-7 times/week" },
                                    { value: "6", type: "Very intense exercise daily, or physical job" },
                                ]}
                    age = {age}
                    gender = {gender}
                    height = {height}
                    weight = {weight}
                />
            </div>
            <div className="result-nopadding result">
                {promiseNoData({ promise, data, error }) ||
                    <GoalsResultView
                        activityResult={data}
                        userInfo={searchParams}
                        onUserChangedUserGoals={UserChangedUserGoals}
                    />
                }
            </div>
        </div>


    )

}