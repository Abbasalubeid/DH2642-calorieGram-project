import "../css/dietResult.css"
export default function DietResultView(props){

    function renderDietCB(object){
        // 'calorie' is an extra/unused property returned by the API
        if(object != "calorie"){
        return (
            <tr key={object}>
                <td className="diet-col1 text">{object + " diet"}</td>
                <td className="diet-col text">Protein</td>
                <td className="diet-col state">
                        <span></span>
                    {Number(props.macros[object]["protein"]).toFixed(0) + "g"}</td>
                <td className="diet-col text">Carbs</td>
                <td className="diet-col state"><span></span>
                    {Number(props.macros[object]["carbs"]).toFixed(0) + "g"}</td>
                <td className="diet-col text">Fat</td>
                <td className="diet-col state"><span></span>
                    {Number(props.macros[object]["fat"]).toFixed(0) + " g"}</td>
            </tr>
        )
        }  
    }
        
    return(
        <div className="diet-row">
            {/* Click to choose and save a diet plan */}
            <table>
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