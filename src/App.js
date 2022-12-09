import Joyride from 'react-joyride';
import React from "react";
import GoalsSearchPresenter from "./presenter/goalsSearchPresenter.js";
import BmiPresenter from "./presenter/bmiPresenter.js";
import Homepage from "./view/homepage.js";
import { Route, Routes } from "react-router-dom";
import NavbarView from "./view/navbarView.js";
import "./css/App.css";

function App(props) {

  const [{ steps, run }, setState] = React.useState({
    run: false,
    steps: [],
    stepIndex: 0
  });


  function pageReview() {
    setState({
      run: true,
      steps: [
        {
          target: '.nav-home',
          content: 'Click here to go back to the homepage',
          stepIndex: 2
        },
        {
          target: '.nav-bmi',
          content: 'Click here to calculate your current BMI',
          stepIndex: 1
        },
        {
          target: '.nav-goals',
          content: 'Click here to plan your healthy journey',
          stepIndex: 0
        },
      ]
    })
  }

  function refreshACB() {
    window.location.reload();
  }

  return (
    <>
      <div className="app">
        <Joyride steps={steps}
          run={run}
          continuous={true} />
      </div>
      <NavbarView />
      <div className="mainContainer">
        <button onClick={pageReview} className = {run === false ? " ": "hidden"} >Page review</button>
        <button onClick={refreshACB} className = {run === true ? " ": "hidden"}>Restore pageReview</button>
        <Routes>
          <Route path="home" element={<Homepage />} />
          <Route path="goals" element={<GoalsSearchPresenter model={props.model} />} />
          <Route path="bmi" element={<BmiPresenter model={props.model} />} />
        </Routes>

      </div>
    </>);

}

export default App;
