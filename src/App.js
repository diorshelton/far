import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card.jsx";
import Layout from "./components/Layout";
import { bodies } from "./mockData/mockData";

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
				{/* Cards go here */}
				{/* {data.map((item) => (
					<p key={item.id}>{item.englishName}</p>
				))} */}
			</Layout>
		</>
	);
}

export default App;
