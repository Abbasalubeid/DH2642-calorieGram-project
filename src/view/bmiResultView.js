export default function BmiResultView(props){

    return ( <div className="result">
                <div>Your current bmi is {(props.bmiResult.bmi)} </div>
                <div>Your current health state: {props.bmiResult.health}</div>
             </div>);
}
