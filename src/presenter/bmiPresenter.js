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
    // const [style, setStyle] = React.useState("");



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

    function ageIsChangedACB(age) {
        props.model.setAge(age)
    }

    function weightIsChangedACB(weight) {
        props.model.setWeight(weight)
    }

    function heightIsChangedACB(height) {
        props.model.setHeight(height)
    }

    function wasCreatedACB() {
        props.model.addObserver(observerACB);
        return function isTakenDownACB() {                                
            props.model.removeObserver(observerACB);
        };
    }

    function userChangedBmi(bmi){
        props.model.setUserBmi(bmi)
    }
    // function chooseColor(color) {
    //     if(data){
    //         if(data.health === "Normal"){
    //             setStyle("normal");
    //         }
    //         if(data.health === "Normal"){
    //             setStyle("normal");
    //         }
    //         if(data.health === "Normal"){
    //             setStyle("normal");
    //         }
    //         if(data.health === "Normal"){
    //             setStyle("normal");
    //         }
    //         if(data.health === "Normal"){
    //             setStyle("normal");
    //         }
    //         if(data.health === "Normal"){
    //             setStyle("normal");
    //         }
    //         else {
    //             setStyle("");
    //         }
    //     }
    // }


    React.useEffect(wasCreatedACB, []);
    React.useEffect(promiseHasChangedACB, [promise]);
    // React.useEffect(chooseColor, [data]);


    return (
        <div className="bmi-mainStyle">
            <div>
                <h1>BMI Calculate</h1>
                <p className="first-p anim">The BMI Calculator can be used to estimate the number of calories
                    a person needs to consume each day.
                    This calculator can also provide some simple guidelines for gaining or losing weight.</p>
            </div>
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
            <div className={!show ? "bmi-info" : "bmi-info-result"}>
                <CustomInfo />
            </div>
            <div className={show ? "bmi-result" : "hidden"}>
                {promiseNoData({ promise, data, error }) ||
                
                    <BmiResultview
                        bmiResult={data}
                        onUserChangedBmi={userChangedBmi}
                    >
                    </BmiResultview>
                }
            </div>
        </div>
    )

}

/* custom component */
function CustomInfo({ href, children, ...props }) {
    return (
        <div className="custom-info anim">
            <input type="checkbox" id="check" />
            <h2>Information</h2>
            <img src="bmicalc.png" />
            <p>
                <span className="bold-text">What's BMI?</span>
                <br/>
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
            <label htmlFor="check">Read More</label>
        </div >
    )
}