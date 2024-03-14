import Reset from "../Reset";
import Nav from "./Nav";

const Layout = ({ children }) => {
	return (
    <>
			<Reset />
			<header>
        <Nav></Nav>
      </header>
			<main>{children}</main>
		</>
	);
};

export default Layout;
