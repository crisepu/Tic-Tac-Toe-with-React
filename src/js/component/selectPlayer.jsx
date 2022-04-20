import React, { useState } from "react";
import GameBoard from "./gameBoard.jsx";

//create your first component
const SelectPlayer = () => {
	const [player1, setPlayer1] = useState("");
	const [player2, setPlayer2] = useState("");
	const [playerStart, setPlayerStart] = useState("");

	function setPlayers(player1, player2, playerStart) {
		setPlayer1(player1);
		setPlayer2(player2);
		setPlayerStart(playerStart);
	}

	if (player1 === "" || player2 === "") {
		return (
			<>
				<h2 className="title2">Pick a Weapon</h2>
				<div className="startingDiv">
					<h3 className="title3">CHOOSE YOUR WEAPON</h3>
					<input
						id="inputPlayer1"
						type="text"
						placeholder="Player 1 username"
					/>
					<input
						id="inputPlayer2"
						type="text"
						placeholder="Player 2 username"
					/>
					<div>
						<button
							className="icon"
							onClick={() =>
								setPlayers(
									inputPlayer1.value,
									inputPlayer2.value,
									"player1"
								)
							}>
							<h1 className="iconX">X</h1>
						</button>
						<button
							className="icon"
							onClick={() =>
								setPlayers(
									inputPlayer1.value,
									inputPlayer2.value,
									"player2"
								)
							}>
							<h1 className="iconO">O</h1>
						</button>
					</div>
				</div>
			</>
		);
	} else {
		return (
			<GameBoard
				playerStart={playerStart}
				player1={player1}
				player2={player2}
			/>
		);
	}
};

export default SelectPlayer;
