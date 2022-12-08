import GoalsSearchPresenter from "./presenter/goalsSearchPresenter.js";
import BmiPresenter from "./presenter/bmiPresenter.js";
function App(props) {
  

  return (<div>
          <GoalsSearchPresenter model={props.model} />
          <BmiPresenter model = {props.model}/>
          </div>);

}

export default App;
