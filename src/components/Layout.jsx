import Reset from "../styles/Reset";
import Nav from "./Nav";

const Layout = ({ children }) => {
	return (
		<>
			<Reset />
			<header>
				<Nav />
			</header>
			<main>{children}</main>
		</>
	);
};

export default Layout;
