import SearchView from "../view/searchView.js";
import React from "react";


export default function ProfilePresenter(props){
    const [age, setPerson] = React.useState(props.model.person.age);
    const [, reRender] = React.useState();

    function userSearchedACB() {
        
       
    }
        
    function ageIsChangedACB(age) {
        props.model.setAge(age)
        reRender({});
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
                    goals ={
                                [
                                    { value: "maintain", type: "Maintain weight" },
                                    { value: "mildlose", type: "Mild weight loss 0.25 kg/week" },
                                    { value: "weightlose", type: "Weight loss 0.5 kg/week" },
                                    { value: "extremelose", type: "Extreme Weight loss 1 kg/week" },
                                    { value: "mildgain", type: "Mild weight gain 0.25 kg/week" },
                                    { value: "weightgain", type: "Weight gain 0.5 kg/week" },
                                    { value: "extremegain", type: "Extreme weight gain 1 kg/week" }
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
                    age = {age}
                    // gender = {props.model.person.gender}
                    // height = {props.model.person.height}
                    // weight = {props.model.person.weight}
                />
            </div>
           
        </div>
            )


}