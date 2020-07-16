import React from "react";
import { useSelector } from "react-redux";

export const About = () => {
	const theme = useSelector((state: any) => state.app.theme);
	return (
		<div className={`about ${theme === "dark" ? "dark" : ""}`}>
			<h1>About page</h1>
			{/* <div className="about-button about-delay">
				<span className="about-quotetion">?</span>
			</div> */}
		</div>
	);
};
