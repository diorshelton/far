import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card.jsx";
import Layout from "./components/Layout";
import {bodies} from "./mockData/mockData.js"

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
				<Card bodyName={bodies[0].name} bodyType={bodies[0].bodyType} volume={bodies[0].volume} density={bodies[0].density} mass={bodies[0].mass}
				/>
				{/* {bodies.map(body =>
					<Card key={body.id} bodyName={body.englishName}
						bodyType={body.bodyType}
						volume={body.vol}
						density={body.density}
						mass={body.mass}
					>
					</Card>
				)} */}
			</Layout>
		</>
	);
}

export default App;
