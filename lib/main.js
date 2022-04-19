const { format, getPattern, extractDates } = require("./modules/index.js")

String.prototype.toDateString = function () {
	return format(getPattern(this))
}

String.prototype.extractDates = function () {
	return extractDates(this).map((date) => format(date))
}
