import React from "react";
import { useSelector } from "react-redux";

export const Loader = () => {
	const theme = useSelector((state: any) => state.app.any);
	return (
		<div className={`wrap-loader ${theme === "dark" ? "dark" : ""}`}>
			<div className="spinner-border text-light" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
};
