/**
 * DateExt
 * Copyright (c) Simon Raichl 2020
 * MIT License
 */

import { strictEqual, throws } from "assert";
import DateExt from "..";
import {
    DATE_INPUT_FORMAT,
    HUMAN_READABLE_DATE_FORMAT,
    HUMAN_READABLE_DATE_FORMAT2,
    HUMAN_READABLE_DATE_FORMAT_US
} from "../src/formats";

describe("DateExt test", () => {
    const ONE_DAY = 864e5;
    const ONE_HOUR = 36e5;

    it("Should create DateExt object", () => {
        const dateExt = new DateExt;
        strictEqual(dateExt instanceof Date, true);
    });

    it("Should test extension method capabilities", () => {
        const originalDate = new DateExt;
        const date = new DateExt;

        date.addHours(1);
        strictEqual(date - originalDate, ONE_HOUR);

        date.addDays(1);
        strictEqual(date - originalDate, ONE_DAY + ONE_HOUR);

        date.addWeeks(2);
        strictEqual(date - originalDate, ONE_DAY * 15 + ONE_HOUR);

        const date2 = new DateExt("04-15-2020");

        date2.addMonths(5);
        strictEqual(date2.getMonth() + 1, 9);
        strictEqual(date2.getDate(), 15);

        date2.addYears(3);
        strictEqual(date2.getMonth() + 1, 9);
        strictEqual(date2.getDate(), 15);
        strictEqual(date2.getFullYear() - 2020, 3);
    });

    it("Should return formatted date according to format pattern", () => {
        const originalFormattedDate1 = "2020-02-02";
        const originalFormattedDate2 = "2020-12-02 18:07:01";

        throws(DateExt.format, TypeError);
        throws(() => new DateExt("").format(DATE_INPUT_FORMAT), TypeError);

        strictEqual(new DateExt(originalFormattedDate1).format(DATE_INPUT_FORMAT), originalFormattedDate1);
        strictEqual(new DateExt(originalFormattedDate2).format("Y-m-d H:i:s"), originalFormattedDate2);
        strictEqual(new DateExt(originalFormattedDate1).format(HUMAN_READABLE_DATE_FORMAT), "2. 2. 2020");
        strictEqual(new DateExt(originalFormattedDate2).format(HUMAN_READABLE_DATE_FORMAT_US), "12/2/2020");
        strictEqual(new DateExt(originalFormattedDate2).format(HUMAN_READABLE_DATE_FORMAT2), "2/12/2020");
        strictEqual(new DateExt("2019").format("Y-Y"), "2019-2019");
        strictEqual(new DateExt("2020/10/23 12:01:21:01").format("s:v"), "21:01");
        strictEqual(new DateExt("2020/10/23 12:01:21:654").format("s:v:s"), "21:654:21");
    });

    it("Should successfully verify given date", () => {
        strictEqual(new DateExt().isValid(), true);
        strictEqual(new DateExt("").isValid(), false);
    });
});