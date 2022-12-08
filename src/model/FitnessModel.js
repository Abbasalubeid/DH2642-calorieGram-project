export default class FitnessModel{
    constructor(){
        this.person = {};
        this.currentGoal = {};
    }

    setAge(age){
        if(Number.isInteger(+age) && age > 1)
            this.person.age = age;
    }

    setGender(gender){
        this.person.gender = gender;
    }

    setWeight(weight){
        // API restrictions
        if(weight > 160 || weight <  40)
            return;
        else
            this.person.weight = weight;
           
    }

    setHeight(height){
     if(height < 130 || height > 230)   
        return;
     else
        this.person.height = height;   
        
    }

}