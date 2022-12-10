function promiseNoData(promiseState){

    if (!(promiseState.promise))
    return <div>No search result </div>

    if(!promiseState.data && !promiseState.error)
         return <img height="250" src="https://i.gifer.com/WMDx.gif"></img>

    if(promiseState.error)
        return (<div>Error! Weight must be between 40 kg to 160 kg <br></br> 
                   and height must be between 130 cm to 230 cm.
                    
                     </div>)
    
    if (!(promiseState.data))
    return false;

}
export default promiseNoData