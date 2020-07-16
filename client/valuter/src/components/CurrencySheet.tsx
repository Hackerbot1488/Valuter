import React, { MouseEvent, useContext, useEffect, useState } from "react";
import { Sheet } from "./Sheet";
import { showLoader, hideLoader, setValutes } from "../redux/actions";
import { connect } from "react-redux";
import { QueryContext } from "../context/context";
import CourseCurrency from "./CourseCurrency";

const CurrencySheet: React.FC = (props: any) => {
	const { app, showLoader, hideLoader, setValutes } = props;
	const { theme } = app;
	const [date, setDate] = useState<"today" | "yesterday">("today");
	const { fetchQuery } = useContext(QueryContext);
	async function clickHandler(e: MouseEvent<HTMLButtonElement>) {
		e.persist();
		showLoader();
		const data = await fetchQuery();
		setValutes(data);
		hideLoader();
	}
	useEffect(() => {
		showLoader();
		fetchQuery().then((data) => {
			setValutes(data);
			hideLoader();
		});
	}, []);
	return (
		<div className="sheet-currency">
			<Sheet classes={["sheet-height"]}>
				<div className="sheet-buttons">
					<button
						className={`left-sheet-button ${theme === "dark" ? "dark" : ""}`}
						onClick={() => setDate("yesterday")}
					>
						Yesterday
					</button>
					<button
						className={`right-sheet-button ${theme === "dark" ? "dark" : ""}`}
						onClick={() => setDate("today")}
					>
						Today
					</button>
				</div>
				<CourseCurrency date={date} />
				<div className="sheet-buttons">
					<button
						className={`update-button ${theme === "dark" ? "dark" : ""}`}
						onClick={clickHandler}
					>
						Update
					</button>
				</div>
			</Sheet>
		</div>
	);
};
const mapDispatchToProps = {
	showLoader,
	hideLoader,
	setValutes,
};

const mapStateToProps = (state: any) => {
	return {
		app: state.app,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(CurrencySheet);
