const [{ formatDay }, { formatMonth }, { formatYear }, { check }] = [
	require("./day.js"),
	require("./month.js"),
	require("./year.js"),
	require("../validity/check.js"),
]

exports.format = function (res) {
	check(res)
	const { day, month, year } = res
	return day
		? formatDay(day) + "/" + formatMonth(month) + "/" + formatYear(year)
		: formatMonth(month) + "/" + formatYear(year)
}
