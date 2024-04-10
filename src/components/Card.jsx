import React from "react";
import styled from "styled-components";

const StyledCard = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0rem 1rem;
	width: 13rem;
	height: 15.4375rem;
	background: #b8b7b7;
	box-shadow: -17px 16px 8px rgba(0, 0, 0, 0.15);
	border-radius: 0.5rem;
	margin: 1.5rem;
	.bodyName {
		padding-bottom: 1rem;
	}
	.specifications p {
		letter-spacing: .03rem;
		padding-bottom: 0.5rem;
	}
`;

const Card = ({ bodyName, bodyType, volume, density, mass, massExponent }) => {
	return (
		<StyledCard>
			<article className="card">
				<h2 className="bodyName">{bodyName}</h2>
				<div className="specifications">
					<div className="spec-container">
						<p className="body-type">Body Type: {bodyType}</p>
						<p className="volume">Volume: {volume}</p>
						<p className="density">Density: {density}</p>
						<p className="mass">
							Mass: {mass}x10<sup className="mass-exponent">{massExponent}</sup>
							kg
						</p>
					</div>
				</div>
			</article>
		</StyledCard>
	);
};

export default Card;
