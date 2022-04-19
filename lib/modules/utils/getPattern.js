const regexObject = {
	REGEXP_PATTERN_DATE_NOSEP:
		/^(?<day>\d{1,2})(?<month>\d{1,2})(?<year>\d{2,4})$/,
	REGEXP_PATTERN_DATE_SEP:
		/^(?<day>\d{1,2})[\\\/ .:-](?<month>\d{1,2})[\\\/ .:-](?<year>\d{2,4})$/,
	REGEXP_PATTERN_DATE_YEARFIRST:
		/^(?<year>\d{2,4})[\\\/ .:-](?<month>\d{1,2})[\\\/ .:-](?<day>\d{1,2})$/,
	REGEXP_PATTERN_DATE_MONTHNAME:
		/^(?<day>\d{1,2})[\\\/ .:-](?<month>\D{3,8})[\\\/ .:-](?<year>\d{2,4})$/,
	REGEXP_PATTERN_DATE_NODAY_MONTHNAME:
		/^(?<month>\D{3,8})[\\\/ .:-](?<year>\d{2,4})$/,
}

exports.getPattern = function (date) {
	let regexName

	for (regexName in regexObject) {
		let result = parseInput(date, regexName)
		if (result) return result
	}
}

function parseInput(date, pattern) {
	let result = regexObject[pattern].exec(date)
	if (result && result.groups) {
		if (pattern === "REGEXP_PATTERN_DATE_NODAY_MONTHNAME") {
			let { month, year } = result.groups
			return {
				month,
				year,
			}
		} else {
			let { day, month, year } = result.groups
			return {
				day,
				month,
				year,
			}
		}
	}
}
