import Joyride from 'react-joyride';
import React from "react";
import GoalsSearchPresenter from "./presenter/goalsSearchPresenter.js";
import BmiPresenter from "./presenter/bmiPresenter.js";
import Homepage from "./view/homepage.js";
import { Link, Route, Routes } from "react-router-dom";

function App(props) {

  const [{steps, run}, setState] = React.useState({
    run : false,
    steps: [
      {
        
        target: '.hej',
        content: 'This is my awesome feature!',
      },
      {
        target: '.va',
        content: 'This another awesome feature!',
      },
    ]
  });


  function testRun(){
    setState({
      run : true,
      steps: [
        {
          
          target: '.goals',
          content: 'Click here to plan your healthy journey',
        },
        {
          target: '.bmi',
          content: 'Click here to calculate your current BMI',
        },
        {
          target: '.home',
          content: 'Click here to go back to the homepage',
        },
      ]
    })
  }

  return (
        <div>
          <div className="app">
            <Joyride steps={steps}
                      run = {run}/>
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
          <button onClick={testRun}>TestRun</button>
          <Routes>
            <Route path="Home" element={<Homepage/>} />
            <Route path="goals" element={<GoalsSearchPresenter model={props.model}/>}/>
            <Route path="bmi" element={<BmiPresenter model = {props.model}/>} />
          </Routes>

        </div>);

}

export default App;
