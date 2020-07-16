import React from "react";
import FromToCurrencies from "../components/FromToCurrencies";
import CurrencySheet from "../components/CurrencySheet";
import { useSelector } from "react-redux";

export const Currency = () => {
	const theme = useSelector((state: any) => state.app.theme);
	return (
		<div className={`currency ${theme === "dark" ? "dark" : ""}`}>
			<CurrencySheet />
			<FromToCurrencies />
		</div>
	);
};
