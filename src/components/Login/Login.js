import React, { useState } from "react";
import "./Login.css";
import CloseIcon from "@mui/icons-material/Close";



const Login = ({ setshowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");  const [open, setOpen] = useState(false);


  const handleClickAway = () => {
    setOpen(false);
  };


  return (
   

    <div className="login">
      <form className="login-container ">
        <div className="login-title">
          <h2>{currState}</h2>
          <CloseIcon className="close" onClick={() => setshowLogin(false)} />
        </div>
        <div className="login-input">
            {currState==="login"? (
            <>
            
            <input type="text" placeholder="enter your email" required />
            <input type="text" placeholder="enter your password" required />
          </>
          ) : (
            <>
              <input type="text" placeholder="enter your name" required />
              <input type="text" placeholder="enter your email" required />
              <input type="text" placeholder="enter your password" required />
            </>
          )}
            

          
        </div>

        <button>{currState==="Sign Up"? "Create a Account":"LogIn" }</button>
        <div className="login-condition">
        <input type="checkbox" required />
        <p>by Continuing, I Agree Terms & Privacy Policy</p>

        </div>
        {currState === "Sign Up" ? (
          <>
            <p>Already have an account?</p>
            <span onClick={() => setCurrState("login")}>Login here</span>
          </>
        ) : (
          <>
            <p>Create a new account?</p>
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </>
        )}
        
        
      </form>
    </div>
    
  );
};

export default Login;
