const { formatYear } = require("../formatting/year.js")

exports.isYearBissextile = function (year) {
	year = +formatYear(year)
	return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)
}
