import React, { ChangeEvent, useState } from "react";
import { connect } from "react-redux";
import { setFrom } from "../redux/actions";
import { Loader } from "./Loader";

const FromCurrencies = (props: any) => {
	const { app, changeFrom } = props;
	const { valutes, from: fromProp, loading } = app;
	const [from, setFrom] = useState([fromProp]);
	function clickHandlerFrom(e: ChangeEvent<HTMLSelectElement>): void {
		e.persist();
		const value: string = e.target.value;
		setFrom(() => [value]);
		changeFrom(value);
	}
	if (loading) {
		return <Loader />;
	}
	return (
		<select
			multiple
			className="currency-list select-currency"
			value={from}
			onChange={clickHandlerFrom}
		>
			{/* <option className="block down" value="EUR">
				EUR
			</option>
			<option className="block common" value="RUB">
				RUB
			</option>
			<option className="block up" value="USD">
				USD
			</option>
			<option className="block down" value="KIL">
				KIL
			</option>
			<option className="block common" value="LOK">
				LOK
			</option>
			<option className="block down" value="KEN">
				KEN
			</option>
			<option className="block up" value="DAV">
				DAV
			</option>
			<option className="block common" value="PUG">
				PUG
			</option>
			<option className="block down" value="NOD">
				NOD
			</option> */}
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
						key={key + index}
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
	changeFrom: setFrom,
};

const mapStateToProps = (state: any) => {
	return {
		app: state.app,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FromCurrencies);
