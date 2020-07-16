import React from "react";
import { connect } from "react-redux";
import { Sheet } from "./Sheet";
import FromCurrencies from "./FromCurrencies";
import ToCurrencies from "./ToCurrencies";
const FromToCurrencies: React.FC = (props: any) => {
	const { app } = props;
	const { theme, to, from } = app;
	/* 
		<div className="currency-list list">
			<div className="block up">USD</div>
			<div className="block down">EUR</div>
			<div className="block common">RUB</div>
			<div className="block down"></div>
			<div className="block up"></div>
			<div className="block down"></div>
			<div className="block common"></div>
			<div className="block down"></div>
			<div className="block common"></div>
		</div> 
	*/
	return (
		<div className="sheets-column">
			<Sheet classes={["from-currency"]}>
				<div
					className={`fake-button-up ${theme === "dark" ? "dark" : ""}`}
				>{`From ${from}`}</div>
				<FromCurrencies />
				<div
					className={`fake-button-down ${theme === "dark" ? "dark" : ""}`}
				></div>
			</Sheet>
			<Sheet classes={["to-currency", "mt-40"]}>
				<div
					className={`fake-button-up ${theme === "dark" ? "dark" : ""}`}
				>{`To ${to}`}</div>
				<ToCurrencies />
				<div
					className={`fake-button-down ${theme === "dark" ? "dark" : ""}`}
				></div>
			</Sheet>
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		app: state.app,
	};
};
export default connect(mapStateToProps, null)(FromToCurrencies);
