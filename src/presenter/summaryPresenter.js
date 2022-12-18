import SummaryView from "../view/summaryView";
import React from "react";


export default function SummaryPresenter(props){
    const [age, setAge] = React.useState(props.model.person.age);
    const [weight, setHeight] = React.useState(props.model.person.weight);
    const [height, setheight] = React.useState(props.model.person.height);
    const [gender, setGender] = React.useState(props.model.person.gender);
    const [goal, setGoals] = React.useState(props.model.currentGoal);
    //const [, reRender] = React.useState();


    return (
        <div className="summary-mainStyle">
            
            <div>
                <SummaryView
                    age = {age}
                    gender = {gender}
                    height = {height}
                    weight = {weight}
                    goal= {goal}
                />
            </div>
           
        </div>
            )
}