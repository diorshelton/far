import React from 'react';
import styled from 'styled-components';
import navImage from '../assets/ssd_banner.png'

const StyledNav = styled.nav`
	.nav {
		display: flex;
		justify-content: center;
		background-image: url(${navImage});
	}

	h1 {
		color: rgb(245, 242, 242);
		align-self: center;
		font-weight: 200;
		font-size: 3rem;
	}
`;

const Nav = () => {
  return (
		<StyledNav>
			<div className="nav">
				{/* <img src={navImage} alt="banner"/> */}
        <h1 className="h1">Solar System</h1>
			</div>
		</StyledNav>
	);
};

export default Nav