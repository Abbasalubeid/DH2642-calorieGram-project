import NavbarView from "../view/navbarView";
import { auth } from "../model/firebaseModel";
import { onAuthStateChanged } from "firebase/auth";
import React from "react";
export default function NavbarPresenter(){

    const [signed, setSigned] = React.useState();


    function wasCreatedACB() {
        onAuthStateChanged(auth, (user)=> {
          if (user){
            setSigned(false);
            console.log(user);
          }
          else 
          {
            setSigned(true);
          }
        })
        return function isTakenDownACB() {};
      }

        

    React.useEffect(wasCreatedACB, []);

    return <NavbarView
            signed = {signed}>

        </NavbarView>

}