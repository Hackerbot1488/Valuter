export const toFixed = (value: number): number => {
	let res: string | number = "";
	const stringNumber: string[] = value.toString().split(".");
	res = stringNumber[0];
	if (stringNumber.length < 2) {
		return Number.parseInt(res);
	}
	res += "." + stringNumber[1].slice(0, 4);
	return Number.parseFloat(res);
};
