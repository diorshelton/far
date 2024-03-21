import Reset from "../Reset";
import Nav from "./Nav";
import styled from "styled-components";

const StyledLayout = styled.Layout``;

const Layout = ({ children }) => {
	return (
		<StyledLayout>
			<>
				<Reset />
				<header>
					<Nav></Nav>
				</header>
				<main>{children}</main>
			</>
		</StyledLayout>
	);
};

export default Layout;
