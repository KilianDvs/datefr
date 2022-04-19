exports.isValidYear = function (year) {
	year = +year
	return year >= 0 && Number.isInteger(year)
}
