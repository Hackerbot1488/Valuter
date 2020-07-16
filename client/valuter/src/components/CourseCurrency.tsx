import React from "react";
import { connect } from "react-redux";
import { toFixed } from "../helpers/toFixed";
import { Loader } from "./Loader";
interface courseProps {
	children?: React.ReactNode;
	app?: any;
	date: string;
}
const CourseCurrency: React.FC<courseProps> = (props) => {
	const { app, date } = props;
	const { loading, from, valutes, to, theme } = app;
	if (loading) {
		console.log("lol");
		return <Loader />;
	}
	function currentCourse(): number {
		let current = 0;
		if (date === "today") {
			current = valutes[from]?.Value / valutes[to]?.Value;
		} else {
			current = valutes[from]?.Previous / valutes[to]?.Previous;
		}
		if (!current) {
			return 0;
		}
		return toFixed(current);
	}
	return (
		<div className={`sheet-content ${theme === "dark" ? "dark" : ""}`}>
			{currentCourse()}
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		app: state.app,
	};
};

export default connect(mapStateToProps, null)(CourseCurrency);
