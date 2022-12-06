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
        console.log(promiseState)
    }

    function ageIsChangedACB(age){
        const obj = {};
        obj.weight = searchParams.weight;
        obj.height = searchParams.height;
        obj.age = age;
        obj.gender = searchParams.gender;
        obj.activitylevel = searchParams.level;
        setSearchParams(obj);
    }

    function weightIsChangedACB(weight){
        const obj = {};
        obj.weight = weight;
        obj.height = searchParams.height;
        obj.age = searchParams.age;
        obj.gender = searchParams.gender;
        obj.activitylevel = searchParams.level;
        setSearchParams(obj);
    }

    function heightIsChangedACB(height){
        const obj = {};
        obj.weight = searchParams.weight;
        obj.height = height
        obj.age = searchParams.age;
        obj.gender = searchParams.gender;
        obj.activitylevel = searchParams.level;
        setSearchParams(obj);
    }

    function genderIsChangedACB(gender){
        const obj = {};
        obj.weight = searchParams.weight;
        obj.height = searchParams.height
        obj.age = searchParams.age;
        obj.gender = gender;
        obj.activitylevel = searchParams.activitylevel
        setSearchParams(obj);
    }

    function activityLevelIsChangedACB(level){
        const obj = {};
        obj.weight = searchParams.weight;
        obj.height = searchParams.height
        obj.age = searchParams.age;
        obj.gender = searchParams.gender;
        obj.activitylevel = level;
        setSearchParams(obj);
    }





    return (
        <SearchView onUserChangedAge = {ageIsChangedACB}
                    onUserChangedWeight = {weightIsChangedACB}
                    onUserChangedHeight = {heightIsChangedACB}
                    onUserSearched = {userSearchedACB}
                    onUserChangedGender = {genderIsChangedACB}
                    onUserLevel = {activityLevelIsChangedACB}/>
    )

}