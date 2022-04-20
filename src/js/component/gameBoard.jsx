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

	let playerTurn = [];
	let iconOrder = [];
	let count = 1;

	if (props.playerStart === "player1") {
		playerTurn = [props.player1, props.player2];
		iconOrder = ["X", "O"];
	} else {
		playerTurn = [props.player2, props.player1];
		iconOrder = ["O", "X"];
	}

	function iconTurn() {
		if (count % 2 != 0) {
			count++;
			return iconOrder[0];
		} else {
			count++;
			return iconOrder[1];
		}
	}

	function board() {
		return (
			<div className="container">
				<div className="row rowTop mx-auto">
					<div
						className="col colLeft"
						onClick={() => (p1 === "" ? setP1(iconTurn()) : p1)}>
						{p1}
					</div>
					<div
						className="col colCenter"
						onClick={() => (p2 === "" ? setP2(iconTurn()) : p2)}>
						{p2}
					</div>
					<div
						className="col colRight"
						onClick={() => (p3 === "" ? setP3(iconTurn()) : p3)}>
						{p3}
					</div>
				</div>
				<div className="row rowCenter mx-auto">
					<div
						className="col colLeft"
						onClick={() => (p4 === "" ? setP4(iconTurn()) : p4)}>
						{p4}
					</div>
					<div
						className="col colCenter"
						onClick={() => (p5 === "" ? setP5(iconTurn()) : p5)}>
						{p5}
					</div>
					<div
						className="col colRight"
						onClick={() => (p6 === "" ? setP6(iconTurn()) : p6)}>
						{p6}
					</div>
				</div>
				<div className="row rowBottom mx-auto">
					<div
						className="col colLeft"
						onClick={() => (p7 === "" ? setP7(iconTurn()) : p7)}>
						{p7}
					</div>
					<div
						className="col colCenter"
						onClick={() => (p8 === "" ? setP8(iconTurn()) : p8)}>
						{p8}
					</div>
					<div
						className="col colRight"
						onClick={() => (p9 === "" ? setP9(iconTurn()) : p9)}>
						{p9}
					</div>
				</div>
			</div>
		);
	}

	return <>{board()}</>;
};

export default GameBoard;
