
import React from 'react';
import './LoginPage.css';

export default function LoginPage(
  {name,password}
) {
  return (
    <div class="container">
    <div className='main-container'>
    <h1>Login Page</h1><hr/>

    <span id="name">Email/Mobile :{name} </span>
    <br></br>

    <input type="text" autoComplete="off" value='rutuja@gmai.com' required id="text"/>
    <br></br><br></br>

   <span id="pass">Password :{password} </span>
    <br></br>

    <input type="password" 
    autoComplete="off" placeholder='exce;r222' required id="password"/>
    <br></br>

    <a href="./SignUp.js">
    <span className='forgotpass'>Forgot your password?</span>
    </a>
    <br></br>
    <button type="submit" id="submitbtn">login</button>
    <br></br><br></br>

    <span id="register">Don't have an account? <a href='./SignUp.js'>
    Sign Up </a>
    </span>
    </div>



    <div></div>

    </div>
  )
}


