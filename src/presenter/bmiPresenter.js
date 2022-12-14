import SearchView from "../view/searchView.js";
import BmiResultview from "../view/bmiResultView.js";
import React from "react";
import promiseNoData from "../view/promiseNoData.js";
import { getFitnessInfo } from "../fetchSource";


export default function BmiPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [show, setShow] = React.useState(false);
    const [submitButton, setSubmitButton] = React.useState(false);
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
        setShow(true);
        setSubmitButton(true);
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
        <div className="bmi-mainStyle">
            <div>
                <h1>BMI Calculate</h1>
                <p>The Calorie Calculator can be used to estimate the number of calories a person needs to consume each day.
                    This calculator can also provide some simple guidelines for gaining or losing weight.</p>
            </div>
            <div className="bmi-style">
                <SearchView onUserChangedAge={ageIsChangedACB}
                    onUserChangedWeight={weightIsChangedACB}
                    onUserChangedHeight={heightIsChangedACB}
                    onUserSearched={userSearchedACB}
                    showBmiInfo={true}
                />
            </div>
            <div className={!show ? "bmi-info" : "hidden"}>
                <CustomInfo />
            </div>
            <div className={show ? "bmi-result" : "hidden"}>
                {promiseNoData({ promise, data, error }) ||
                    <BmiResultview
                        bmiResult={data}>
                    </BmiResultview>
                }
            </div>
        </div>
    )

}

/* custom component */
function CustomInfo({ href, children, ...props }) {
    return (
        <div>
            <h2>Information</h2>
            <p>Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for understanding.
                Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for understanding.
                Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for understanding.
                Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for understanding.
                Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for understanding.
                Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for understanding.
                Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for understanding.
                Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for understanding.
                Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for understanding.
                Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for understanding.
                Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for understanding.
                Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for understanding.
                Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for understanding.
                Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for understanding.
                Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for understanding.
                Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for understanding.
                Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for understanding.
                Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for understanding.
                Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for understanding.
                Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for understanding.

            </p>
        </div>
    )
}