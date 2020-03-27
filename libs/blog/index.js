"use strict";
exports.__esModule = true;
exports.composeImagePath = function (title, fileName) {
    return "/assets/content/" + title + "/" + fileName;
}, exports.composeContentQuery = function (normal) { return normal.split('/')[3]; }, exports.composeContentPath = function (normal) { return "/content/" + exports.composeContentQuery(normal); }, exports.composeTime = function (date) {
    var time = new Date(date), day = time.getUTCDate(), month = time.getUTCMonth() + 1, year = time.getUTCFullYear(), hour = time.getUTCHours(), minute = time.getUTCMinutes(), second = time.getUTCSeconds();
    return year + "-" + month + "-" + day + "T" + hour + "-" + minute + "-" + second + "+07:00";
}, exports.composeRetinaPath = function (src) {
    var source = src.split('.');
    return source[0] + "@2x." + source[1];
};
