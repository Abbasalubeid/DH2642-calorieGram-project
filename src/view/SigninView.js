
import { Link } from 'react-router-dom';

 import "../css/login.css";

export default function Signin(props)  {
  
   function userSubmitACB (e) {
        props.onUserSubmit(e)  
      };
    function userEmailACB(e){
     
     props.onUserEmail(e.target.value)
    }
  
    function userPasswordACB(e) {
      props.onUserPassword(e.target.value)
    }

  return (
         
    
            <div className="login-banner">
                <div className="form-container">
                    <h2>Login</h2>
                    {props.onUserError} 
                    <form onSubmit={userSubmitACB} className="form-login" >
                        <label htmlFor="email">Email address:</label>
                        <input type="email" placeholder="abc@email.com" onChange={userEmailACB} required="required" ></input>
                        <label htmlFor="password">Password:</label>
                        <input type="password" placeholder="**********" onChange={userPasswordACB} ></input>
                        <button  type="submit" className="btn"  >Log in</button>
                        
                        <Link to={"/signup"}>Don't have a account? Sign up</Link>
                    </form>
                </div>
            </div>
          
        )

}