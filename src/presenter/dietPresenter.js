import SearchView from "../view/searchView.js";
<<<<<<< HEAD:src/presenter/bmrSearchPresenter.js
import { useNavigate } from "react-router-dom";
// import ResultView from "../view/resultView.js"
import React from "react";
// import promiseNoData from "../view/promiseNoData.js"
import { getActivityInfo } from "../fetchSource";
=======
import DietResultView from "../view/dietResultView.js";
import React from "react";
import promiseNoData from "../view/promiseNoData.js";
import { getMacroInfo } from "../fetchSource";
>>>>>>> main:src/presenter/dietPresenter.js


export default function DietPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    const [searchParams, setSearchParams] = React.useState({});

    // function promiseHasChangedACB() {
    //     setData(null);
    //     setError(null);
    //     let cancelled = false;

    //     function changedAgainACB() { cancelled = true; }
    //     if (promise)
    //         promise.then(function saveData(data) { if (!cancelled) setData(data); }).
    //             catch(function saveError(error) { if (!cancelled) setError(error); });

    //     return changedAgainACB;
    // }

    function userSearchedACB() {
        searchParams.age = props.model.person.age;
        searchParams.gender = props.model.person.gender;
        searchParams.height = props.model.person.height;
        searchParams.weight = props.model.person.weight;
<<<<<<< HEAD:src/presenter/bmrSearchPresenter.js
        setPromise(getActivityInfo(searchParams));
        navigate('/result');
=======
        setPromise(getMacroInfo(searchParams));
>>>>>>> main:src/presenter/dietPresenter.js
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
<<<<<<< HEAD:src/presenter/bmrSearchPresenter.js
        setSearchParams(searchParams);
=======
    }

    function goalIsChangedACB(goal) {
        searchParams.goal = goal;
>>>>>>> main:src/presenter/dietPresenter.js
    }

    // React.useEffect(promiseHasChangedACB, []);

    return (
<<<<<<< HEAD:src/presenter/bmrSearchPresenter.js
        <div className="flex-searchview">
            <SearchView onUserChangedAge={ageIsChangedACB}
                onUserChangedWeight={weightIsChangedACB}
                onUserChangedHeight={heightIsChangedACB}
                onUserSearched={userSearchedACB}
                onUserChangedGender={genderIsChangedACB}
                onUserChooseLevel={activityLevelIsChangedACB}
            />
        </div>
    )
}
=======
        <div className="diet-mainStyle">
            <h1>Diet Calculate</h1>
            <div >
                <SearchView onUserChangedAge={ageIsChangedACB}
                    onUserChangedWeight={weightIsChangedACB}
                    onUserChangedHeight={heightIsChangedACB}
                    onUserSearched={userSearchedACB}
                    onUserChangedGender={genderIsChangedACB}
                    onUserChooseLevel={activityLevelIsChangedACB}
                    onUserChooseGoal={goalIsChangedACB}
                    showGender={true}
                    showLevels={true}
                    showGoals={true}
                    goals={
                        [
                            { value: "maintain", type: "Maintain weight" },
                            { value: "mildlose", type: "Mild weight loss" },
                            { value: "weightlose", type: "Weight loss" },
                            { value: "extremelose", type: "Extreme Weight loss" },
                            { value: "mildgain", type: "Mild weight gain" },
                            { value: "weightgain", type: "Weight gain" },
                            { value: "extremegain", type: "Extreme weight gain" }
                        ]}
                    levels={
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
>>>>>>> main:src/presenter/dietPresenter.js
