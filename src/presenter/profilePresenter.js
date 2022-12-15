import SearchView from "../view/searchView.js";
import React from "react";


export default function ProfilePresenter(props){
    const [age, setAge] = React.useState(props.model.person.age);
    const [weight, setWeight] = React.useState(props.model.person.weight);
    const [height, setHeight] = React.useState(props.model.person.height);
    const [gender, setGender] = React.useState(props.model.person.gender);

    function observerACB(){
        setAge(props.model.person.age);
        setWeight(props.model.person.weight)
        setHeight(props.model.person.height)
        setGender(props.model.person.gender)
    }

    function userSearchedACB(){

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

    function wasCreatedACB() {
        console.log("profile created!");                           
        props.model.addObserver(observerACB);
        return function isTakenDownACB() {                                
            props.model.removeObserver(observerACB);
        };
    }

    React.useEffect(wasCreatedACB, []);
    React.useEffect(wasCreatedACB, []);


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
                    gender = {gender}
                    height = {height}
                    weight = {weight}
                />
            </div>
           
        </div>
            )


}