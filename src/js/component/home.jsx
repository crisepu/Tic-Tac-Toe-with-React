import React from "react";
import SelectPlayer from "./selectPlayer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<h1 className="title1">Tic Tac Toe in React.js</h1>;
			<SelectPlayer />
		</>
	);
};

export default Home;
