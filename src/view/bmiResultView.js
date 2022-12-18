import React from "react";
import "../css/bmiResult.css";

export default function BmiResultView(props) {
    
    function userBmiIsChanged(event){
        const ret = `${event.bmi},${event.health}`
        props.onUserChangedBmi(ret)
    }

    return (
        <div className="row anim" > 
            {userBmiIsChanged(props.bmiResult)}
            <div className="col text">Current BMI</div>
            <div className="col state">
                <span></span>
                {(props.bmiResult.bmi)}</div>
            <div className="col text">Current health state</div>
            <div id="healthstate" className="col state">
                <span></span>
                {props.bmiResult.health}</div>
                {/* <input type="button" value={props.bmiResult.health} onClick={changeColorCB}></input> */}
        </div >
    );
}
