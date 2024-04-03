import React from "react";
import styled from "styled-components";

const StyledGrid = styled.div`
	.container {
		background-color: #cea37d;
		display: grid;
		place-items: center;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
    
	}
	.contents {
		/* justify-self: center; */
	}
`;

const Grid = ({ children }) => {
	return (
		<StyledGrid>
			<div className="container">
				<main className="contents">{children}</main>
			</div>
		</StyledGrid>
	);
};

export default Grid;
