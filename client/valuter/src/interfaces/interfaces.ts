export interface stateProps {
	valutes: any;
	loading: boolean;
	from: string;
	to: string;
	theme: "light" | "dark";
}
// "light" | "dark"
export interface themeType {
	theme: "light" | "dark";
}
export interface loadingType {
	loading: boolean;
}
export interface toType {
	to: string;
}
export interface fromType {
	from: string;
}
export interface valutesType {
	valutes: any;
}
export interface dataType {
	data: any;
}
type payloadType =
	| themeType
	| loadingType
	| toType
	| fromType
	| valutesType
	| null;
export interface actionType {
	type: string;
	payload: payloadType;
}
export interface currencyProps {
	app?: stateProps;
	children?: React.ReactNode;
	showLoader?: () => any;
	hideLoader?: () => any;
	changeTheme?: () => any;
}
