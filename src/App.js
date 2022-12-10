import Joyride from 'react-joyride';
import React from "react";
import GoalsSearchPresenter from "./presenter/goalsSearchPresenter.js";
import BmiPresenter from "./presenter/bmiPresenter.js";
import Homepage from "./view/homepage.js";
import { Route, Routes } from "react-router-dom";
import NavbarView from "./view/navbarView.js";
import "./css/App.css";

function App(props) {

  const [state, setState] = React.useState({
    run: false,
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
    ],
  });


  function pageReviewACB() {
    const newState = {};
    newState.steps = state.steps;
    newState.run = true;
    setState(newState)
  }

  function refreshACB() {
    const newState = {};
    newState.steps = state.steps;
    newState.run = false;
    setState(newState)
  }

  return (
    <>
      <div>
        <Joyride steps={state.steps}
          run={state.run}
          continuous={true}
          showSkipButton
          styles={{
          options  : {
            arrowColor : '#006dcc',
            backgroundColor: '#fff',
            beaconSize: 100,
            overlayColor: 'rgba(0, 0, 0, 0.5)',
            primaryColor: '#006dcc',
            spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
            textColor: '#333',
            zIndex: 100,
          }}}/>
      </div>
      <NavbarView />
      <div className="mainContainer">
        <input type="submit" value="Review" className = {state.run === false ? "btn-submit btn-lg": "hidden"} onClick={pageReviewACB}/>
        <input type="submit" value="Restore Review" className = {state.run === true ? "btn-submit btn-lg": "hidden"} onClick={refreshACB}/>
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
