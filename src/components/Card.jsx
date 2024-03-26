import React from "react";
import styled from "styled-components";
import { bodies } from "../mockData/mockData";

const StyledCard = styled.article``;

console.log(bodies);

const Card = ({ data, bodyName, bodyType, volume, density, mass}) => {
	return (
		<StyledCard>
			<article className="card">
				<h2 className="cardName">{bodyName}</h2>
				<div className="specifications">
					<p className="body-type">{bodyType}</p>
					<p className="volume">{volume}</p>
					<p className="density">{density}</p>
					<p className="mass">{mass}</p>
				</div>
			</article>
		</StyledCard>
	);
};

export default Card;
