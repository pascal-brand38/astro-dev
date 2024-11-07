// Copyright (c) Pascal Brand
// MIT License
const now = new Date();
const _digits2 = (number) => number < 10 ? '0' + number : '' + number;
export const WEBTOOLS_CONSTANTS = {
    SECOND: _digits2(now.getSeconds()),
    MINUTE: _digits2(now.getMinutes()),
    HOUR: _digits2(now.getHours()),
    YEAR: now.getFullYear(),
    MONTH: _digits2(now.getMonth() + 1),
    DAY: _digits2(now.getDate()),
};
