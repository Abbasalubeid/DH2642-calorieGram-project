import "../css/bmiResult.css";

export default function BmiResultView(props) {

    return (
        <div>
            <div>Your current bmi is {(props.bmiResult.bmi)} </div>
            <div>Your current health state: {props.bmiResult.health}</div>
        </div>
    );
}
