# DateFR

## Utility

This package can be used to :

- Format a date from a set of formats to the main French format
- Extract all dates from a given string, formatting them to the main French format
- Convert a date string that the default Date constructor couldn't parse to a JS Date object
- Calculate the time between two dates

## Installation

```
npm i datefr
```

## Usage

### Importation

You can just require the package and you'll be able to use the functions.

```js
require("datefr")
```

### Input formats

Below is the list of the formats that can be parsed by the package.

- ddmmyy[yy]
- d[d]\*m[m]\*yy[yy]
- yy[yy]\*m[m]\*d[d]
- d[d]\*mmmm\*yy[yy]
- mmmm\*yy[yy]

> [x] means that x is optional
>
> \* can be one either a backslash, a slash, a space, a dot, a semi-colon or a hyphen

### `String.prototype.toDateString()`

```js
require("datefr")

const string = "30 janvier 2022"
console.log(string.toDateString()) // Expected output: '30/01/2022'
```

### `String.prototype.extractDates()`

```js
require("datefr")

const string = "Today is 251221. Can't wait to be in january 2022!"
console.log(string.extractDates()) // Expected output: ['25/12/2021', '01/2022']
```

### `String.prototype.toDateObject()`

```js
require("datefr")

const string = "5 jan 2010"
console.log(string.toDateObject()) // Expected output: 2010-01-05T00:00:00.000Z
```

> Note that the date object thus created will always have the time set as 00:00:00.000Z

### `String.prototype.diffDate(date, ?includeEndDate, ?unit)`

```js
require("datefr")

const string = "1 may 2003"
console.log(string.diffDate("01/05/2022")) // Expected output : 6940
console.log(string.diffDate("01/05/2022", true)) // Expected output : 6941
console.log(string.diffDate("01/05/2022", false, "s")) // Expected output : 599616000
```

> #### Note that the difference will always be positive
>
> ### _includeEndDate_
>
> - true : includes the end date
> - false : doesn't include the end date (default)
>
> ### _unit_
>
> - ms : processes the difference in milliseconds
> - s : processes the difference in seconds
> - m : processes the difference in minutes
> - h : processes the difference in hours
> - d : processes the difference in days (default)
