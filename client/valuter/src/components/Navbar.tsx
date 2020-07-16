import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
	const theme = useSelector((state: any) => state.app.theme);
	return (
		<nav
			className={`navbar ${
				theme === "dark" ? "dark" : ""
			} navbar-expand-lg navbar-light bg-light`}
		>
			<NavLink
				className={`navbar-brand ${theme === "dark" ? "dark" : ""}`}
				to="/"
			>
				Valuter
			</NavLink>
			<div className="spacer"></div>
			<div className="collapse navbar-collapse disable-grow" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<NavLink
							className={`nav-link ${theme === "dark" ? "dark" : ""}`}
							exact
							to="/"
						>
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							className={`nav-link ${theme === "dark" ? "dark" : ""}`}
							exact
							to="/about"
						>
							About
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};
