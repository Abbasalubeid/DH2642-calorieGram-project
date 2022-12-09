import GoalsSearchView from "../view/goalsSearchView.js";
import GoalsResultView from "../view/goalsResultView.js"
import React from "react";
import promiseNoData from "../view/promiseNoData.js"
import { getActivityInfo } from "../fetchSource";

export default function GoalsResultPresenter(props) {

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
        setPromise(getActivityInfo(searchParams));
    }

    React.useEffect(promiseHasChangedACB, [promise]);

    return (
        <div>
            <div className="flex-searchview">
                <GoalsSearchView
                    onUserSearched={userSearchedACB}
                />
            </div>
            <div className="result-nopadding result">
                {promiseNoData({ promise, data, error }) ||
                    <GoalsResultView
                        activityResult={data}>
                    </GoalsResultView>
                }
            </div>
        </div>
    )

}
