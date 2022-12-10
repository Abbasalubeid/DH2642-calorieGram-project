import Joyride from 'react-joyride';
import React from "react";
import GoalsSearchPresenter from "./presenter/goalsSearchPresenter.js";
import BmiPresenter from "./presenter/bmiPresenter.js";
import Homepage from "./view/homepage.js";
import { Route, Routes } from "react-router-dom";
import NavbarView from "./view/navbarView.js";
import "./css/App.css";

function App(props) {

  const [{ steps, run,}, setState] = React.useState({
    run: false,
    steps: [],
  });


  function pageReviewACB() {
    setState({
      run: true,
      steps: [
        {
          target: '.nav-home',
          content: <h2>Welcome to Calorie Gram🍓
                       Your personal fitness advisor, calorie calculator, and more 💪 
                  </h2>,
          locale: { skip: <strong aria-label="skip">SKIP</strong> },
          placement: 'center',
        },
        {

          target: '.nav-home',
          content: <h2>Click here to go back to the homepage 🏠</h2>,
          locale: { skip: <strong aria-label="skip">SKIP</strong> },
        },
        {
          target: '.nav-bmi',
          content: <h2>Calculate your current BMI ✔️</h2>,
          locale: { skip: <strong aria-label="skip">SKIP</strong> },
        },
        {
          target: '.nav-goals',
          content: <h2>Calculate your food intake and set a personal goal🎯</h2>,
          locale: { skip: <strong aria-label="skip">SKIP</strong> },
        },
      ]
    })
  }

  function refreshACB() {
    window.location.reload();
  }


  return (
    <>
      <div>
        <Joyride steps={steps}
          run={run}
          continuous={true}
          showSkipButton/>
      </div>
      <NavbarView />
      <div className="mainContainer">
        <input type="submit" value="Review" className = {run === false ? "btn-submit btn-lg": "hidden"} onClick={pageReviewACB}/>
        <input type="submit" value="Restore Review" className = {run === true ? "btn-submit btn-lg": "hidden"} onClick={refreshACB}/>
        <Routes>
          <Route path="home" element={<Homepage />} />
          <Route path="goals" element={<GoalsSearchPresenter model={props.model} />}>
          </Route> 
          <Route path="bmi" element={<BmiPresenter model={props.model} />} />
        </Routes>

      </div>
    </>);

}

export default App;
