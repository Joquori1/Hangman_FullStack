import React from 'react'
//import { Navigate } from "react-router-dom";
import cool from "./images/coolguy.png";
import sassy from "./images/sassygirl.png";
import nerd from "./images/nerdguy.png";
import cat from "./images/18.png";
import fisher from "./images/19.png";

import "../index.css";

function Players() {

	return (
		<>
<div class='imageAlign' > 
			<div class="imageColumn"> <img src={cool} className="coolguy" alt="cool" /> </div>
			<div class="imageColumn"> <img src={sassy} className="coolguy" alt="cool" /> </div>
			<div class="imageColumn"> <img src={nerd} className="coolguy" alt="cool" /> </div>
			<div class="imageColumn"> <img src={cat} className="coolguy" alt="cool" /> </div>
			<div class="imageColumn"> <img src={fisher} className="coolguy" alt="cool" /> </div>
		</div>
		</>
	)
}

export default Players
