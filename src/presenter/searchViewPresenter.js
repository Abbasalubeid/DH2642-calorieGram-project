import resolvePromise from "../resolvePromise";
import SearchView from "../view/searchView";
import React from "react";
import { getFitnessInfo, getActivityInfo } from "../fetchSource";


export default function SearchViewPresenter(props){
    const [searchParams, setSearchParams] = React.useState({});
    const [promiseState] = React.useState({});

    if (!promiseState.promise) {
        resolvePromise(getFitnessInfo(searchParams), promiseState);
      }

    function userSearchedACB(){
        // resolvePromise(getFitnessInfo(searchParams), promiseState)
        resolvePromise(getActivityInfo(searchParams), promiseState)
    }

    function ageIsChangedACB(age){
        const obj = {};
        obj.age = age;
        obj.gender = searchParams.gender;
        obj.height = searchParams.height;
        obj.weight = searchParams.weight;
        obj.activitylevel = searchParams.activitylevel;
        setSearchParams(obj);
    }

    function weightIsChangedACB(weight){
        const obj = {};
        obj.age = searchParams.age;
        obj.gender = searchParams.gender;
        obj.height = searchParams.height;
        obj.weight = weight;
        obj.activitylevel = searchParams.activitylevel;
        setSearchParams(obj);
    }

    function heightIsChangedACB(height){
        const obj = {};
        obj.age = searchParams.age;
        obj.gender = searchParams.gender;
        obj.height = height;
        obj.weight = searchParams.weight;
        obj.activitylevel = searchParams.activitylevel;
        setSearchParams(obj);
    }

    function genderIsChangedACB(gender){
        const obj = {};
        obj.age = searchParams.age;
        obj.gender = gender;
        obj.height = searchParams.height;
        obj.weight = searchParams.weight;
        obj.activitylevel = searchParams.activitylevel;
        setSearchParams(obj);
    }

    function activityLevelIsChangedACB(level){
        const obj = {};
        obj.age = searchParams.age;
        obj.gender = searchParams.gender;
        obj.height = searchParams.height;
        obj.weight = searchParams.weight;
        obj.activitylevel = level;
        setSearchParams(obj);
    }





    return (
        <SearchView onUserChangedAge = {ageIsChangedACB}
                    onUserChangedWeight = {weightIsChangedACB}
                    onUserChangedHeight = {heightIsChangedACB}
                    onUserSearched = {userSearchedACB}
                    onUserChangedGender = {genderIsChangedACB}
                    onUserChooseLevel = {activityLevelIsChangedACB}
                    goals = {promiseState.data}/>
    )

}