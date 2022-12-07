import SearchView from "../view/searchView.js";
import ResultView from "../view/resultView.js"
import React from "react";
import promiseNoData from "../view/promiseNoData.js"
import { getFitnessInfo, getActivityInfo } from "../fetchSource";

export default function SearchViewPresenter(props) {
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

    function ageIsChangedACB(age) {
        const obj = {};
        obj.age = age;
        obj.gender = searchParams.gender;
        obj.height = searchParams.height;
        obj.weight = searchParams.weight;
        obj.activitylevel = searchParams.activitylevel;
        setSearchParams(obj);
    }

    function weightIsChangedACB(weight) {
        const obj = {};
        obj.age = searchParams.age;
        obj.gender = searchParams.gender;
        obj.height = searchParams.height;
        obj.weight = weight;
        obj.activitylevel = searchParams.activitylevel;
        setSearchParams(obj);
    }

    function heightIsChangedACB(height) {
        const obj = {};
        obj.age = searchParams.age;
        obj.gender = searchParams.gender;
        obj.height = height;
        obj.weight = searchParams.weight;
        obj.activitylevel = searchParams.activitylevel;
        setSearchParams(obj);
    }

    function genderIsChangedACB(gender) {
        const obj = {};
        obj.age = searchParams.age;
        obj.gender = gender;
        obj.height = searchParams.height;
        obj.weight = searchParams.weight;
        obj.activitylevel = searchParams.activitylevel;
        setSearchParams(obj);
    }

    function activityLevelIsChangedACB(level) {
        const obj = {};
        obj.age = searchParams.age;
        obj.gender = searchParams.gender;
        obj.height = searchParams.height;
        obj.weight = searchParams.weight;
        obj.activitylevel = level;
        setSearchParams(obj);
    }

    React.useEffect(promiseHasChangedACB, [promise]);

    return (
        <div>
            <div className="flex-searchview">
                <SearchView onUserChangedAge={ageIsChangedACB}
                    onUserChangedWeight={weightIsChangedACB}
                    onUserChangedHeight={heightIsChangedACB}
                    onUserSearched={userSearchedACB}
                    onUserChangedGender={genderIsChangedACB}
                    onUserChooseLevel={activityLevelIsChangedACB}
                />
            </div>
            <div className="searchview-container">
                {promiseNoData({ promise, data, error }) ||
                    <ResultView
                        result={data}>
                    </ResultView>
                }
            </div>
        </div>


    )

}