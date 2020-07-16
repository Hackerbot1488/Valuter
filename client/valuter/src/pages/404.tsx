import React from "react";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
	return (
		<div className="mt-5">
			<h1 className="center">Page was not found</h1>
			<h3 className="center">
				<NavLink to="/">Home</NavLink>
			</h3>
		</div>
	);
};
