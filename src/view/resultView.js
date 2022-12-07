export default function ResultView(props){

    function log(){
        console.log(props.result)
    }

    function renderGoalsCB(object, i){
        // if("gain weight" in props.result.goals[object])
            return  <div>  Gain weight: {props.result.goals[object]["gain weight"]}
                            Lose weight: {props.result.goals[object]["loss weight"]}</div>;
        // else    
            
                
               
        
    }

    return ( <div>
                <div> Your current BMR is {(props.result.BMR)} Calories/day</div>
                <div> {Object.keys(props.result.goals).map(renderGoalsCB)}</div>
                <input type="submit" name="submit" value="ConsoleLog" className="submit-button" onClick={log} />
             </div>);
}
