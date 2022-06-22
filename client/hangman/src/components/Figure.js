import React from "react";

const Figure = ({ wrongLetters }) => {
	const errors = wrongLetters.length; //removed => put it back! .length, no errors now, not sure why, look later!!

	return (
		<div className="svg-game-container">
			{/* factor of 1.5 to all numbers */}
			<svg height="375" width="300" className="figure-container">
				{/* <!-- Rod --> */}
				<line x1="90" y1="30" x2="210" y2="30" />
				<line x1="210" y1="30" x2="210" y2="75" />
				<line x1="90" y1="30" x2="90" y2="345" />
				<line x1="30" y1="345" x2="150" y2="345" />

				{/* <!-- Head --> */}
				{errors > 0 && <circle cx="210" cy="105" r="30" />}
				{/* <!-- Body --> */}
				{errors > 1 && <line x1="210" y1="135" x2="210" y2="225" />}
				{/* <!-- Arms --> */}
				{errors > 2 && <line x1="210" y1="180" x2="180" y2="150" />}
				{errors > 3 && <line x1="210" y1="180" x2="240" y2="150" />}
				{/* <!-- Legs --> */}
				{errors > 4 && <line x1="210" y1="225" x2="180" y2="270" />}
				{errors > 5 && <line x1="210" y1="225" x2="240" y2="270" />}
			</svg>
		</div>
	);
};

export default Figure;
