import { BASE_URL, API_KEY } from "../src/apiConfig.js"

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

function transformACB(object) {
    return object.data;
}


function getFitnessInfo(person){
    const query = new URLSearchParams(person);
    return fetch(BASE_URL + "/bmi?" + query.toString(), options).then(treatHTTPResponseACB).then(transformACB);
}

function getActivityInfo(person){
    const query = new URLSearchParams(person);
    return fetch(BASE_URL + "/dailycalorie?" + query.toString(), options).then(treatHTTPResponseACB).then(transformACB);


}

export { getFitnessInfo, getActivityInfo }



