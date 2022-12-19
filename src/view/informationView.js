import React from 'react';
import "../css/diet.css";
import "../css/goals.css";
import "../css/bmi.css";

export default function InformationPresenter (props) {
    return (
        <div>


            <div className={!props.goals ? "hidden" : " "}>
                <h1>Goals</h1>
                <p className="first-p anim"> By choosing how many times you intend to train per week you will be presented
                    with a set of goals to achieve. <br></br>
                    Each set has first the main goal which can vary from mild weight loss
                    to extreme weight gain, then amount of calories you need to take daily to achieve
                    that goal.</p>
            </div>


            <div className={props.diet1 ? 'diet' : 'hidden'}>
                <h1>Diet Calculate</h1>
                <p className="first-p anim">The Diet Calculator can be used to estimate the number of calories
                    a person needs to consume each day.
                    This calculator can also provide some simple guidelines for gaining or losing weight.</p>
            </div>


            <div className={props.bmi1 ? '' : 'hidden'}>
                <h1>BMI Calculate</h1>
                <p className="first-p anim">The BMI Calculator can be used to estimate the number of calories
                    a person needs to consume each day.
                    This calculator can also provide some simple guidelines for gaining or losing weight.</p>
            </div>
        

        <div className={props.bmi2? "custom-info anim" : "hidden"}>
             <input type="checkbox" id="check" />
             <h2>Information</h2>
             <img src="bmi-bild.jpg" />
             <p>
                 <span className= "bold-text">What's BMI?</span>
                 <br />
                 Body mass index (BMI) to determine how healthy you are.
                 For most adults, a BMI between 18.5 to 24.9 is the ideal BMI to have.

                 BMI is not a perfect measure, because it does not directly assess body fat.<br /><br />
                 Muscle and bone are denser than fat, so an athlete or muscular person may have a high BMI,
                 yet not have too much fat. But most people are not athletes,
                 and for most people, BMI is a very good gauge of their level of body fat.
                 <br />
             </p>
        </div >



            <div className={props.diet2? "custom-info anim" : "hidden"}> 
                <input type="checkbox" id="check" />
                <h2>Information</h2>
                <img src="healthy-diet.png" />
                <p>
                    <span className="bold-text">What is a healthy diet?</span><br />
                    A healthy diet is essential for good health and nutrition.<br />
                    It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer.
                    Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.<br />
                    <span className="bold-text">What is a Good Diet?</span><br />
                    A good diet consist of three main components which we will help you calculate based on what you want to achieve:<br></br>
                    Carbs are sugar basically. No matter what you eat a chocolate, bread, pasta or sugar, in your body they get converted to the same thing,
                    spiking your blood sugar, which in turn spikes your insulin levels.
                </p>
            </div>

        </div>
     )
}
