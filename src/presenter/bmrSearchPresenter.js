import SearchView from "../view/searchView.js";
import ResultView from "../view/resultView.js"
import React from "react";
import promiseNoData from "../view/promiseNoData.js"
import { getActivityInfo } from "../fetchSource";

export default function BmrSearchPresenter(props) {

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
        searchParams.gender = props.model.person.gender;
        searchParams.height = props.model.person.height;
        searchParams.weight = props.model.person.weight;
        setPromise(getActivityInfo(searchParams));
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

    function genderIsChangedACB(gender) {
        props.model.setGender(gender)
    }

    function activityLevelIsChangedACB(level) {
        searchParams.activitylevel = level;gi
        setSearchParams(searchParams);
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
            <div className="result-nopadding result">
                {promiseNoData({ promise, data, error }) ||
                    <ResultView
                        activityResult={data}>
                    </ResultView>
                }
            </div>
        </div>


    )

}