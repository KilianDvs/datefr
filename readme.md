# DateFR

## Utility

Two main features :

- Formats a date from a set of formats to the main French format
- Extracts all dates from a given string and formats them to the main French format

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

> [x] means that x is optional
>
> \* can be one either '\' or '/' or ' ' or '.' or ':' or '-'

- ddmmyy[yy]
- d[d]\*m[m]\*yy[yy]
- yy[yy]\*m[m]\*d[d]
- d[d]\*mmmm\*yy[yy]
- mmmm\*yy[yy]

### `String.prototype.toDateString()`

```js
require("datefr")

const date = "30 janvier 2022"
date.toDateString() // Expected output: 30/01/2022
```

### `String.prototype.extractDates()`

```js
require("datefr")

const string = "Today is 251221. Can't wait to be in january 2022!"
string.extractDates() // Expected output: ['25/12/2021', '01/2022']
```
