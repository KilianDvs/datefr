const { isYearBissextile } = require("../utils/bissextile.js")
const { formatMonth } = require("../formatting/month.js")
const { formatYear } = require("../formatting/year.js")

exports.isValidDay = function (day, month, year) {
	day = +day
	month = +formatMonth(month)
	year = +formatYear(year)
	const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12]
	const monthsWith30Days = [4, 6, 9, 11]
	return (
		Number.isInteger(day) &&
		day >= 1 &&
		(monthsWith31Days.includes(month)
			? day <= 31
			: monthsWith30Days.includes(month)
			? day <= 30
			: month === 2
			? isYearBissextile(year)
				? day <= 29
				: day <= 28
			: false)
	)
}
