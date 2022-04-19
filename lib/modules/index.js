const [{ formatDay }, { formatMonth }, { formatYear }, { format }] = [
	require("./formatting/day.js"),
	require("./formatting/month.js"),
	require("./formatting/year.js"),
	require("./formatting/format.js"),
]

const [{ isYearBissextile }, { getPattern }, { extractDates }] = [
	require("./utils/bissextile.js"),
	require("./utils/getPattern.js"),
	require("./utils/extractDates.js"),
]

module.exports = {
	formatDay,
	formatMonth,
	formatYear,
	format,
	isYearBissextile,
	getPattern,
	extractDates,
}
