import React from "react";
import menu from "../assets/menu-vector.svg";
import styles from "../header/styles/header.module.css";

const Header = () => {
	return (
		<div className={styles.nav}>
			<img className={styles.menu} src={menu} alt="banner" />
			<h1 className={styles.h1}>Solar System</h1>
		</div>
	);
};

export default Header;