import React from 'react';

export default function InformationView (props) {
    const [show, setShow] = React.useState(false);
    setShow(true);
    return (
        <div>
            <div className={show ? 'diet' : 'hidden'}>
                <h1>Diet Calculate</h1>
                <p className="first-p anim">The Diet Calculator can be used to estimate the number of calories
                    a person needs to consume each day.
                    This calculator can also provide some simple guidelines for gaining or losing weight.</p>
            </div>
            <div>
                <h1>BMI Calculate</h1>
                <p className="first-p anim">The BMI Calculator can be used to estimate the number of calories
                    a person needs to consume each day.
                    This calculator can also provide some simple guidelines for gaining or losing weight.</p>
            </div>
        </div>
    )

    
}




// /* custom component */
// function CustomInfo({ href, children, ...props }) {
//     return (
//         <div className="custom-info anim">
//             <input type="checkbox" id="check" />
//             <h2>Information</h2>
//             <img src="bmi-bild.jpg" />
//             <p>
//                 <span className="bold-text">What's BMI?</span>
//                 <br />
//                 Body mass index (BMI) to determine how healthy you are.
//                 For most adults, a BMI between 18.5 to 24.9 is the ideal BMI to have.

//                 BMI is not a perfect measure, because it does not directly assess body fat.<br /><br />
//                 Muscle and bone are denser than fat, so an athlete or muscular person may have a high BMI,
//                 yet not have too much fat. But most people are not athletes,
//                 and for most people, BMI is a very good gauge of their level of body fat.
//                 <br />
//             </p>
//             <div className="readmore-text">
//                 <h4>What are calories?</h4>
//                 <p>
//                     Calories are a measure of how much energy food or drink contains. The amount of energy you need
//                     will depend on: age, how active you are and your hight and weight.
//                     The term calorie is commonly used as shorthand for kilocalorie. You will find this written as kcal
//                     on food packets. Kilojoules (kJ) are the equivalent of kilocalories within the International System
//                     of Units, and you'll see both kJ and kcal on nutrition labels. 4.2kJ is equivalent to approximately 1kcal.
//                 </p>
//             </div>
//             <label htmlFor="check">Read More</label>
//         </div >
//     )
// }


// /* custom component */
// export function CustomInfo2({ href, children, ...props }) {
//     return (
//         <div className="custom-info anim">
//             <input type="checkbox" id="check" />
//             <h2>Information</h2>
//             <img src="healthy-diet.png" />
//             <p>
//                 <span className="bold-text">What is a healthy diet?</span><br />
//                 A healthy diet is essential for good health and nutrition.<br />
//                 It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer.
//                 Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.<br />
//                 <span className="bold-text">What is a Good Diet?</span><br />
//                 A good diet consist of three main components which we will help you calculate based on what you want to achieve:<br></br>
//                 Carbs are sugar basically. No matter what you eat a chocolate, bread, pasta or sugar, in your body they get converted to the same thing,
//                 spiking your blood sugar, which in turn spikes your insulin levels.
//             </p>
//             <div className="readmore-text">
//                 <p>
//                     When you have a high amount of insulin in your body, you can't burn fat. Carbs will provide you with "instant energy" but they
//                     are hard to consume so eating a lot will tend to make you fat. Think of the standard american diet and the obesity epidemic. Diets that
//                     advocate a high carb consumption are vegan, for example. US health system advocates high carb, low fat diets.<br></br>
//                     <span className="bold-text">What is Body Fat?</span> <br />
//                     Fats There are at least 3 types of fat. Some are good, some are bad. There is a consensus that trans fats (from processed foods) are bad for you.
//                     Saturated fat (butter, lard) is now again being considered healthy (check Time magazine, and lots of studies). Monounsaturated fat was always
//                     considered healthy.
//                     Diets that advocate a high fat, low carb lifestyle are keto and paleo. Sweden for example advocates low carb, high fat diets.<br></br>
//                     <span className="bold-text">What is Protein?</span><br />
//                     Protein is a macronutrient. To put it simply, protein is one of the main nutrients that every person needs to maintain a healthy body. It helps to repair
//                     any internal or external damage, supports the immune system and contributes to an overall feeling of well-being.
//                 </p>
//             </div>
//             <label htmlFor="check">Read More</label>
//         </div>
//     )
// }
