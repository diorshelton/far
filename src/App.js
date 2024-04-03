import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card.jsx";
import Layout from "./components/Layout";
import {bodies} from "./mockData/mockData.js"
import Grid from "./components/Grid.jsx";

function App() {
	// const [data, setData] = useState([]);

	// useEffect(() => {
	// 	axios
	// 		.get("https://api.le-systeme-solaire.net/rest/bodies/")
	// 		.then((response) => {
	// 			setData(response.data.bodies);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// }, []);
	return (
		<>
			<Layout>

				<Grid>
					<Card
						bodyName={bodies[0].englishName}
						bodyType={bodies[0].bodyType}
						volume={bodies[0].v}
						density={bodies[0].density}
						mass={bodies[0].mass.massValue}
						massExponent={bodies[0].mass.massExponent}
					/>
					<Card
						bodyName={bodies[1].englishName}
						bodyType={bodies[1].bodyType}
						volume={bodies[1].v}
						density={bodies[1].density}
						mass={bodies[1].mass.massValue}
						massExponent={bodies[1].mass.massExponent}
					/>
					<Card
						bodyName={bodies[2].englishName}
						bodyType={bodies[2].bodyType}
						volume={bodies[2].v}
						density={bodies[2].density}
						mass={bodies[2].mass.massValue}
						massExponent={bodies[2].mass.massExponent}
					/>{" "}
					<Card
						bodyName={bodies[3].englishName}
						bodyType={bodies[3].bodyType}
						volume={bodies[3].v}
						density={bodies[3].density}
						mass={bodies[3].mass.massValue}
						massExponent={bodies[3].mass.massExponent}
					/>
				</Grid>
			</Layout>
		</>
	);
}

export default App;
