import React from 'react'
import { NavLink } from 'react-router-dom';
import "./navbar.css";


function Navbar() {
    return(
        <div>
        <nav>
      <h1>
        <NavLink activeClassName="active" to="/"><i></i>HANGMAN</NavLink>
      </h1>
      <ul>
        <li><NavLink activeClassName="active" to="/register">Sign up</NavLink></li> 
         <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
         <li><NavLink activeClassName="active" to="/hangman">Hangman</NavLink></li>
      </ul>
    </nav> 
    </div>  
    )
}

export default Navbar;