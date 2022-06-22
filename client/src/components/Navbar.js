import React from 'react'
import { NavLink } from 'react-router-dom';
import "../index.css";


function Navbar() {
    return(
        <div class="navbar">
       
      <h1 class="hometext">
      HANGMAN
      </h1>
      <ul>
        <li><NavLink activeClassName="active" to="/register">Sign up</NavLink></li> 
         <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
         <li><NavLink activeClassName="active" to="/players">Players</NavLink></li>
         <li><NavLink activeClassName="active" to="/hangman">Hangman</NavLink></li>
      </ul>
  
    </div>  
    )
}

export default Navbar;