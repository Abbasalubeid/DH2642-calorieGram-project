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
    BMI:\n
    Your activity level is: \n
    your Diet: \n
    Goals:  ${props.goal.weightGoal}\n
    `
    return ( <div>
        <div className="result">
         Your summmary is the following:{template}
        </div>
        <div><button className = "btn anim" onClick ={printFunc}> Download result </button></div>
     </div>
     );
}
