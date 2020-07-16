import {
	CHANGE_THEME,
	HIDE_LOADER,
	SET_FROM,
	SET_TO,
	SET_VALUTES,
	SHOW_LOADER,
} from "./types";

export const setValutes = (valutes: any) => ({
	type: SET_VALUTES,
	payload: { valutes },
});

export const hideLoader = () => ({
	type: HIDE_LOADER,
});

export const showLoader = () => ({
	type: SHOW_LOADER,
});
export const changeTheme = (theme: "light" | "dark") => ({
	type: CHANGE_THEME,
	payload: { theme },
});

export const setTo = (to: string) => ({
	type: SET_TO,
	payload: { to },
});

export const setFrom = (from: string) => ({
	type: SET_FROM,
	payload: { from },
});
