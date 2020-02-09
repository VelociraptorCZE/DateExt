/**
 * DateExt
 * Copyright (c) Simon Raichl 2020
 * MIT License
 */

import formatDate from "./formatDate";

const DateExt = function (...args) {

    if (this === void 0) return Date(...args);
    
    const date = new Date(...args);

    date.addHours = hours => date.setHours(date.getHours() + hours);

    date.addDays = days => date.addHours(days * 24);

    date.addWeeks = weeks => date.addDays(weeks * 7);

    date.addMonths = months => {
        for (let i = 0; i < months; ++i) {
            const numberOfDaysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
            date.addDays(numberOfDaysInMonth);
        }

        return +date;
    };

    date.addYears = years => date.addMonths(years * 12);

    date.isValid = () => !isNaN(date.getDate());

    date.format = format => formatDate(date, format);

    DateExt.format = formatDate;
    
    return date;
};

export default DateExt;
