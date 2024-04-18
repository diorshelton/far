import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card.jsx";
import Layout from "./components/Layout";
import Grid from "./components/Grid.jsx";
import Button from "./components/Button.jsx";
import Pagination from "./components/Pagination.jsx";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("https://api.le-systeme-solaire.net/rest/bodies/")
			.then((response) => {
				setData(response.data.bodies);
			})
			.catch((error) => {
				console.log(error)
			});
	}, []);

	return (
		<>
			<Layout>
				<Button bodyType={"All Celestial Bodies"}></Button>
				<Button bodyType={"Planet"}></Button>
				<Button bodyType={"Dwarf Planet"}></Button>
				<Button bodyType={"Moon"}></Button>
				<Button bodyType={"Asteroid"}></Button>
				<Button bodyType={"Comet"}></Button>
				<Pagination data={data}></Pagination>
				<Grid>
					<Card body={data} key={data.id}></Card>
				</Grid>
			</Layout>
		</>
	);
}

export default App;
