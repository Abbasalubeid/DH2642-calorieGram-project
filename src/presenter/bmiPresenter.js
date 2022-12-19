import SearchView from "../view/searchView.js";
import BmiResultview from "../view/bmiResultView.js";
import React from "react";
import promiseNoData from "../view/promiseNoData.js";
import { getFitnessInfo } from "../fetchSource";
import InformationView from "../view/informationView.js";


export default function BmiPresenter(props) {
    const [age, setAge] = React.useState(props.model.person.age);
    const [weight, setWeight] = React.useState(props.model.person.weight);
    const [height, setHeight] = React.useState(props.model.person.height);
    const [tempAge, setTempAge] = React.useState();
    const [tempWeight, setTempWeight] = React.useState();
    const [tempHeight, setTempHeight] = React.useState();
    const [bmi, setBmi] = React.useState(props.model.bmi);
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [searchParams, setSearchParams] = React.useState({});
    const [show, setShow] = React.useState(false);
    const [bmiInfo, setBmiInfo] = React.useState(false);



    function promiseHasChangedACB() {
        setData(null);
        setError(null);
        let cancelled = false;

        function changedAgainACB() { cancelled = true; }
        if (promise)
            promise.then(function saveData(data) { if (!cancelled) setData(data); }).
                catch(function saveError(error) { if (!cancelled) setError(error); });

        return changedAgainACB;
    }

    function persistCurrentValues(){
        setTempAge(age);
        setTempWeight(weight)
        setTempHeight(height)
    }

    function observerACB(){
        setAge(props.model.person.age);
        setWeight(props.model.person.weight)
        setHeight(props.model.person.height)
        setBmi(props.model.person.bmi)
    }

    function userSearchedACB(wantToSave) {
        if(!wantToSave){
            searchParams.age = props.model.person.age;
            searchParams.height = props.model.person.height;
            searchParams.weight = props.model.person.weight;
            setPromise(getFitnessInfo(searchParams));
            setShow(true);
            props.model.setAge(tempAge)
            props.model.setWeight(tempWeight)
            props.model.setHeight(tempHeight)
        }
        else if (wantToSave){
            searchParams.age = props.model.person.age;
            searchParams.height = props.model.person.height;
            searchParams.weight = props.model.person.weight;
            setPromise(getFitnessInfo(searchParams));
            setShow(true);
        }


    }

    function saveResultACB(){
        if(data){
        const  ret = `${data.bmi},${data.health}`
        props.model.setUserBmi(ret)
        }
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

    function removeInfo(){
        props.model.removeUserBmi();
        setShow(false);
    }

    function showInfo(){
        setBmiInfo(true);
    }

    function wasCreatedACB() {
        persistCurrentValues();
        props.model.addObserver(observerACB);
        return function isTakenDownACB() {                                
            props.model.removeObserver(observerACB);
        };
    }

    React.useEffect(wasCreatedACB, []);
    React.useEffect(promiseHasChangedACB, [promise]);
    React.useEffect(saveResultACB, [data]);


    return (
        <div className="bmi-mainStyle">
            <div className="bmi-style">
                <SearchView onUserChangedAge={ageIsChangedACB}
                    onUserChangedWeight={weightIsChangedACB}
                    onUserChangedHeight={heightIsChangedACB}
                    onUserSearched={userSearchedACB}
                    showBmiInfo={true}
                    age = {age}
                    height = {height}
                    weight = {weight}
                />
            
            <div className={!show ? "hidden" : "bmi-result"}>
                {promiseNoData({ promise, data, error }) ||
                
                    <BmiResultview
                        bmiResult={data}
                        removeBmiInfo={removeInfo}>
                    </BmiResultview>
                }
            </div>
                <div className={data ? "bmi-info-result" : "hidden"}>
                    <InformationView />
                </div>
            </div>
        </div>
    )

}
