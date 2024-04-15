import React, { createElement } from "react";
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
		letter-spacing: 0.03rem;
		padding-bottom: 0.5rem;
	}
`;

const Card = ({ body }) => {
	const massWithExponent = (data) => {
		console.log(data);
		
		return createElement(
			"p",
			{ className: "mass" },
			`Mass:  ${data.mass.massValue}`,
			createElement(
				"sup",
				{ className: "mass-exponent" },
				`${data.mass.massExponent}`
			)
		);
	};

	return (
		<>
			{body.map((cb) => (
				<StyledCard key={cb.id}>
					<article className="card">
						<h2 className="bodyName">{cb.englishName}</h2>
						<div className="specifications">
							<div className="spec-container">
								<p className="body-type">Body Type: {cb.bodyType}</p>
								<p className="volume">
									Volume: {cb.vol ? cb.vol.volValue : "N/A"}
								</p>
								<p className="density">Density: {cb.density}</p>
								<p className="mass">
									{cb.mass ? massWithExponent(cb) : "N/A"}
								</p>
							</div>
						</div>
					</article>
				</StyledCard>
			))}
		</>
	);
};

export default Card;
