import React from 'react';
import Joyride from 'react-joyride';
import "../css/homepage.css";

export default function Homepage() {
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
    <div className="hero">
      <div className="app">
        <Joyride steps={steps}
          run={run}
          continuous={true} />
      </div>
      <div class="content">
        <h1 class="anim">Welcome <br />to Calorie Gram</h1>
        <p class="anim">
          Welcome to Calorie Gram🍓 Your personal fitness advisor, calorie calculator, and more 💪
        </p>
        <button onClick={pageReview} class="btn anim">Page review</button>
        <button onClick={refreshACB} class="btn anim">Restore pageReview</button>
        {/* <a href="#" class="btn anim">Join Now</a> */}
        <img src="apple.png" class="feature-img anim" />
      </div>
    </div >
  )
}