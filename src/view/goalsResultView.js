import "../css/goalsResult.css";
export default function GoalsResultView(props) {

    function renderGoalsCB(object) {
        if (props.activityResult.goals[object]["gain weight"]){
            
            const s =`For ${object + "(" + props.activityResult.goals[object]["gain weight"] + "/week" + ")" + "-->"}
            Eat ${Number(props.activityResult.goals[object]["calory"]).toFixed(0)} Calories/day`
            const ret = `${object + "," + props.activityResult.goals[object]["gain weight"] + ","}${Number(props.activityResult.goals[object]["calory"]).toFixed(0)}`
            return <button  value = {ret} key = {object} onClick={userGoalIsChanged}>
                    <div className="goal-row text">
                        <div className="goal-col text">{object}</div>
                        <div className="goal-col text">{props.activityResult.goals[object]["gain weight"] + "/week"}</div>
                        <div className="goal-col text">  Eat</div>
                        <div className="goal-col text">{Number(props.activityResult.goals[object]["calory"]).toFixed(0) + " Calories/day"}</div>
                    </div>
                </button>
        }

        else if (props.activityResult.goals[object]["loss weight"]){
            const s = `For ${object + "(" + props.activityResult.goals[object]["loss weight"] + "/week" + ")" + "-->"}
            Eat ${Number(props.activityResult.goals[object]["calory"]).toFixed(0)} Calories/day`
            const ret = `${object +","+ props.activityResult.goals[object]["loss weight"] + "," }${Number(props.activityResult.goals[object]["calory"]).toFixed(0)}`
            return <button value={ret} key={object} onClick={userGoalIsChanged}>
                <div className="goal-row text">
                    <div className="goal-col text">{object}</div>
                    <div className="goal-col text">{props.activityResult.goals[object]["loss weight"] + "/week"}</div>
                    <div className="goal-col text">  Eat</div>
                    <div className="goal-col text">{Number(props.activityResult.goals[object]["calory"]).toFixed(0) + " Calories/day"}</div>
                </div>
            </button>
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
        <div>
             {Object.keys(props.activityResult.goals).map(renderGoalsCB)}
        </div>
        <div><button className = "btn anim" onClick ={printFunc}> Download result </button></div>
     </div>
     );
}

