"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTheme = void 0;
require("../utils/extensions/string");
function buildTheme(obj) {
    let builded = Object.assign({}, obj);
    for (let key in Object.keys(obj)) {
        if (typeof obj[key] === 'string') {
            builded[key] = obj[key].interpolate(obj);
        }
        else if (typeof obj[key] === 'object') {
            builded[key] = buildTheme(obj[key]);
        }
        else {
            builded[key] = obj[key];
        }
    }
    return builded;
}
exports.buildTheme = buildTheme;
//# sourceMappingURL=utils.js.map