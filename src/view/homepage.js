import React from 'react';
import Joyride from 'react-joyride';
import "../css/homepage.css";
// new import


export default function Homepage() {
  const [joyrideState, setJoyrideState] = React.useState({
    run: false,
    steps: [
      {
        target: '.nav-home',
        content: <h2>Welcome to Calorie Gram🍓 Your personal fitness advisor, calorie calculator, and more 💪 <br></br>
        </h2>,
        locale: { skip: <strong aria-label="skip">SKIP</strong> },
        placement: 'center',
      },
      {
        target: '.nav-home',
        content: <h2>After using our futures, you will learn the basics about a healthy lifestyle. <br></br>
                    You will also learn more about your current health state and how to maintain or change it
        </h2>,
        locale: { skip: <strong aria-label="skip">SKIP</strong> },
        placement: 'center',
      },
      {
        target: '.nav-signup',
        content: <h2>To use our futures you will need an account!<br></br>
          Click here to sign up with your email!<br></br>
        It takes less than a minute😁 
        </h2>,
        locale: { skip: <strong aria-label="skip">SKIP</strong> },
      },
      {
        target: '.nav-login',
        content: <h2>Then log in with your account<br></br> 
        </h2>,
        locale: { skip: <strong aria-label="skip">SKIP</strong> },
      },
      {
        target: '.nav-profile',
        content: <h2>Tell us more about yourself in your profile✍️</h2>,
        locale: { skip: <strong aria-label="skip">SKIP</strong> },
      },
      {
        target: '.nav-bmi',
        content: <h2>BMI is a scientific measurement of health🏃 <br></br>
                      Click here to learn more about it and calculate your own</h2>,
        locale: { skip: <strong aria-label="skip">SKIP</strong> },

      },
      {
        target: '.nav-goals',
        content: <h2>Click here to calculate your food intake and set a personal goal🎯</h2>,
        locale: { skip: <strong aria-label="skip">SKIP</strong> },
      },
      {
        target: '.nav-diet',
        content: <h2>A goal without a plan is only a dream💤<br></br>
          Choose a diet plan that you can follow to achieve your goal🥗</h2>,
        locale: { skip: <strong aria-label="skip">SKIP</strong> },
      },

      {
        target: '.nav-summary',
        content: <h2>Felling overwhelmed? <br></br>
        Dont worry! We will save all information for you📝  <br></br>
        Click here to see and download your personal information💾
        </h2>,
        locale: { skip: <strong aria-label="skip">SKIP</strong> },
      },
      {
        target: '.nav-home',
        content: <h2>Click here to go back to the homepage 🏠</h2>,
        locale: { skip: <strong aria-label="skip">SKIP</strong> },
       
      }
      
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
        <h1 className="anim">Calorie Gram🍓</h1>
        <p className="anim">
          
          Want to be healthy but dont know where to start?<br></br>
          You came to the right place😁 <br></br>
          Start your healthy journey by clicking on the start button!
        </p>
        <button onClick={pageReview} className={joyrideState.run === false ? "btn anim" : "hidden"}>Start</button>
        <img src="apple.png" className="feature-img anim" />
      </div>
    </div >)
}

