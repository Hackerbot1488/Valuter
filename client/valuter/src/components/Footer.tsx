import React from "react";
import { useSelector } from "react-redux";

export const Footer = () => {
	const theme = useSelector((state: any) => state.app.theme);
	return (
		<div className={`footer-container ${theme === "dark" ? "dark" : ""}`}></div>
	);
};
