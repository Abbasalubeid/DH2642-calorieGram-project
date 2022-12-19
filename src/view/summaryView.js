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
    BMI:  ${props.bmi.bmi +(" (") + props.bmi.health + (")")} \n
    Your activity level is: \n
    your Diet: ${props.diet.protein + " protein, " +props.diet.carbs + " carbs, "+props.diet.fat + " fat" }\n
    Goals:  ${props.goal.weightGoal} (${props.goal.weightPerWeek}) eat:${props.goal.caloriesIntake} Calories\n
    `
    return (
        <div className="summary-style anim">
                <h2>Your summmary is the following:</h2>
                <table cellSpacing="23">
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
                            <td className="first-td">Your Activity Level:</td>
                            <td  className="second-td">...</td>
                        </tr>

                        {props.bmi.bmi!="" ?
                                            <tr>
                                                <td className="first-td">BMI:</td>
                                                <td className="second-td">{props.bmi.bmi +(" (") + props.bmi.health + (")")}</td>
                                                <button onClick={props.removeUserBmi} className="btn anim">remove</button> 
                                            </tr>                                            
                        :""
                        }

                        {props.diet.protein!="" ?
                                                <tr>
                                                    <td className="first-td">Your Diet:</td>
                                                    <td className="second-td">{props.diet.protein + " protein, " +props.diet.carbs + " carbs, "+props.diet.fat + " fat" }</td>
                                                    <button onClick={props.removeUserDiet} className="btn anim">remove</button> 
                                                </tr>
                        :""
                        }
                        
                        {props.goal.weightGoal!="" ?
                                                <tr>
                                                    <td className="first-td">Your Goals:</td>
                                                    <td className="second-td">{props.goal.weightGoal+"\n("+
                                                                                props.goal.weightPerWeek+"),\n"+
                                                                                props.goal.caloriesIntake +(" calories per day.")} 
                                                    </td>
                                                 <button onClick={props.removeUserGoal} className="btn anim">remove</button>
                                                </tr>
                        :
                        ""
                        }

                    </tbody>
                </table>  
                <button className="btn anim" onClick={printFunc}> Download result </button>
                <button className="btn anim" onClick={props.removeUserInfo}> Reset Data </button>
            </div>
    );
}