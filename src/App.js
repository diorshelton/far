import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card.jsx";
import Layout from "./components/Layout";
import Grid from "./components/Grid.jsx";

function App() {
	const [data, setData] = useState([]);
	const [allCelestialBodies, setAllCelestialBodies] = useState([]);
	useEffect(() => {
		axios
			.get("https://api.le-systeme-solaire.net/rest/bodies/")
			.then((response) => {
				setData(response.data.bodies);
				setAllCelestialBodies(response.data.bodies);
			})
			.catch((error) => {});
	}, []);

	const handleClick = (event) => {
		const newList = [...allCelestialBodies];
		let bodyType = event.target.innerHTML;
		if (bodyType === "All Celestial Bodies") {
			return setData(newList);
		}
		setData(newList.filter((item) => item.bodyType === bodyType));
	};

	function Button({ bodyType }) {
		return <button onClick={handleClick}>{bodyType}</button>;
	}

	return (
		<>
			<Layout>
				<Button bodyType={"Moon"} onClick={handleClick}></Button>
				<Button bodyType={"Planet"} onClick={handleClick}></Button>
				<Button bodyType={"Dwarf Planet"} onClick={handleClick}></Button>
				<Button bodyType={"Asteroid"} onClick={handleClick}></Button>
				<Button bodyType={"Comet"} onClick={handleClick}></Button>
				<Button
					bodyType={"All Celestial Bodies"}
					onClick={handleClick}
				></Button>
				<Grid>
					<Card body={data} key={data.id}></Card>
				</Grid>
			</Layout>
		</>
	);
}

export default App;
