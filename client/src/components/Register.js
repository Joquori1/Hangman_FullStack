import React from 'react';
import { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom'
import Axios from "axios";
//import bcrypt from 'bcryptjs';


import '../Hangman.css';


function Register(user) {
//  const history = useNavigate() 
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState('')  
  const [username, setUsername] = useState("");  //state variables
  const [email, setEmail] = useState('')    //state variables
  const [password, setPassword] = useState('')  //state variables


// async function registerUser(event) { //front communicate with backend

//   event.preventDefault()        //No return to startpage
//   const response = await fetch('http://localhost:3001/register', {
//     method: 'POST',   
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       name, 
//       email, 
//       password,
//     }),
//    });

//    const data = await response.json()
   
//    if(data.status === 'ok') {
//     history.push('/login');
//    }

// }



useEffect(() => {
  Axios.get("http://localhost:3001/getUsers").then((response) => {
    setListOfUsers(response.data);
  });
}, []);

const register = () => {
  Axios.post("http://localhost:3001/register", {
    name,
    username,
    email,
    password,
  }).then((response) => {
    setListOfUsers([
      ...listOfUsers,
      {
        name,
        username,
        email,
        password,
        
      },
    ]);
  });
};


  return (
<>
     <div class="register">
      <h1 class="reg">Sign Up</h1>
      <div class="sign">Already have an account ?<a href="/login" target="_blank"> Sign in</a>
    </div>
      <form class="registered" onSubmit={register}> 
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name"/>
      <br />
      <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username"/>
      <br />
      <input  value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>
      <br />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
      <br /> 
      <div>
      <button type="submit"  onClick={register} > Register </button>
      </div>
      </form>
     </div>
     </>
  );
}

export default Register;
