const { check } = require("../validity/check")

RegExp.prototype.execAllGen = function* (input) {
	for (let match; (match = this.exec(input)) !== null; ) yield match
}
RegExp.prototype.execAll = function (input) {
	return [...this.execAllGen(input)]
}

const regexObject = {
	REGEXP_PATTERN_DATE_NOSEP:
		/(?<day>\d{1,2})(?<month>\d{1,2})(?<year>\d{2,4})/g,
	REGEXP_PATTERN_DATE_SEP:
		/(?<day>\d{1,2})[\\\/ .:-](?<month>\d{1,2})[\\\/ .:-](?<year>\d{2,4})/g,
	REGEXP_PATTERN_DATE_YEARFIRST:
		/(?<year>\d{2,4})[\\\/ .:-](?<month>\d{1,2})[\\\/ .:-](?<day>\d{1,2})/g,
	REGEXP_PATTERN_DATE_MONTHNAME:
		/(?<day>\d{1,2})[\\\/ .:-](?<month>[^0-9 ]{3,8})[\\\/ .:-](?<year>\d{2,4})/g,
	REGEXP_PATTERN_DATE_NODAY_MONTHNAME:
		/(?<!\d{1,2} )(?<month>[^0-9 ]{3,8})[\\\/ .:-](?<year>\d{2,4})/g,
}

exports.extractDates = function (str) {
	let regexName

	let dates = []
	for (regexName in regexObject) {
		let result = parseInput(str, regexName)
		if (result) dates.push(...result)
	}
	return dates
}

function parseInput(date, pattern) {
	let result = regexObject[pattern].execAll(date)
	let toReturn = []
	if (result && result.some((res) => res.groups)) {
		for (let i of result) {
			try {
				if (!i.groups.day) delete i.groups.day
				check(i.groups)
				toReturn.push(i.groups)
			} catch (err) {
				continue
			}
		}
		return toReturn
	}
}
