import React, { useState } from "react";

//create your first component
const SelectPlayer = () => {
	const [player, setPlayer] = useState("");

	return (
		<>
			<h2 className="title2">Pick a Weapon</h2>;
		</>
	);
};

export default SelectPlayer;
