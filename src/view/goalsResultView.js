export default function GoalsResultView(props){

    function renderGoalsCB(object){
        if(props.activityResult.goals[object]["gain weight"])
            return  <div key = {object}>For {object + "(" + props.activityResult.goals[object]["gain weight"] + "/week" + ")" + "-->"}                   
             Eat {Number(props.activityResult.goals[object]["calory"]).toFixed(0)} Calories/day</div> 

        else if (props.activityResult.goals[object]["loss weight"] )  
            return <div key = {object}>For {object + "(" + props.activityResult.goals[object]["loss weight"] +  "/week" + ")" + "-->"}  
                        Eat {Number(props.activityResult.goals[object]["calory"]).toFixed(0)} Calories/day</div> 
    }

    return ( <div className="result">
                <div> Your current BMR is {(props.activityResult.BMR)} Calories/day</div>
                <div>Goals: </div>
                <div> {Object.keys(props.activityResult.goals).map(renderGoalsCB)}</div>
             </div>);
}
