import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Hangman.css';


function Navbar() {
    return(
        <div class="navbar">
       
      <h1 class="hometext">
      HANGMAN
      </h1>
      <ul>
        <li><NavLink activeClassName="active" to="/register">Register</NavLink></li> 
         <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
         <li><NavLink activeClassName="active" to="/players">Players</NavLink></li>
      </ul>
  
    </div>  
    )
}

export default Navbar;