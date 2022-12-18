import SearchView from "../view/searchView.js";
import AccountView from "../view/accountView.js";
import React from "react";
import "../css/profile.css";

export default function ProfilePresenter(props){
    const [age, setAge] = React.useState(props.model.person.age);
    const [weight, setWeight] = React.useState(props.model.person.weight);
    const [height, setHeight] = React.useState(props.model.person.height);
    const [gender, setGender] = React.useState(props.model.person.gender);
    const [saved, setSaved] = React.useState(false);
    
    function observerACB(){
        setAge(props.model.person.age);
        setWeight(props.model.person.weight)
        setHeight(props.model.person.height)
        setGender(props.model.person.gender)
    }

    function somethingChangedACB(){
        setSaved(false);
    }

    function userSavedACB(){
        if(age && weight && height && gender){
            setSaved(true);
        }
        else
            setSaved(false);
    }

    function ageIsChangedACB(age) {
        props.model.setAge(age)
        setSaved(false);
    }

    function weightIsChangedACB(weight) {
        props.model.setWeight(weight)
        setSaved(false);
    }

    function heightIsChangedACB(height) {
        props.model.setHeight(height)
        setSaved(false);
    }

    function genderIsChangedACB(gender) {
        props.model.setGender(gender)
        setSaved(false);
    }

    function wasCreatedACB() {
        props.model.addObserver(observerACB);
        return function isTakenDownACB() {
            props.model.removeObserver(observerACB);
        };
    }

    React.useEffect(wasCreatedACB, []);


    return (
        <div className="profile-mainStyle">
            <div className="profile-style">
                <AccountView />
                <SearchView onUserChangedAge={ageIsChangedACB}
                    onUserChangedWeight={weightIsChangedACB}
                    onUserChangedHeight={heightIsChangedACB}
                    onUserChangedGender={genderIsChangedACB}
                    onUserSearched={userSavedACB}
                    onPersonChanged = {somethingChangedACB}
                    showGender = {true}
                    showSaveButton = {"Save"}
                    age = {age}
                    gender = {gender}
                    height = {height}
                    weight = {weight}
                    userSaved = {saved}
                />
            </div>

        </div>
    )


}