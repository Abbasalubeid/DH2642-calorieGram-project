import SearchView from "../view/searchView.js";
import { useNavigate } from "react-router-dom";
import { getActivityInfo } from "../fetchSource";
import DietResultView from "../view/dietResultView.js";
import React from "react";
import promiseNoData from "../view/promiseNoData.js";
import { getMacroInfo } from "../fetchSource";
import "../css/bmiSearch.css"


export default function DietPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [show, setShow] = React.useState(false);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();
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
        setPromise(getActivityInfo(searchParams));
        navigate('/result');

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

    }

    function goalIsChangedACB(goal) {
        searchParams.goal = goal;

    }

    // React.useEffect(promiseHasChangedACB, []);

    return (
        <div className="diet-mainStyle">
            <h1>Diet Calculate</h1>
            <div className="diet-style">
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
            <div className={!show ? "diet-info" : "diet-info-result"}>
                <CustomInfo />
            </div>
            <div className={show ? "diet-result" : "hidden"}>
                {promiseNoData({ promise, data, error }) ||
                    <DietResultView
                        macros={data}>
                    </DietResultView>
                }
            </div>
        </div>
    )

}

/* custom component */
function CustomInfo({ href, children, ...props }) {
    return (
        <div>
            <h2>Information</h2>
            <p>A healthy diet is essential for good health and nutrition.
                It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer.
                Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.<br></br>

                A good diet consist of three main components which we will help you calculate based on what you want to achieve:<br></br>
                Carbs are sugar basically. No matter that you eat a chocolate, bread, pasta or sugar, in your body they get converted to the same thing,
                spiking your blood sugar, which in turn spikes your insulin levels.

                When you have a high amount of insulin in your body, you can't burn fat. Carbs will provide you with "instant energy" but they
                are hard to consume so eating a lot will tend to make you fat. Think of the standard american diet and the obesity epidemic. Diets that
                advocate a high carb consumption are vegan, for example. US health system advocates high carb, low fat diets.<br></br>
                Fats There are at least 3 types of fat. Some are good, some are bad. There is a consensus that trans fats (from processed foods) are bad for you.
                Saturated fat (butter, lard) is now again being considered healthy (check Time magazine, and lots of studies). Monounsaturated fat was always
                considered healthy.
                Diets that advocate a high fat, low carb lifestyle are keto and paleo. Sweden for example advocates low carb, high fat diets.<br></br>
                Protein is a macronutrient. To put it simply, protein is one of the main nutrients that every person needs to maintain a healthy body. It helps to repair
                any internal or external damage, supports the immune system and contributes to an overall feeling of well-being.
            </p>
        </div>
    )
}
