import "../css/goalsResult.css";
export default function GoalsResultView(props) {

    function renderGoalsCB(object) {
        if (props.activityResult.goals[object]["gain weight"]){
            const s =`For ${object + "(" + props.activityResult.goals[object]["gain weight"] + "/week" + ")" + "-->"}
            Eat ${Number(props.activityResult.goals[object]["calory"]).toFixed(0)} Calories/day`
            const ret = `${object + "," + props.activityResult.goals[object]["gain weight"] + ","}${Number(props.activityResult.goals[object]["calory"]).toFixed(0)}`
            return <button className= "btn anim" value = {ret} key = {object} onClick={userGoalIsChanged}>{s}</button>
        }

        else if (props.activityResult.goals[object]["loss weight"]){
            const s = `For ${object + "(" + props.activityResult.goals[object]["loss weight"] + "/week" + ")" + "-->"}
            Eat ${Number(props.activityResult.goals[object]["calory"]).toFixed(0)} Calories/day`
            const ret = `${object +","+ props.activityResult.goals[object]["loss weight"] + "," }${Number(props.activityResult.goals[object]["calory"]).toFixed(0)}`
            return <button className= "btn anim" value = {ret} key = {object} onClick={userGoalIsChanged}>{s}</button>
        }
    }
    function userGoalIsChanged(event){
        props.onUserChangedUserGoals(event.target.value)
    }
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
    age: ${props.userInfo.age}
    weight: ${props.userInfo.weight}
    height: ${props.userInfo.height}
    BMR: ${(props.activityResult.BMR)} Calories/day
    Goals: ${JSON.stringify(props.activityResult.goals).replace(/,/g, "\n")}
    `
    return ( <div>
        <div className="result">
            Your current BMR is {(props.activityResult.BMR)} Calories/day
            Goals:
             {Object.keys(props.activityResult.goals).map(renderGoalsCB)}
        </div>
        <div><button className = "btn anim" onClick ={printFunc}> Download result </button></div>
     </div>
     );
}
