export default class FitnessModel {
  constructor() {
    this.observers = [];
    this.person = {};
    this.currentGoal = {};
    this.currentUser = null;
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



  setAge(age) {
    if (age > 1 && age < 80)
      if (Number.isInteger(+age) && age !== this.person.age) {
        this.person.age = age;
        const payload = { newAge: age }
        this.notifyObservers(payload);
      }

  }

  setGender(gender) {
    if (gender != this.person.gender) {
      this.person.gender = gender;
      const payload = { newGender: gender }
      this.notifyObservers(payload);
    }


  }

  setWeight(weight) {
    // API restrictions
    if (weight > 160 || weight < 40)
      return;
    else if (weight !== this.person.weight) {
      this.person.weight = weight;
      const payload = { newWeight: weight }
      this.notifyObservers(payload);
    }
  }

  setHeight(height) {
    // API restrictions
    if (height < 130 || height > 230)
      return;
    else if (height !== this.person.height)
      this.person.height = height;
    const payload = { newHeight: height }
    this.notifyObservers(payload);

  }


  // setCurrentUser(email, username, password) {
  //   function currentUseACB(email, password) {
  //     this.currentUser;
  //   }
  //   const user = this.currentUser(email, username, password);
  //   this.currentUser = user;
  // }

  // async signUp(email, username, password) {
  //   const user = await createUserInFirebase(email, username, password);
  //   this.notifyObservers({
  //     email: email,
  //     username: username,
  //   });
  //   this.setCurrentUser(user);
  // }
  // async signIn(email, password) {
  //   const user = await signInWithPasswordAndEmail(email, password);
  //   this.notifyObservers({ signIn: "true" });
  //   this.setCurrentUser(user);
  // }

  signIn(email, password) {
    this.setCurrentUser(email, password);
  }
}