import resolvePromise from "../resolvePromise";
import SearchView from "../view/searchView";
import FitnessModel from "../model/FitnessModel";
import React from "react";
import { getFitnessInfo } from "../fetchSource";


export default function SearchViewPresenter(){
    const model = new FitnessModel();
    const [searchParams, setSearchParams] = React.useState({});
    const [promiseState] = React.useState({});

    if (!promiseState.promise) {
        resolvePromise(getFitnessInfo(searchParams), promiseState);
      }

    function userSearchedACB(){
        resolvePromise(getFitnessInfo(searchParams), promiseState)
        console.log(promiseState.data);
    }

    function ageIsChangedACB(age){
        const obj = {};
        obj.weight = searchParams.weight;
        obj.height = searchParams.height;
        obj.age = age;
        setSearchParams(obj);
    }

    function weightIsChangedACB(weight){
        const obj = {};
        obj.weight = weight;
        obj.height = searchParams.height;
        obj.age = searchParams.age;
        setSearchParams(obj);
    }

    function heightIsChangedACB(height){
        const obj = {};
        obj.weight = searchParams.weight;
        obj.height = height
        obj.age = searchParams.age;
        setSearchParams(obj);
    }



    return (
        <SearchView onUserChangedAge = {ageIsChangedACB}
                    onUserChangedWeight = {weightIsChangedACB}
                    onUserChangedHeight = {heightIsChangedACB}
                    onUserSearched = {userSearchedACB}/>
    )

}