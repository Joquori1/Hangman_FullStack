import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import { showNotification as show, checkWin } from "./helpers/helpers";

import "./App.css";

// add an api to mongo db, after app is working
const words = [
	"node",
	"app",
	"banana",
	"boolean",
	"apple",
	"java",
	"pro",
	"orange",
	"wizard",
	"cold",
	"javascript",
	"code",
	"regex",
];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
	const [playable, setPlayable] = useState(true);
	const [correctLetters, setCorrectLetters] = useState([]);
	const [wrongLetters, setWrongLetters] = useState([]);
	const [showNotification, setShowNotification] = useState(false);

	useEffect(() => {
		const handleKeydown = (event) => {
			const { key, keyCode } = event;

			//maybe, change back to regex
			if (playable && keyCode >= 65 && keyCode <= 90) {
				const letter = key.toLowerCase();
				if (selectedWord.includes(letter)) {
					if (!correctLetters.includes(letter)) {
						setCorrectLetters((currentLetters) => [
							...currentLetters,
							letter,
						]);
					} else {
						show(setShowNotification);
					}
				} else {
					if (!wrongLetters.includes(letter)) {
						setWrongLetters((currentLetters) => [
							...currentLetters,
							letter,
						]);
					} else {
						show(setShowNotification);
					}
				}
			}
		};
		window.addEventListener("keydown", handleKeydown);

		return () => window.removeEventListener("keydown", handleKeydown);
	}, [correctLetters, wrongLetters, playable]);

	function playAgain() {
		setPlayable(true);

		// Empty Arrays
		setCorrectLetters([]);
		setWrongLetters([]);

		const random = Math.floor(Math.random() * words.length);
		selectedWord = words[random];
	}

	/// uuggggggg go BACK -  RELOOK at wrong letters, SOMETHING F'D UP!!!
	// ...spelling, fixed!!
	return (
		<>
			<Header />
			<div className="game-container">
				<Figure wrongLetters={wrongLetters} />
				<WrongLetters wrongLetters={wrongLetters} />
				<Word
					selectedWord={selectedWord}
					correctLetters={correctLetters}
				/>
			</div>
			<Popup
				correctLetters={correctLetters}
				wrongLetters={wrongLetters}
				selectedWord={selectedWord}
				setPlayable={setPlayable}
				playAgain={playAgain}
			/>
			<Notification showNotification={showNotification} />
		</>
	);
}

export default App;
