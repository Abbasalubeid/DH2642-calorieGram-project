export default class FitnessModel{
    constructor(){
        this.person = {};
        this.currentGoal = {};
    }

    setAge(age){
        if(age > 1 && age < 80)
            if(Number.isInteger(+age))
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