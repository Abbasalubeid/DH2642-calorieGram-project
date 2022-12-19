import "../css/diet.css"
import "../css/bmiSearch.css"
export default function DietResultView(props){

    function renderDietCB(object){
        // 'calorie' is an extra/unused property returned by the API
        if(object != "calorie"){
        const ret =`${(props.macros[object]["protein"]).toFixed(0)}g,${(props.macros[object]["carbs"]).toFixed(0)}g,${(props.macros[object]["fat"]).toFixed(0)}g`
        return (
            <tr key={object} >
                <td className="dlabel">
                    <label key={object} className="container"><span className="label">{object + " diet"}</span>
                        <input type="radio" value={ret} 
                            onClick={userDietIsChanged}
                            name="food"
                        />
                        <span className="checkmark"></span>
                    </label>
                </td>
                <td className="diet-col dtext">Protein</td>
                <td className="diet-col dstate">
                        <span></span>
                    {Number(props.macros[object]["protein"]).toFixed(0) + "g"}</td>
                <td className="diet-col dtext">Carbs</td>
                <td className="diet-col dstate"><span></span>
                    {Number(props.macros[object]["carbs"]).toFixed(0) + "g"}</td>
                <td className="diet-col dtext">Fat</td>
                <td className="diet-col dstate"><span></span>
                    {Number(props.macros[object]["fat"]).toFixed(0) + " g"}</td>
            </tr>
        )
        }  
    }
    function userDietIsChanged(event){
        props.onUserChangedDiet(event.target.value)
    }
        
    return(
        <div className="diet-row">
            <h3>Click to choose and save a diet plan</h3>
            <table className="diet-table">
                <tbody>
                    {Object.keys(props.macros).map(renderDietCB)}
                </tbody>
            </table>
           </div>

    )
}

// <button className= "btn anim" key = {object}> {"\n" + object + " diet: protein -> "
        //                       +  Number(props.macros[object]["protein"]).toFixed(0) + " gram"
        //                       + " carbs -> " + Number(props.macros[object]["carbs"]).toFixed(0) + " gram"
        //                       + " fat -> " + Number(props.macros[object]["fat"]).toFixed(0) + " gram"}</button>