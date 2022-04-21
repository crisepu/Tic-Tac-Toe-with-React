import PropTypes from "prop-types";
import React, { useState } from "react";

//create your first component
const GameBoard = (props) => {
	const [p1, setP1] = useState("");
	const [p2, setP2] = useState("");
	const [p3, setP3] = useState("");
	const [p4, setP4] = useState("");
	const [p5, setP5] = useState("");
	const [p6, setP6] = useState("");
	const [p7, setP7] = useState("");
	const [p8, setP8] = useState("");
	const [p9, setP9] = useState("");
	const [counter, setCounter] = useState(1);
	const [winnerFlag, setWinnerFlag] = useState(false);
	let positions = [p1, p2, p3, p4, p5, p6, p7, p8, p9];

	let playerOrder = [];
	let iconOrder = [];

	if (props.playerStart === "player1") {
		playerOrder = [props.player1, props.player2];
		iconOrder = ["X", "O"];
	} else {
		playerOrder = [props.player2, props.player1];
		iconOrder = ["O", "X"];
	}

	function iconTurn() {
		if (counter % 2 != 0) {
			setCounter(counter + 1);
			return iconOrder[0];
		} else {
			setCounter(counter + 1);
			return iconOrder[1];
		}
	}

	function playerTurn(count) {
		if (count % 2 != 0) {
			return playerOrder[0];
		} else {
			return playerOrder[1];
		}
	}

	function thereIsAWinner(pos) {
		if (
			(pos[0] == pos[1] && pos[1] == pos[2] && pos[2] != "") ||
			(pos[3] == pos[4] && pos[4] == pos[5] && pos[5] != "") ||
			(pos[6] == pos[7] && pos[7] == pos[8] && pos[8] != "") ||
			(pos[0] == pos[4] && pos[4] == pos[8] && pos[8] != "") ||
			(pos[2] == pos[4] && pos[4] == pos[6] && pos[6] != "") ||
			(pos[0] == pos[3] && pos[3] == pos[6] && pos[6] != "") ||
			(pos[1] == pos[4] && pos[4] == pos[7] && pos[7] != "") ||
			(pos[2] == pos[5] && pos[5] == pos[8] && pos[8] != "")
		) {
			return true;
		} else {
			return false;
		}
	}

	function board(pos) {
		return (
			<div className="container">
				<div className="row rowTop mx-auto">
					<div
						className="col colLeft"
						onClick={() => {
							if (pos[0] === "" && !winnerFlag) {
								setP1(iconTurn());
							}
							if (thereIsAWinner(pos)) {
								setWinnerFlag(true);
							}
						}}>
						<h1 className="iconBoard">{pos[0]}</h1>
					</div>
					<div
						className="col colCenter"
						onClick={() => {
							if (pos[1] === "" && !winnerFlag) {
								setP2(iconTurn());
							}
							if (thereIsAWinner(pos)) {
								setWinnerFlag(true);
							}
						}}>
						<h1 className="iconBoard">{pos[1]}</h1>
					</div>
					<div
						className="col colRight"
						onClick={() => {
							if (pos[2] === "" && !winnerFlag) {
								setP3(iconTurn());
							}
							if (thereIsAWinner(pos)) {
								setWinnerFlag(true);
							}
						}}>
						<h1 className="iconBoard">{pos[2]}</h1>
					</div>
				</div>
				<div className="row rowCenter mx-auto">
					<div
						className="col colLeft"
						onClick={() => {
							if (pos[3] === "" && !winnerFlag) {
								setP4(iconTurn());
							}
							if (thereIsAWinner(pos)) {
								setWinnerFlag(true);
							}
						}}>
						<h1 className="iconBoard">{pos[3]}</h1>
					</div>
					<div
						className="col colCenter"
						onClick={() => {
							if (pos[4] === "" && !winnerFlag) {
								setP5(iconTurn());
							}
							if (thereIsAWinner(pos)) {
								setWinnerFlag(true);
							}
						}}>
						<h1 className="iconBoard">{pos[4]}</h1>
					</div>
					<div
						className="col colRight"
						onClick={() => {
							if (pos[5] === "" && !winnerFlag) {
								setP6(iconTurn());
							}
							if (thereIsAWinner(pos)) {
								setWinnerFlag(true);
							}
						}}>
						<h1 className="iconBoard">{pos[5]}</h1>
					</div>
				</div>
				<div className="row rowBottom mx-auto">
					<div
						className="col colLeft"
						onClick={() => {
							if (pos[6] === "" && !winnerFlag) {
								setP7(iconTurn());
							}
							if (thereIsAWinner(pos)) {
								setWinnerFlag(true);
							}
						}}>
						<h1 className="iconBoard">{pos[6]}</h1>
					</div>
					<div
						className="col colCenter"
						onClick={() => {
							if (pos[7] === "" && !winnerFlag) {
								setP8(iconTurn());
							}
							if (thereIsAWinner(pos)) {
								setWinnerFlag(true);
							}
						}}>
						<h1 className="iconBoard">{pos[7]}</h1>
					</div>
					<div
						className="col colRight"
						onClick={() => {
							if (pos[8] === "" && !winnerFlag) {
								setP9(iconTurn());
							}
							if (thereIsAWinner(pos)) {
								setWinnerFlag(true);
							}
						}}>
						<h1 className="iconBoard">{pos[8]}</h1>
					</div>
				</div>
			</div>
		);
	}
	console.log(thereIsAWinner(positions));
	if (thereIsAWinner(positions)) {
		return (
			<>
				<h2 className="title2">
					{playerTurn(counter - 1)} you are the winner!!!!
				</h2>
				{board(positions)}
			</>
		);
	} else {
		return (
			<>
				<h2 className="title2">{playerTurn(counter)} is you turn!</h2>
				{board(positions)}
			</>
		);
	}
};

export default GameBoard;
