import React from 'react';
import Joyride, { ACTIONS, EVENTS, STATUS } from 'react-joyride';
import "../css/homepage.css";

export default function Homepage() {
  const [joyrideState, setJoyrideState] = React.useState({
    run: false,
    steps: [
      {
        target: '.nav-home',
        content: <h2>This is a page review (UPDATE THIS)
        </h2>,
        locale: { skip: <strong aria-label="skip">SKIP</strong> },
        placement: 'center',
      },
      {
        target: '.nav-diet',
        content: <h2>See your current diet plan🥗</h2>,
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
      {
        target: '.nav-home',
        content: <h2>Click here to go back to the homepage 🏠</h2>,
        locale: { skip: <strong aria-label="skip">SKIP</strong> },
       
      },
      
    ],
  });


  function handleJoyrideCallback (data) {
    const {action} = data;

    if (action.includes("reset")) {
      const newState = {};
      newState.steps = joyrideState.steps;
      newState.run = false;
      setJoyrideState(newState)
    }
  };


  function pageReview() {
    const newState = {};
    newState.steps = joyrideState.steps;
    newState.run = true;
    setJoyrideState(newState)
    if(newState.run == false){
      const newState = {};
      newState.steps = joyrideState.steps;
      newState.run = false;
      setJoyrideState(newState)
    }
  }

  return (
    <div className="hero">
      <div className="app">
        <Joyride steps={joyrideState.steps}
          run={joyrideState.run}
          continuous={true}
          showSkipButton = {true}
          showProgress = {true}
          styles={{
            options: {
              arrowColor: '#006dcc',
              backgroundColor: '#fff',
              beaconSize: 100,
              overlayColor: 'rgba(0, 0, 0, 0.5)',
              primaryColor: '#006dcc',
              spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
              textColor: '#333',
              zIndex: 100,
            }
          }} 
          callback ={handleJoyrideCallback}/>
      </div>
      <div className="content">
        <h1 className="anim">Welcome <br />to Calorie Gram</h1>
        <p className="anim">
          Welcome to Calorie Gram🍓 Your personal fitness advisor, calorie calculator, and more 💪
        </p>
        <button onClick={pageReview} className={joyrideState.run === false ? "btn anim" : "hidden"}>Page review</button>
        <img src="apple.png" className="feature-img anim" />
      </div>
    </div >)
}

