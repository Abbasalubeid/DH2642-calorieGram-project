export default class FitnessModel{
  constructor(person, goal){
      this.observers = [];
      this.person = person;
      this.currentActivityLevel = ""
      this.currentGoal = goal;
      this.currentDiet ={};
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

  setGender(gender){
      if (gender !== this.person.gender){
          this.person.gender = gender;
          const payload = { newGender : gender}
          this.notifyObservers(payload);
      }
  }

  setAge(age){
    // API restrictions
    // Undefined when deleted in the UI
    if (!age || ((age >= 2 && age <= 80) && Number.isInteger(+age))){
      this.person.age = age;
      const payload = { newAge : age}
      this.notifyObservers(payload);
    }
    else 
      throw new Error("Age must be an integer between 2 and 80");
  }

  setWeight(weight){
    // API restrictions
    // Undefined when deleted in the UI  
    if(!weight || (weight <= 160 && weight >=  40)){
      this.person.weight = weight;
      const payload = { newWeight : weight}
      this.notifyObservers(payload);
    }
    else
      throw new Error("Weight must be an integer between 40 and 160");
  }

  setHeight(height){
   // API restrictions
   // Undefined when deleted in the UI
   if((!height ||height > 130 && height < 230)) {
    this.person.height = height;  
    const payload = { newHeight : height}
    this.notifyObservers(payload); 
   }
   else
      throw new Error("Height must be an integer between 130 and 230");
   }

  setUserGoal(goal){
      const goals = (goal.toString()).split(",");
      this.currentGoal.weightGoal     = goals[0 ];
      this.currentGoal.weightPerWeek  = goals[1];
      this.currentGoal.caloriesIntake = goals[2];

      const payload = { newGoals : this.currentGoal}
      this.notifyObservers(payload);
  }

  setUserDiet(diet){
    const dietArr = (diet.toString()).split(",");
    console.log(dietArr)
    this.currentDiet.protein = dietArr[0];
    this.currentDiet.carbs   = dietArr[1];
    this.currentDiet.fat     = dietArr[2];
    
    const payload = { newDiet : this.currentDiet}
      this.notifyObservers(payload);
  }
}