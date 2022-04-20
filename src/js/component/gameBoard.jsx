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

	let playerOrder = [];
	let iconOrder = [];

	if (props.playerStart === "player1") {
		playerOrder = [props.player1, props.player2];
		iconOrder = ["X", "O"];
	} else {
		playerOrder = [props.player2, props.player1];
		iconOrder = ["O", "X"];
	}
	console.log(playerOrder);
	function iconTurn() {
		if (counter % 2 != 0) {
			setCounter(counter + 1);
			return iconOrder[0];
		} else {
			setCounter(counter + 1);
			return iconOrder[1];
		}
	}

	function playerTurn() {
		if (counter % 2 != 0) {
			return playerOrder[0];
		} else {
			return playerOrder[1];
		}
	}

	function board() {
		return (
			<div className="container">
				<div className="row rowTop mx-auto">
					<div
						className="col colLeft"
						onClick={() => (p1 === "" ? setP1(iconTurn()) : p1)}>
						<h1 className="iconBoard">{p1}</h1>
					</div>
					<div
						className="col colCenter"
						onClick={() => (p2 === "" ? setP2(iconTurn()) : p2)}>
						<h1 className="iconBoard">{p2}</h1>
					</div>
					<div
						className="col colRight"
						onClick={() => (p3 === "" ? setP3(iconTurn()) : p3)}>
						<h1 className="iconBoard">{p3}</h1>
					</div>
				</div>
				<div className="row rowCenter mx-auto">
					<div
						className="col colLeft"
						onClick={() => (p4 === "" ? setP4(iconTurn()) : p4)}>
						<h1 className="iconBoard">{p4}</h1>
					</div>
					<div
						className="col colCenter"
						onClick={() => (p5 === "" ? setP5(iconTurn()) : p5)}>
						<h1 className="iconBoard">{p5}</h1>
					</div>
					<div
						className="col colRight"
						onClick={() => (p6 === "" ? setP6(iconTurn()) : p6)}>
						<h1 className="iconBoard">{p6}</h1>
					</div>
				</div>
				<div className="row rowBottom mx-auto">
					<div
						className="col colLeft"
						onClick={() => (p7 === "" ? setP7(iconTurn()) : p7)}>
						<h1 className="iconBoard">{p7}</h1>
					</div>
					<div
						className="col colCenter"
						onClick={() => (p8 === "" ? setP8(iconTurn()) : p8)}>
						<h1 className="iconBoard">{p8}</h1>
					</div>
					<div
						className="col colRight"
						onClick={() => (p9 === "" ? setP9(iconTurn()) : p9)}>
						<h1 className="iconBoard">{p9}</h1>
					</div>
				</div>
			</div>
		);
	}

	return <>{board()}</>;
};

export default GameBoard;
