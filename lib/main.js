const { format, getPattern, extractDates } = require("./modules/index.js")

String.prototype.toDateString = function () {
	return format(getPattern(this))
}

String.prototype.extractDates = function () {
	return extractDates(this).map((date) => format(date))
}

String.prototype.toDateObject = function () {
	let [d, m, y] = this.toDateString().split("/")
	let date = new Date(`${y}-${m}-${d}`)
	date.setHours(0)
	return date
}

String.prototype.diffDate = function (
	date,
	includeEndDate = false,
	unit = "d"
) {
	if (typeof includeEndDate !== "boolean")
		throw new Error("includeEndDate can only be a boolean")
	let divider
	switch (unit) {
		case "ms":
			divider = 1
			break
		case "s":
			divider = 1000
			break
		case "m":
			divider = 1000 * 60
			break
		case "h":
			divider = 1000 * 60 * 60
			break
		case "d":
			divider = 1000 * 60 * 60 * 24
			break
		default:
			throw new Error("Invalid unit")
	}
	return (
		Math.floor(Math.abs(this.toDateObject() - date.toDateObject()) / divider) +
		(includeEndDate ? 1 : 0)
	)
}

String.prototype.getMaxDate = function (date) {
	return this.toDateObject() >= date.toDateObject()
		? this.toDateString()
		: date.toDateString()
}

String.prototype.getMinDate = function (date) {
	return this.toDateObject() <= date.toDateObject()
		? this.toDateString()
		: date.toDateString()
}

Array.prototype.getMaxDate = function (key = undefined) {
	if (key && !this.some((row) => row.hasOwnProperty(key)))
		throw new Error("This key hasn't been found in some of the array's rows")
	return key
		? new Date(
				Math.max.apply(
					null,
					this.map((row) => row[key].toDateObject())
				)
		  ).toLocaleDateString()
		: new Date(
				Math.max.apply(
					null,
					this.map((date) => date.toDateObject())
				)
		  ).toLocaleDateString()
}
Array.prototype.getMinDate = function (key = undefined) {
	if (key && !this.some((row) => row.hasOwnProperty(key)))
		throw new Error("This key hasn't been found in some of the array's rows")
	return key
		? new Date(
				Math.min.apply(
					null,
					this.map((row) => row[key].toDateObject())
				)
		  ).toLocaleDateString()
		: new Date(
				Math.min.apply(
					null,
					this.map((date) => date.toDateObject())
				)
		  ).toLocaleDateString()
}
