import "../css/goalsResult.css";
export default function GoalsResultView(props) {

    function renderGoalsCB(object) {
        if (props.activityResult.goals[object]["gain weight"]){
            const s =`For ${object + "(" + props.activityResult.goals[object]["gain weight"] + "/week" + ")" + "-->"}
            Eat ${Number(props.activityResult.goals[object]["calory"]).toFixed(0)} Calories/day`
            const ret = `${object + "," + props.activityResult.goals[object]["gain weight"] + ","}${Number(props.activityResult.goals[object]["calory"]).toFixed(0)}`
            return <button className= "btn anim" value = {ret} key = {object} onClick={userGoalIsChanged}>
                
                <CustomInfo /></button>
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


/* custom component */
function CustomInfo({ href, children, ...props }) {
    return (
        <div className="custom-info anim">
            <input type="checkbox" id="check" />
            <h2>Information</h2>
            <img src="healthy-diet.png" />
            <p>
                <span className="bold-text">What's Healthy Diet?</span><br />
                A healthy diet is essential for good health and nutrition.<br />
                It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer.
                Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.<br />
                <span className="bold-text">What's Good Diet?</span><br />
                A good diet consist of three main components which we will help you calculate based on what you want to achieve:<br></br>
                Carbs are sugar basically. No matter what you eat a chocolate, bread, pasta or sugar, in your body they get converted to the same thing,
                spiking your blood sugar, which in turn spikes your insulin levels.
            </p>
            <div className="readmore-text">
                <p>
                    When you have a high amount of insulin in your body, you can't burn fat. Carbs will provide you with "instant energy" but they
                    are hard to consume so eating a lot will tend to make you fat. Think of the standard american diet and the obesity epidemic. Diets that
                    advocate a high carb consumption are vegan, for example. US health system advocates high carb, low fat diets.<br></br>
                    <span className="bold-text">What's Body Fat?</span> <br />
                    Fats There are at least 3 types of fat. Some are good, some are bad. There is a consensus that trans fats (from processed foods) are bad for you.
                    Saturated fat (butter, lard) is now again being considered healthy (check Time magazine, and lots of studies). Monounsaturated fat was always
                    considered healthy.
                    Diets that advocate a high fat, low carb lifestyle are keto and paleo. Sweden for example advocates low carb, high fat diets.<br></br>
                    <span className="bold-text">What's Protein?</span><br />
                    Protein is a macronutrient. To put it simply, protein is one of the main nutrients that every person needs to maintain a healthy body. It helps to repair
                    any internal or external damage, supports the immune system and contributes to an overall feeling of well-being.
                </p>
            </div>
            <label htmlFor="check">Read More</label>
        </div>
    )
}
