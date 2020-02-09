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
        .replace(/y/, date.getFullYear().toString().slice(-2))
        .replace(/Y/, date.getFullYear())
        .replace(/n/, date.getMonth() + 1)
        .replace(/m/, addLeadingZero(date.getMonth() + 1))
        .replace(/j/, date.getDate())
        .replace(/d/, addLeadingZero(date.getDate()))
        .replace(/H/, addLeadingZero(date.getHours()))
        .replace(/i/, addLeadingZero(date.getMinutes()))
        .replace(/s/, addLeadingZero(date.getSeconds()));
};