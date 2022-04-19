import React, { useState } from "react";

//create your first component
const SelectPlayer = () => {
	const [player, setPlayer] = useState("");

	return (
		<>
			<h2 className="title2">Pick a Weapon</h2>
			<div className="startingDiv">
				<h3 className="title3">CHOOSE YOUR WEAPON</h3>
				<input type="text" placeholder="Player 1 username" />
				<input type="text" placeholder="Player 2 username" />
				<div>
					<button className="icon">
						<h1 className="iconX">X</h1>
					</button>
					<button className="icon">
						<h1 className="iconO">O</h1>
					</button>
				</div>
			</div>
		</>
	);
};

export default SelectPlayer;
