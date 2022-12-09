import GoalsSearchPresenter from "./presenter/goalsSearchPresenter.js";
import BmiPresenter from "./presenter/bmiPresenter.js";
import Homepage from "./view/homepage.js";
import GoalsResultPresenter from "./presenter/goalsResultPresenter.js";
import BmiResultPresenter from "./presenter/bmiResultPresenter.js";
import { Route, Routes } from "react-router-dom";
import NavbarPresenter from "./presenter/navbarPresenter.js";
import "./css/App.css";
function App(props) {
  console.log(window.location);

  return (
    <>
      <NavbarPresenter />
      <div>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/goals" element={<GoalsSearchPresenter model={props.model} />} />
          <Route path="goals/result" element={<GoalsResultPresenter model={props.model} />} />
          <Route path="/bmi" element={<BmiPresenter model={props.model} />} />
          <Route path="bmi/result" element={<BmiResultPresenter model={props.model} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
