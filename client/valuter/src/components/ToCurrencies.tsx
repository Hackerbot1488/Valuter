import React, { ChangeEvent, useState } from "react";
import { connect } from "react-redux";
import { setTo } from "../redux/actions";
import { Loader } from "./Loader";

const ToCurrencies = (props: any) => {
	const { changeTo, app } = props;
	const { valutes, to: toState, loading } = app;
	const [to, setTo] = useState([toState]);
	function clickHandlerTo(e: ChangeEvent<HTMLSelectElement>): void {
		e.persist();
		const value: string = e.target.value;
		setTo(() => [value]);
		changeTo(value);
	}
	if (loading) {
		return <Loader />;
	}
	return (
		<select
			multiple
			className="currency-list select-currency"
			value={to}
			onChange={clickHandlerTo}
		>
			{Object.entries(valutes).map(([key, val]: any, index: number) => {
				const color =
					val.Value > val.Previous
						? "up"
						: val.Value < val.Previous
						? "down"
						: "common";
				return (
					<option
						value={val.CharCode}
						key={key + index + key}
						className={`block ${color}`}
					>
						{val.CharCode}
					</option>
				);
			})}
		</select>
	);
};
const mapDispatchToProps = {
	changeTo: setTo,
};

const mapStateToProps = (state: any) => {
	return {
		app: state.app,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ToCurrencies);
