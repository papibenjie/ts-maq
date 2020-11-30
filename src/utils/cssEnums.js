"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.ECssBorderStyle = void 0;
var EBase;
(function (EBase) {
    EBase["None"] = "none";
    EBase["Initial"] = "initial";
    EBase["Inherit"] = "inherit";
})(EBase || (EBase = {}));
var EBorderStyle;
(function (EBorderStyle) {
    EBorderStyle["Hidden"] = "hidden";
    EBorderStyle["Dotted"] = "dotted";
    EBorderStyle["Dashed"] = "dashed";
    EBorderStyle["Solid"] = "solid";
    EBorderStyle["Double"] = "double";
    EBorderStyle["Groove"] = "groove";
    EBorderStyle["Ridge"] = "ridge";
    EBorderStyle["Inset"] = "inset";
    EBorderStyle["Outset"] = "outset";
})(EBorderStyle || (EBorderStyle = {}));
exports.ECssBorderStyle = __assign(__assign({}, EBase), EBorderStyle);
