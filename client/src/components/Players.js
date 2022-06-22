import React from 'react'
//import { Navigate } from "react-router-dom";
import cool from "./images/coolguy.png";
import sassy from "./images/sassygirl.png";
import nerd from "./images/nerdo.png";
import cat from "./images/18.png";
import fisher from "./images/19.png";

import '../Hangman.css';

function Players() {

	return (
		<>

<div class='imageAlign' > 
<h1 class="allPlayers">Select Your Player</h1>
			<div class="imageColumn"> <a href="/hangman" target="_blank" > <img src={cool} className="coolguy" alt="coolguy" /> </a> </div>
			<div class="imageColumn"> <a href="/hangman" target="_blank" > <img src={sassy} className="coolguy" alt="sassygirl" /> </a> </div>
			<div class="imageColumn"> <a href="/hangman" target="_blank" > <img src={nerd} className="coolguy" alt="nerdo" /> </a> </div>
			<div class="imageColumn"> <a href="/hangman" target="_blank" > <img src={cat} className="coolguy" alt="catgirl" /> </a> </div>
			<div class="imageColumn"> <a href="/hangman" target="_blank" > <img src={fisher} className="coolguy" alt="fisherbob" /> </a> </div>
		</div>
		</>
	)
}

export default Players
