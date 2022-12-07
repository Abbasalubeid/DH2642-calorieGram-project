export default function ResultView(props){

    function log(){
        console.log(props.result)
    }

    function renderGoalsCB(object){
        if(props.result.goals[object]["gain weight"])
            return  <div key = {object}>For {object + "(" + props.result.goals[object]["gain weight"] + "/week" + ")" + "-->"}                   
             Eat {Number(props.result.goals[object]["calory"]).toFixed(0)} Calories/day</div>           
        else if (props.result.goals[object]["loss weight"] )  
            return <div key = {object}>For {object + "(" + props.result.goals[object]["loss weight"] +  "/week" + ")" + "-->"}  
                        Eat {Number(props.result.goals[object]["calory"]).toFixed(0)} Calories/day</div> 
                
               
        
    }

    return ( <div>
                <div> Your current BMR is {(props.result.BMR)} Calories/day</div>
                <div>Goals: </div>
                <div> {Object.keys(props.result.goals).map(renderGoalsCB)}</div>
                <input type="submit" name="submit" value="ConsoleLog" className="submit-button" onClick={log} />
             </div>);
}
