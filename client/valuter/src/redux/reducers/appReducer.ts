import {
	stateProps,
	toType,
	fromType,
	valutesType,
	actionType,
} from "../../interfaces/interfaces";
import {
	CHANGE_THEME,
	HIDE_LOADER,
	SET_FROM,
	SET_TO,
	SET_VALUTES,
	SHOW_LOADER,
} from "../types";

const initialState: stateProps = {
	valutes: {},
	theme: "light",
	loading: false,
	to: "RUB",
	from: "USD",
};

const handlers = {
	[SHOW_LOADER]: (state: stateProps): stateProps => ({
		...state,
		loading: true,
	}),
	[HIDE_LOADER]: (state: stateProps): stateProps => ({
		...state,
		loading: false,
	}),
	[CHANGE_THEME]: (state: stateProps, payload: any): stateProps => ({
		...state,
		...payload,
	}),
	[SET_TO]: (state: stateProps, payload: toType): stateProps => ({
		...state,
		...payload,
	}),
	[SET_FROM]: (state: stateProps, payload: fromType): stateProps => ({
		...state,
		...payload,
	}),
	[SET_VALUTES]: (state: stateProps, payload: valutesType): stateProps => {
		return {
			...state,
			...payload,
		};
	},
	DEFAULT: (state: stateProps): stateProps => state,
};

export const appReducer = (state = initialState, action: actionType) => {
	console.log(action.type);
	const handle = (handlers as any)[action.type] || handlers.DEFAULT;
	return handle(state, action.payload);
};
