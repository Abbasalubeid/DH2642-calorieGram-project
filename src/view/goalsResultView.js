import "../css/goalsResult.css";
export default function GoalsResultView(props) {

    function renderGoalsCB(object) {
        if (props.activityResult.goals[object]["gain weight"]){
            const s = `For ${object + "(" + props.activityResult.goals[object]["gain weight"] + "/week" + ")" + "➡️"}
            Eat ${Number(props.activityResult.goals[object]["calory"]).toFixed(0)} Calories/day`
            const ret = `${object + "," + props.activityResult.goals[object]["gain weight"] + ","}${Number(props.activityResult.goals[object]["calory"]).toFixed(0)}`
            return <button className="btn anim" value={ret} key={object} onClick={userGoalIsChanged}>{s}</button>
        }

        else if (props.activityResult.goals[object]["loss weight"]){
            const s = `For ${object + "(" + props.activityResult.goals[object]["loss weight"] + "/week" + ")" + "➡️"}
            Eat ${Number(props.activityResult.goals[object]["calory"]).toFixed(0)} Calories/day`
            const ret = `${object +","+ props.activityResult.goals[object]["loss weight"] + "," }${Number(props.activityResult.goals[object]["calory"]).toFixed(0)}`
            return <button className="btn anim" value={ret} key={object} onClick={userGoalIsChanged}>{s}</button>
        }
    }
    
    //since maintain is a bit of a special case, we check if the string we get starts with "to" which only maintain weight goal starts with then we handle it, otherwise its one of the other 6 goals.
    function userGoalIsChanged(event){
        if (event.target.outerText.substring(0,2) === "To"){
            const ret = `Maintain weight, ,${event.target.outerText.substring(26,30)}`
            props.onUserChangedUserGoals(ret)
        }
        else{
            props.onUserChangedUserGoals(event.target.value)
        }
        
        
    }
    /*
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
    */

    const template =  `As of ${Date().slice(0,16)} your stats were:
    age: ${props.userInfo.age}
    weight: ${props.userInfo.weight}
    height: ${props.userInfo.height}
    BMR: ${(props.activityResult.BMR)} Calories/day
    Goals: ${JSON.stringify(props.activityResult.goals).replace(/,/g, "\n")}
    `
    return ( <div>
        <div className="result-button">
            <h3>Click to choose and save a goal</h3>
            <button className="btn anim" onClick={userGoalIsChanged}>To Maintain weight ➡️ Eat {(props.activityResult.BMR)} Calories/day</button>
             {Object.keys(props.activityResult.goals).map(renderGoalsCB)}
        </div>
     </div>
     );
}
