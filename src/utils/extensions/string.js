var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
String.prototype.interpolate = function (params) {
    var names = Object.keys(params);
    var vals = Object.values(params);
    return new (Function.bind.apply(Function, __spreadArrays([void 0], names, ["return `" + this + "`;"])))().apply(void 0, vals);
};
