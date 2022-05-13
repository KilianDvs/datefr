# DateFR

## Utility

This package can be used to :

- Format a date from a set of formats to the main French format
- Extract all dates from a given string, formatting them to the main French format
- Convert a date string that the default Date constructor couldn't parse to a JS Date object

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
