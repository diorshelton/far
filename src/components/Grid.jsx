import React from "react";
import styled from "styled-components";
import Card from "./Card";

const StyledGrid = styled.div`
	.container {
		background-color: #cea37d;
		display: grid;

	}
	.contents {
    display: grid;
    justify-items: center;
    @media screen and (min-width: 530px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1300px) {
      grid-template-columns: repeat(4, 1fr);
    }
	}
`;

const Grid = ({ data }) => {
	return (
		<StyledGrid>
			<div className="container">
				<main className="contents">
				<Card body={data} key={data.id}></Card>
				</main>
			</div>
		</StyledGrid>
	);
};

export default Grid;
