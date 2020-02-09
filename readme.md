# DateExt

An extension library which tackles simple tasks with dates in JavaScript.

Under the hood this library creates regular Date instance and assigns methods mentioned below.

## Installation
```
npm i date-ext-micro --save
```

## Import

```js
import DateExt from "date-ext-micro";

const date = new DateExt(); // returns Date object
const date2 = DateExt(); // returns string
```

## Methods

### addHours()

```js
const date = new DateExt;

date.addHours(1); // Added one hour from now
```

### addDays()

```js
const date = new DateExt;

date.addDays(1);
```

### addWeeks()

```js
const date = new DateExt;

date.addWeeks(1);
```

### addMonths()

```js
const date = new DateExt;

date.addMonths(1);
```

### addYears()

```js
const date = new DateExt;

date.addYears(1);
```

### isValid()

Returns boolean whether Date instance contains a valid date or not.

```js
new DateExt().isValid(); // true
new DateExt("").isValid() // false
```

### format()

Returns string with formatted date according to given pattern. It's also available as a static method.

```js
const date = new Date("2020");

new DateExt("2020/12/02 18:07:01").format("Y-m-d H:i:s"); // 2020-12-02 18:07:01
DateExt.format(date, "j. n. Y"); // 1. 1. 2020
```

#### Format tokens
- y (returns last two digits of the year)
- Y (returns year in four digits)
- n (returns month number without leading zero)
- m (returns month number with leading zero)
- j (returns day number without leading zero)
- d (returns day number with leading zero)
- H (returns number of hours with leading zero)
- i (returns number of minutes with leading zero)
- s (returns number of seconds with leading zero)
