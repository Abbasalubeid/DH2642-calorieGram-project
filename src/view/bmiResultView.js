import "../css/bmiResult.css";

export default function BmiResultView(props) {

    return (
        <div className="row anim">
            <div className="col text">Current BMI</div>
            <div className="col state">
                <span></span>
                {(props.bmiResult.bmi)}</div>
            <div className="col text">Current health state</div>
            <div className="col state">
                <span></span>
                {props.bmiResult.health}</div>
        </div >
    );
}
