export default function GoalsResultView(props){

    function renderGoalsCB(object){
        if(props.activityResult.goals[object]["gain weight"])
            return  <div key = {object}>For {object + "(" + props.activityResult.goals[object]["gain weight"] + "/week" + ")" + "-->"}                   
             Eat {Number(props.activityResult.goals[object]["calory"]).toFixed(0)} Calories/day</div> 

        else if (props.activityResult.goals[object]["loss weight"] )  
            return <div key = {object}>For {object + "(" + props.activityResult.goals[object]["loss weight"] +  "/week" + ")" + "-->"}  
                        Eat {Number(props.activityResult.goals[object]["calory"]).toFixed(0)} Calories/day</div> 
    }
    function printFunc(){
        const results= document.getElementsByClassName("result");
        //console.log(results[0].textContent);
        const blob = new Blob([results[0].textContent], {type:"text/plain"})
        const href = URL.createObjectURL(blob)
        const a= Object.assign(document.createElement("a"), {
            href,
            download: "goals.txt",
        })
        
        a.click();
        URL.revokeObjectURL(href);
    }
    return ( <div>
                <div className="result">
                     Your current BMR is {(props.activityResult.BMR)} Calories/day
                    Goals:
                     {Object.keys(props.activityResult.goals).map(renderGoalsCB)}
                </div>
                <div><button onClick={printFunc}> print result</button></div>
             </div>
             );
}
