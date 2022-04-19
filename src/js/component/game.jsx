import PropTypes from "prop-types";
import React from "react";
import { useState } from "react/cjs/react.production.min";

//create your first component
const Game = (props) => {
	let gameBoard = ["", "", "", "", "", "", "", "", ""];



	return (
		<>
			<div className="container">
				<div className="row rowTop mx-auto">
					<div className="col colLeft">{gameBoard[0]}</div>
					<div className="col colCenter">{gameBoard[1]}</div>
					<div className="col colRight">{gameBoard[2]}</div>
				</div>
				<div className="row rowCenter mx-auto">
					<div className="col colLeft">{gameBoard[3]}</div>
					<div className="col colCenter">{gameBoard[4]}</div>
					<div className="col colRight">{gameBoard[5]}</div>
				</div>
				<div className="row rowBottom mx-auto">
					<div className="col colLeft">{gameBoard[6]}</div>
					<div className="col colCenter">{gameBoard[7]}</div>
					<div className="col colRight">{gameBoard[8]}</div>
				</div>
			</div>
		</>
	);
};

export default Game;
