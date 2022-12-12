function promiseNoData(promiseState){

    if (!(promiseState.promise))
    return <div>No search result </div>

    if(!promiseState.data && !promiseState.error)
         return <img height="250" src="https://i.gifer.com/WMDx.gif"></img>

    if(promiseState.error)
    return <div>{promiseState.error.toString()}</div>
                    
            
    
    if (!(promiseState.data))
    return false;

}
export default promiseNoData