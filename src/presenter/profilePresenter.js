
import SearchView from "../view/searchView.js";

import React from "react";


export default function ProfilePresenter(props) {


    function userSearchedACB() {


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

    }

    function goalIsChangedACB(goal) {

    }


    return (
        <div className="profile-mainStyle">
            <h1>Profile Calculate</h1>
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

        </div>
    )


}