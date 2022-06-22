import React from 'react';
//import Hangman from './components/Hangman';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
//import ReactDOM from 'react-dom/client';

import '../index.css';


function Register() {
  const history = useNavigate() 
  const [name, setName] = useState('')    //state variables
  const [email, setEmail] = useState('')    //state variables
  const [password, setPassword] = useState('')  //state variables


async function registerUser(event) { //front communicate with backend

  event.preventDefault()        //No return to startpage
  const response = await fetch('http://localhost:3000/register', {
    method: 'POST',   
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name, 
      email, 
      password,
    }),
   });

   const data = await response.json()
   
   if(data.status === 'ok') {
    history.push('/login');
   }

}


  return (

     <div class="register">
      <h1 class="reg">Sign Up</h1>
      <form class="registered" onSubmit={registerUser}> 
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name"/>
      <br />
      <input  value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>
      <br />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
      <br /> 
      <input type="submit" value="Signup"/>
      </form>
     </div>
  );
}

export default Register;
