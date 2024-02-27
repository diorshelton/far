import React from "react";
import styles from "../header/styles/header.module.css";

const Header = () => {
	return (
		<div className={styles.nav}>
			<h1 className={styles.h1}>Solar System</h1>
		</div>
	);
};

export default Header;