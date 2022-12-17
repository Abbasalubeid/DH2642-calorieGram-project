//import "../css/goalsResult.css";
export default function summaryView(props) {

    function printFunc(){
        const blob = new Blob([template], {type:"text/plain"})
        const href = URL.createObjectURL(blob)
        const a= Object.assign(document.createElement("a"), {
            href,
            download: "goals.txt",
        }) 
        a.click();
        URL.revokeObjectURL(href);
    }

    const template =  `As of ${Date().slice(0,16)} your stats were:
    age: ${props.age} \n
    weight: ${props.weight} \n
    height:${props.height} \n
    BMR:  Calories/day \n
    Your activity level is: \n
    your Diet: \n
    Goals:  ${props.goal.weightGoal} (${props.goal.weightPerWeek}) eat:${props.goal.calloriesIntake} Calories\n
    `
    return ( <div>
        <div className="result">
         <h2>Your summmary is the following:</h2><br></br>
         <h3>age:</h3> {props.age} <br></br>
         <h3>weight:</h3> {props.weight} <br></br>
         <h3>height:</h3>{props.height} <br></br>
         <h3>BMR: </h3> Calories/day <br></br>
         <h3>Your activity level is: </h3><br></br>
         <h3>your Diet: </h3><br></br>
         <h3>Goals:</h3>  {props.goal.weightGoal} ({props.goal.weightPerWeek}) eat:{props.goal.calloriesIntake} Calories
        </div>
        <div><button className = "btn anim" onClick ={printFunc}> Download result </button></div>
     </div>
     );
}
