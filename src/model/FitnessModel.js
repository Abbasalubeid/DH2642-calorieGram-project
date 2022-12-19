export default class FitnessModel{
  constructor(person, goal, diet,bmi){
      this.observers            = [];
      this.person               = person;
      this.currentActivityLevel = ""
      this.currentGoal          = goal;
      this.currentDiet          = diet;
      this.currentBmi           = bmi;
      this.currentUserId = ""
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
      throw new Error("Weight must be a number between 40 and 160");
  }

  setHeight(height){
   // API restrictions
   // Undefined when deleted in the UI
   if((!height ||height >= 130 && height <= 230)) {
    this.person.height = height;  
    const payload = { newHeight : height}
    this.notifyObservers(payload); 
   }
   else
      throw new Error("Height must be a number between 130 and 230");
   }

  setUserGoal(goal){
      const goals = (goal.toString()).split(",");
      this.currentGoal.weightGoal     = goals[0];
      this.currentGoal.weightPerWeek  = goals[1];
      this.currentGoal.caloriesIntake = goals[2];
      
      const payload = { newGoals : this.currentGoal}
      this.notifyObservers(payload);
  }
  removeUserGoal(){
    this.currentGoal.weightGoal       = "";
      this.currentGoal.weightPerWeek  = "";
      this.currentGoal.caloriesIntake = "";

    const payload = { newGoals : this.currentGoal}
    this.notifyObservers(payload);
  }

  setUserDiet(diet){ 
    console.log(diet);
    const dietArr = (diet.toString()).split(",");

    this.currentDiet.protein = dietArr[0];
    this.currentDiet.carbs   = dietArr[1];
    this.currentDiet.fat     = dietArr[2];

    const payload = { newDiet : this.currentDiet}
      this.notifyObservers(payload);
  }
  removeUserDiet(){
    this.currentDiet.protein = "";
    this.currentDiet.carbs   = "";
    this.currentDiet.fat     = "";

    const payload = { newDiet : this.currentDiet}
      this.notifyObservers(payload);
  }
  
  setUserBmi(bmi){
    const bmiArr = (bmi.toString()).split(",");
    this.currentBmi.bmi      = bmiArr[0];
    this.currentBmi.health   = bmiArr[1];
    
    const payload = { newBmi : this.currentBmi}
      this.notifyObservers(payload);
  }


  setUserId(userId){
    this.currentUserId = userId;

    const payload = { newId : this.currentUserId }
    this.notifyObservers(payload);
  }

  removeUserBmi(){
    this.currentBmi.bmi      = "";
    this.currentBmi.health   = "";

    const payload = { newBmi : this.currentBmi}
      this.notifyObservers(payload);
  }
  setUserActivity(activity){
    console.log(activity)
    this.currentActivityLevel = activity

    const payload = { newActivityLevel : this.currentActivityLevel}
      this.notifyObservers(payload);
  }
  
}