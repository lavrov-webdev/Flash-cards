export const formatString = (value: string) => {
	return value
		.replace(/[,\.;]/g, ",")
		.replace(/[`']/g, "’")
		.replace(/\u00a0/g, " ")
		.toLowerCase()
		.trim();
};
