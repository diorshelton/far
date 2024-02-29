import styled from 'styled-components';
import banner from '../assets/ssd_banner.png'
const StyledNav = styled.nav`
	.nav {
		display: flex;
		background-image: url("../../assets/ssd_banner.png");
		background-size: cover;
		padding: 0;
	}

	h1 {
		color: rgb(245, 242, 242);
		align-self: center;
		font-weight: 200;
		font-size: 3rem;
	}
`
const Nav = () => {
  return (
		<StyledNav>
			<div className="nav">
        <h1 className="h1">Solar System</h1>
			</div>
		</StyledNav>
	);
};

export default Nav