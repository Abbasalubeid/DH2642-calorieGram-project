import SearchView from "../view/searchView.js";
import BmiResultview from "../view/bmiResultView.js";
import React from "react";
import promiseNoData from "../view/promiseNoData.js";
import { getFitnessInfo } from "../fetchSource";
import "../css/bmiSearch.css"


export default function BmiPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [show, setShow] = React.useState(false);
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
        setPromise(getFitnessInfo(searchParams));
        setShow(true);
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

    React.useEffect(promiseHasChangedACB, [promise]);

    return (
        <div className="bmi-mainStyle">
            <div>
                <h1>BMI Calculate</h1>
                <p className="first-p">The BMI Calculator can be used to estimate the number of calories
                    a person needs to consume each day.
                    This calculator can also provide some simple guidelines for gaining or losing weight.</p>
            </div>
            <div className="bmi-style">
                <SearchView onUserChangedAge={ageIsChangedACB}
                    onUserChangedGender={genderIsChangedACB}
                    onUserChangedWeight={weightIsChangedACB}
                    onUserChangedHeight={heightIsChangedACB}
                    onUserSearched={userSearchedACB}
                    showGender={true}
                    showBmiInfo={true}
                />
            </div>
            <div className={!show ? "bmi-info" : "bmi-info-result"}>
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
        <div className="custom-info">
            <input type="checkbox" id="check" />
            <h2>Information</h2>
            <img src="bmicalc.png" />
            <p>
                <h4>What's BMI?</h4>
                Body mass index (BMI) to determine how healthy you are.
                For most adults, a BMI between 18.5 to 24.9 is the idead BMI to have.

                BMI is not a perfect measure, because it does not directly assess body fat.<br /><br />
                Muscle and bone are denser than fat, so an athlete or muscular person may have a high BMI,
                yet not have too much fat. But most people are not athletes,
                and for most people, BMI is a very good gauge of their level of body fat.
                <br />
            </p>
            <div className="readmore-text">
                <h4>What are calories?</h4>
                <p>
                    Calories are a measure of how much energy food or drink contains. The amount of energy you need
                    will depend on: age, how active you are and your hight and weight.
                    The term calorie is commonly used as shorthand for kilocalorie. You will find this written as kcal
                    on food packets. Kilojoules (kJ) are the equivalent of kilocalories within the International System
                    of Units, and you'll see both kJ and kcal on nutrition labels. 4.2kJ is equivalent to approximately 1kcal.
                </p>
            </div>
            <label for="check">Read More</label>
        </div >
    )
}