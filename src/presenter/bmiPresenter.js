import BmiSearchView from "../view/bmiSearchView.js";
import BmiResultview from "../view/bmiResultView.js";
import React from "react";
import promiseNoData from "../view/promiseNoData.js";
import { getFitnessInfo } from "../fetchSource";


export default function BmiPresenter(props) {
    const [age, setPerson] = React.useState(props.model.person.age)
    const [weight, setWeight] = React.useState(props.model.person.weight)
    const [height, setHeight] = React.useState(props.model.person.height)
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [searchParams, setSearchParams] = React.useState({});

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

    function userSearchedACB() {
        searchParams.age = props.model.person.age;
        searchParams.height = props.model.person.height;
        searchParams.weight = props.model.person.weight;
        setPromise(getFitnessInfo(searchParams));
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

    React.useEffect(promiseHasChangedACB, [promise]);

    return (
        <div>
            <div className="flex-searchview">
                <BmiSearchView onUserChangedAge={ageIsChangedACB}
                    onUserChangedWeight={weightIsChangedACB}
                    onUserChangedHeight={heightIsChangedACB}
                    onUserSearched={userSearchedACB}
                    age = {age}
                    weight = {weight}
                    height = {height}
                />
            </div>
            <div>
                {promiseNoData({ promise, data, error }) ||
                    <BmiResultview
                        bmiResult={data}>
                    </BmiResultview>
                }
            </div>
        </div>
    )

}