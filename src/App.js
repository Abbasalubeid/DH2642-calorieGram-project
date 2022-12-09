import Joyride from 'react-joyride';
import React from "react";
import GoalsSearchPresenter from "./presenter/goalsSearchPresenter.js";
import BmiPresenter from "./presenter/bmiPresenter.js";
import Homepage from "./view/homepage.js";
import { Link, Route, Routes } from "react-router-dom";

function App(props) {

  const [{steps, run}, setState] = React.useState({
    run : false,
    steps: [],
    stepIndex : 0
  });

  function pageReview(){
    setState({
      run : true,
      steps: [
        {
          target: '.goals',
          content: 'Click here to plan your healthy journey',
          stepIndex: 0
        },
        {
          target: '.bmi',
          content: 'Click here to calculate your current BMI',
          stepIndex: 1
        },
        {
          target: '.home',
          content: 'Click here to go back to the homepage',
          stepIndex: 2
        },
      ]
    })
  }

  function refreshACB(){
    window.location.reload();
  }

  return (
        <div>
          <div className="app">
            <Joyride steps={steps}
                      run = {run}
                      continuous ={true}/>
          </div>
          <nav>
            <li>
              <Link to="goals" className='goals'>Goals</Link>
            </li>
            <li>
            <Link to="bmi" className='bmi'>BMI calculator</Link>
            </li>
            <li>
            <Link to="Home" className='home'>Homepage</Link>
            </li>
          </nav>
          <button onClick={pageReview}>Page review</button>
          <button onClick={refreshACB}>Restore pageReview</button>
          <Routes>
            <Route path="Home" element={<Homepage/>} />
            <Route path="goals" element={<GoalsSearchPresenter model={props.model}/>}/>
            <Route path="bmi" element={<BmiPresenter model = {props.model}/>} />
          </Routes>

        </div>);

}

export default App;
