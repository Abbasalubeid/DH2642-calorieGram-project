import "../css/summary.css";
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
    BMI:  Calories/day \n
    Your activity level is: \n
    your Diet: \n
    Goals:  ${props.goal.weightGoal} (${props.goal.weightPerWeek}) eat:${props.goal.calloriesIntake} Calories\n
    `
    return (
        <div className="summary-style">
                <h2>Your summmary is the following:</h2>
                <table cellspacing="23">
                    <tbody>
                        <tr>
                            <td className="first-td">Age:</td>
                            <td  className="second-td">{props.age}</td>
                        </tr>
                        <tr>
                            <td className="first-td">Weight:</td>
                            <td  className="second-td">{props.weight}</td>
                        </tr>
                        <tr>
                            <td className="first-td">Height:</td>
                            <td  className="second-td">{props.height}</td>
                        </tr>
                        <tr>
                            <td className="first-td">BMR:</td>
                            <td  className="second-td">Calories/day</td>
                        </tr>
                        <tr>
                            <td className="first-td">Your Activity Level:</td>
                            <td  className="second-td">...</td>
                        </tr>
                        <tr>
                            <td className="first-td">Your Diet:</td>
                            <td  className="second-td">....</td>
                        </tr>
                        <tr>
                            <td className="first-td">Your Goals:</td>
                            <td  className="second-td">....</td>
                        </tr>
                    </tbody>
                </table>  
                <button className="btn anim" onClick={printFunc}> Download result </button>
            </div>
    );
}

    // <div>Age: <span>{props.age} </span></div>   
    //             <div>Weight: <span>{props.weight}</span></div>   
    //             <div>Height: <span>{props.height}</span></div>   
    //             <div>BMR: <span>Calories/day</span></div>   
    //             <div>Your activity level is: <span></span></div>   
    //             <div>Your Diet: <span></span></div>   
    //             <div>Your Goals: <span></span></div> 


        {/* <div >
         <h2>Your summmary is the following:</h2>
         <h3>age:</h3> {props.age} 
         <h3>weight:</h3> {props.weight} 
         <h3>height:</h3>{props.height} 
         <h3>BMR: </h3> Calories/day 
         <h3>Your activity level is: </h3>
         <h3>your Diet: </h3>
         <h3>Goals:</h3>  {props.goal.weightGoal} ({props.goal.weightPerWeek}) eat:{props.goal.calloriesIntake} Calories
        </div> */}
        {/* <div><button className = "btn anim" onClick ={printFunc}> Download result </button></div> */}
