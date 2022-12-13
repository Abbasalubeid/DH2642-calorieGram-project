
export default function DietResultView(props){

    function renderDietCB(object){
        // 'calorie' is an extra/unused property returned by the API
        if(object != "calorie")
        return <button className= "btn anim" key = {object}> {"\n" + object + " diet: protein -> "  
                              +  Number(props.macros[object]["protein"]).toFixed(0) + " gram"
                              + " carbs -> " + Number(props.macros[object]["carbs"]).toFixed(0) + " gram"
                              + " fat -> " + Number(props.macros[object]["fat"]).toFixed(0) + " gram"}</button>
    }

    return(
           <div className="result-nopadding result">
            Click to choose and save a diet plan
            {Object.keys(props.macros).map(renderDietCB)}
           </div>

    )
}