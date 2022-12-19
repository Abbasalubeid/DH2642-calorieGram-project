import SearchView from "../view/searchView.js";
import BmiResultview from "../view/bmiResultView.js";
import React from "react";
import promiseNoData from "../view/promiseNoData.js";
import { getFitnessInfo } from "../fetchSource";


export default function BmiPresenter(props) {
    const [age, setAge] = React.useState(props.model.person.age);
    const [weight, setWeight] = React.useState(props.model.person.weight);
    const [height, setHeight] = React.useState(props.model.person.height);
    const [bmi, setBmi] = React.useState(props.model.bmi);
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [searchParams, setSearchParams] = React.useState({});
    const [show, setShow] = React.useState(false);



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

    function observerACB(){
        setAge(props.model.person.age);
        setWeight(props.model.person.weight)
        setHeight(props.model.person.height)
        setBmi(props.model.person.bmi)
    }

    function userSearchedACB() {
        searchParams.age = props.model.person.age;
        searchParams.height = props.model.person.height;
        searchParams.weight = props.model.person.weight;
        setPromise(getFitnessInfo(searchParams));
        setShow(true);
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

    function userChangedBmi(){
        
    }
    function removeInfo(){
        props.model.removeUserBmi();
    }

    function wasCreatedACB() {
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
            </div>
            {/* <div className={data ? "bmi-info-result" : "hidden"}>
                <CustomInfo />
            </div> */}
            <div className={!show ? "hidden" : "bmi-result "}>
                {promiseNoData({ promise, data, error }) ||
                
                    <BmiResultview
                        bmiResult={data}
                        removeBmiInfo={removeInfo}
                    >
                    </BmiResultview>
                }
            </div>
        </div>
    )

}
