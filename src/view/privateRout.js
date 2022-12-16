
import React from "react";
import { Route, Navigate} from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// export default function PrivateRoute({component: Component, ...rest}){
   
    //    const {currentUser} = useAuth()
    //     return(
        //         <Route   {...rest} render = {props => {
//             return currentUser ? <Component{...props}/>: <Navigate replace to="/login"/>
//         }}>
          
//      </Route>
//     )

// }
const PrivateRoute = ({children})=>{
    const {auth, currentUser} = useAuth()
    if(!currentUser){
        return<Navigate to='/login'/>
    }
    return children;

}

export default PrivateRoute