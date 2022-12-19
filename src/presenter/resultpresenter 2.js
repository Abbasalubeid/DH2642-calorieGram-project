import React from "react";
import ResultView from "../view/resultView.js";
import promiseNoData from "../view/promiseNoData.js";
import { getActivityInfo } from "../fetchSource.js";


export default function ResultPresenter(props) {
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
        // searchParams.age = props.model.person.age;
        // searchParams.gender = props.model.person.gender;
        // searchParams.height = props.model.person.height;
        // searchParams.weight = props.model.person.weight;
        setPromise(getActivityInfo(searchParams));
        // navigate('/result');
    }
    React.useEffect(promiseHasChangedACB, [promise]);

    return (<div className="result-nopadding result">
        {promiseNoData({ promise, data, error }) ||
            <ResultView

                activityResult={data}
                onUserSearched={userSearchedACB}>
            </ResultView>
        }
    </div>);
}