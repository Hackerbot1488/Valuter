import React from "react";
import { Switch, Route } from "react-router-dom";
import { NotFound } from "../pages/404";
import { About } from "../pages/About";
import { Currency } from "../pages/Currency";

export const Router: React.FC = () => {
	return (
		<Switch>
			<Route component={Currency} path="/" exact />
			<Route component={About} path="/about" exact />
			<Route component={NotFound} path="*" />
		</Switch>
	);
};
