
import SearchView from "../view/searchView";
import FitnessModel from "../model/FitnessModel";


export default function SearchViewPresenter(){
    const model = new FitnessModel();


    let componentHeight;
    let componentWeight;
    let componentAge;

    function userSearchedACB(){
        model.setAge(componentAge);
        model.setWeight(componentWeight);
        model.setHeight(componentHeight);
    }

    function ageIsChangedACB(age){
        componentAge = age
    }

    function weightIsChangedACB(weight){
        componentWeight = weight;
    }

    function heightIsChangedACB(height){
        componentHeight = height;
    }



    return (
        <SearchView onUserChangedAge = {ageIsChangedACB}
                    onUserChangedWeight = {weightIsChangedACB}
                    onUserChangedHeight = {heightIsChangedACB}
                    onUserSearched = {userSearchedACB}/>
    )

}