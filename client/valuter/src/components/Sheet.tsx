import React from "react";
import { useSelector } from "react-redux";
interface SheetProps {
	width?: number;
	height?: number;
	children?: React.ReactNode;
	classes?: string[];
	backgroundColor?: string;
}
export const Sheet: React.FC<SheetProps> = ({
	width,
	height,
	children,
	classes,
	backgroundColor,
}) => {
	const theme = useSelector((state: any) => state.app.theme);
	return (
		<div
			className={`sheet ${theme === "dark" ? "dark" : ""} ${
				classes ? classes.join(" ") : ""
			}`}
		>
			{children}
		</div>
	);
};
