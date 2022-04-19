const [{ isValidDay }, { isValidMonth }, { isValidYear }] = [
	require("./day.js"),
	require("./month.js"),
	require("./year.js"),
]

exports.check = function (res) {
	if (!isValidYear(res.year))
		throw new Error("The year in the parsing result is invalid.")
	if (!isValidMonth(res.month))
		throw new Error("The month in the parsing result is invalid.")
	if (res.day)
		if (!isValidDay(res.day, res.month, res.year))
			throw new Error("The day in the parsing result is invalid.")

	return true
}
