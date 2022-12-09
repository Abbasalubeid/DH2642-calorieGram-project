import GoalsSearchPresenter from "./presenter/goalsSearchPresenter.js";
import BmiPresenter from "./presenter/bmiPresenter.js";
import { Link, Route, Routes } from "react-router-dom";
function App(props) {
  

  return (
        <div>
          <nav>
            <li>
              <Link to="goals">Goals</Link>
            </li>
            <li>
            <Link to="bmi">BMI calculator</Link>
            </li>
          </nav>
          <Routes>
            <Route path="goals" element={<GoalsSearchPresenter model={props.model} />} />
            <Route path="bmi" element={<BmiPresenter model = {props.model}/>} />
          </Routes>
        </div>);

}

export default App;
