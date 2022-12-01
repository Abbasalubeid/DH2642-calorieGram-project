export default class FitnessModel{
    constructor( ){
        this.person = {};
    }

    setAge(age){
        if(Number.isInteger(age) && age > 1)
        this.person.age = age;
    }

    setGender(gender){
        this.person.gender = gender;
    }

    setWeight(weight){
        // API restrictions
        if(weight > 160 || weight <  40)
            throw new Error("Weight must be between 40 kg to 160 kg.");
        else
            this.person.weight = weight;
           

    }

    setHeight(height){
     if(height < 130 || height > 230)   
        throw new Error("Height must be between 130 cm to 230 cm.")
     else
        this.person.height = height;   
        
    }

    setAlert(){
        if(this.person.height < 130 || this.person.height > 230)   
            alert("Height must be between 130 cm to 230 cm.")
        if(this.person.weight > 160 ||this.person.weight <  40)
            alert("Weight must be between 40 kg to 160 kg.");
    }

}