exports.formatYear = function (year) {
	year = year.toString()
	if (year.length === 2) {
		return year.padStart(
			4,
			+year <= +new Date().getFullYear().toString().slice(-2) + 15 ? "20" : "19"
		)
	}
	return year
}
