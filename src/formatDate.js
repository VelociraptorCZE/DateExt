/**
 * DateExt
 * Copyright (c) Simon Raichl 2020
 * MIT License
 */

const addLeadingZero = number => `${/^\d$/.test(number) ? "0" : ""}${number}`;

export default (date, format = "") => {
    if (!(date instanceof Date) || isNaN(date.getDate())) {
        throw TypeError("Invalid date");
    }

    return format
        .replace(/y/g, date.getFullYear().toString().slice(-2))
        .replace(/Y/g, date.getFullYear())
        .replace(/n/g, date.getMonth() + 1)
        .replace(/m/g, addLeadingZero(date.getMonth() + 1))
        .replace(/j/g, date.getDate())
        .replace(/d/g, addLeadingZero(date.getDate()))
        .replace(/H/g, addLeadingZero(date.getHours()))
        .replace(/i/g, addLeadingZero(date.getMinutes()))
        .replace(/s/g, addLeadingZero(date.getSeconds()))
        .replace(/v/g, addLeadingZero(date.getMilliseconds()));
};