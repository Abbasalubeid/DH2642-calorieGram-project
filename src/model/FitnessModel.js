export default class FitnessModel{
    constructor(){
        this.observers = [];
        this.person = {}
        this.currentActivityLevel = ""
        this.currentGoal = {};
        this.bmi = {};
    }

    addObserver(callback) {
        this.observers = [...this.observers, callback];
      }
    
      removeObserver(callback) {
        function isSameCallbackCB(cb) {
          if (cb === callback) return false;
          else return true;
        }
    
        this.observers = this.observers.filter(isSameCallbackCB);
      }

      notifyObservers(payload) {
        function invokeObserverCB(obs) {
          obs(payload);
        }
        try {
          this.observers.forEach(invokeObserverCB);
        } catch (error) {
          console.error(error);
        }
      }

    setAge(age){
      // Undefined when deleted in the UI
      if(!age){
        this.person.age = null;
        const payload = { newAge : +age}
        this.notifyObservers(payload);
      }
        if(age > 1 && age < 80)
            if(Number.isInteger(+age) && age !== this.person.age){
                this.person.age = +age;
                const payload = { newAge : +age}
                this.notifyObservers(payload);
            }
                
    }

    setGender(gender){
        if (gender !== this.person.gender){
            this.person.gender = gender;
            const payload = { newGender : gender}
            this.notifyObservers(payload);
        }
        

    }

    setWeight(weight){
      // Undefined when deleted in the UI
      if(!weight){
        this.person.weight = null;
        const payload = { newWeight : +weight}
        this.notifyObservers(payload);
      }
        // API restrictions
        if(weight > 160 || weight <  40)
          return;
        else if (weight !== this.person.weight){
            this.person.weight = +weight;
            const payload = { newWeight : +weight}
            this.notifyObservers(payload);
        }
    }

    setHeight(height){
      // Undefined when deleted in the UI
      if(!height){
        this.person.weight = null;
        const payload = { newHeight : height}
        this.notifyObservers(payload);
      }
      
        // API restrictions
     if(height < 130 || height > 230)   
     return;
    //  throw Error("Weight must be between 40 kg to 160 kg");
     else if (height !== this.person.height){
        this.person.height = +height;  
        const payload = { newHeight : +height}
        this.notifyObservers(payload); 
     }
    }

    setUserGoal(goal){
        const goals = goal.split(",");        
        this.currentGoal.weightGoal = goals[0];
        this.currentGoal.weightPerWeek = goals[1];
        this.currentGoal.caloriesIntake = goals[2];

        const payload = {
          newWeightGoal : goals[0],
          newWeightPerWeek : goals[1],
          newCaloriesIntake : goals[2]
        }
        this.notifyObservers(payload);
    }
}