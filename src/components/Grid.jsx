import React from "react";
import styled from "styled-components";

const StyledGrid = styled.div`
	.container {
		background-color: #cea37d;
		display: grid;
		/* place-items: center; */
		/* grid-template-columns: repeat(3, 1fr); */
    /* align-items: center; */
	}
	.contents {
    display: grid;
		/* place-content: center; */
    /* align-items: center; */
    justify-items: center;
    @media screen and (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    }
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
