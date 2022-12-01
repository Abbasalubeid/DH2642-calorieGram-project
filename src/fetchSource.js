import {
    BASE_URL,
    API_KEY
} from "../src/apiConfig.js"

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
	}
};


function treatHTTPResponseACB(response) {

    if (response.status !== 200)
        throw new Error("HTTP response wrong status: " + response.status);
    else
        return response.json();
}

function transformFitnessACB(object){
    return object.data;
}

function getFitnessInfo(age, weight, height){
    return fetch(BASE_URL + "/bmi?age=" + age + "&weight=" + weight + "&height=" + height, options).then(treatHTTPResponseACB).then(transformFitnessACB);
}

function transformActivityACB(object){
        return object.goals;
}

function getActivityInfo(age, gender,  height, weight, level){
    return fetch(BASE_URL + "/dailycalorie?age=" + age + "&gender=" + gender + "&height=" + height
    + "&weight=" + weight  + "&activitylevel=" + level, options).then(treatHTTPResponseACB).then(transformActivityACB);

}

export {getFitnessInfo, getActivityInfo}



