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

	if (props.playerStart == "player1") {
		let playerTurn = [props.player1, props.player2];
		let iconTurn = ["X", "O"]
	}else {
		let playerTurn = [props.player2, props.player1];
		let iconTurn = ["O", "X"]
	}



	

	function board() {
		return (
			<div className="container">
				<div className="row rowTop mx-auto">
					<div className="col colLeft">{p1}</div>
					<div className="col colCenter">{p2}</div>
					<div className="col colRight">{p3}</div>
				</div>
				<div className="row rowCenter mx-auto">
					<div className="col colLeft">{p4}</div>
					<div className="col colCenter">{p5}</div>
					<div className="col colRight">{p6}</div>
				</div>
				<div className="row rowBottom mx-auto">
					<div className="col colLeft">{p7}</div>
					<div className="col colCenter">{p8}</div>
					<div className="col colRight">{p9}</div>
				</div>
			</div>
		);
	}

	return <>{board()}</>;
};

export default GameBoard;
