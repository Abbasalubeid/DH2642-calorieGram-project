import GoalsSearchPresenter from "./presenter/goalsSearchPresenter.js";
import BmiPresenter from "./presenter/bmiPresenter.js";
import Homepage from "./view/homepage.js";
import { Link, Route, Routes } from "react-router-dom";
function App(props) {
  

  return (
        <div>
          <nav>
            <li>
              <Link to="goals" reloadDocument>Goals</Link>
            </li>
            <li>
            <Link to="bmi" reloadDocument>BMI calculator</Link>
            </li>
            <li>
            <Link to="Home" reloadDocument>Homepage</Link>
            </li>
          </nav>
          <Routes>
            <Route path="Home" element={<Homepage/>} />
            <Route path="goals" element={<GoalsSearchPresenter model={props.model}/>}/>
            <Route path="bmi" element={<BmiPresenter model = {props.model}/>} />
          </Routes>
        </div>);

}

export default App;
