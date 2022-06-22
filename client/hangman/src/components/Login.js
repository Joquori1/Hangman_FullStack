import React from 'react';
import { useState } from 'react';

import './login.css';


function Login() {
  const [email, setEmail] = useState('');    //state variables
  const [password, setPassword] = useState('');  //state variables


async function loginUser(event) { //front communicate with backend

  event.preventDefault()        //No return to startpage
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',   
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      email, 
      password,
    }),
   });

   const data = await response.json()

 if(data.user) { 
  localStorage.setItem('token', data.user)            //jwt
  alert('Login successful')
  window.location.href = '/hangman'
 } else {
      alert('Please check your username and password')
 }

}


  return (


     <div class="login">
      <h1 class="log">Login</h1>
      <form  class="logform" onSubmit={loginUser}> 
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>
      <br />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
      <br /> 
      <input type="submit" value="Login" />
      </form>
     </div>
  );
}

export default Login;
