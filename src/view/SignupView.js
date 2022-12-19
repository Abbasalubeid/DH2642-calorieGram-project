
import { Link } from 'react-router-dom';

 import "../css/login.css";


export default function Signup (props) {

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
      <div>
      <h2>To use our futures you will need an account!<br></br>
            Click here to sign up with your email!<br></br>
          It takes less than a minute😁 
          </h2>
          <h2>After using our futures, you will learn the basics about a healthy lifestyle. <br></br>
            You will also learn more about your current health state and how to maintain or change it
          </h2>
      </div>
        <div className="form-container">
            <h2>Create a new account</h2>
            {props.onUserError}
            <form onSubmit={userSubmitACB} className="form-register">
                <label htmlFor="email" >Email address:</label>
                <input type="email" placeholder="abc@email.om" onChange={userEmailACB}></input>         
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="**********" onChange={userPasswordACB} ></input>
                <label htmlFor="password">Re-type password:</label>
                <input type="password" placeholder="**********" onChange={userPasswordACB} ></input>
                <button  type='submit' className="btn">Sign up</button>
                <Link to="/">Already have a account? Sign in</Link>
            </form>
        </div>
    </div>
  )
  
}

