import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/actions";

export const ThemeButton = () => {
	const dispatch = useDispatch();
	const theme = useSelector((state: any) => state.app.theme);
	function changeHandler() {
		theme === "light"
			? dispatch(changeTheme("dark"))
			: dispatch(changeTheme("light"));
	}
	return (
		<label className="wrap-checkbox">
			<input
				className="theme-button"
				type="checkbox"
				checked={theme === "dark" ? true : false}
				onChange={changeHandler}
			/>
			<span className="wrap-button"></span>
			<i className="far fa-moon" />
		</label>
	);
};
