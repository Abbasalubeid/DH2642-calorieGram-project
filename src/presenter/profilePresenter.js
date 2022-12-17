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


    function userSavedACB(){
        props.model.setAge(age)
        props.model.setWeight(weight)
        props.model.setHeight(height)
        props.model.setGender(gender)
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

    function wasCreatedACB() {
        props.model.addObserver(observerACB);
        return function isTakenDownACB() {
            props.model.removeObserver(observerACB);
        };
    }

    React.useEffect(wasCreatedACB, []);


    return (
        <div className="goal-mainStyle">
            <div >
                <SearchView onUserChangedAge={ageIsChangedACB}
                    onUserChangedWeight={weightIsChangedACB}
                    onUserChangedHeight={heightIsChangedACB}
                    onUserChangedGender={genderIsChangedACB}
                    onUserSearched={userSavedACB}
                    showGender = {true}
                    showSaveButton = {"Save"}
                    age = {age}
                    gender = {gender}
                    height = {height}
                    weight = {weight}
                />
            </div>

        </div>
    )


}