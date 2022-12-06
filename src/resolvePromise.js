function resolvePromise(promiseToResolve, promiseState, notify) {
    promiseState.promise = promiseToResolve;
    promiseState.data = {};
    promiseState.error = {};
    if (promiseToResolve == null) {
      return "The promise is null";
    }
    if (notify) notify();
  
    function saveDataACB(result) {
      if (promiseState.promise !== promiseToResolve) return;
      console.log(result)
      promiseState.data = result;
      console.log(result)
      if (notify) notify();
  
    }
    function saveErrorACB(err) {
      if (promiseState.promise !== promiseToResolve) return;
      promiseState.error = err;
      if (notify) notify();
    }
    promiseToResolve.then(saveDataACB).catch(saveErrorACB);
  }
  
  export default resolvePromise;