"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultTheme = void 0;
const utils_1 = require("./utils");
exports.DefaultTheme = utils_1.buildTheme({
    colors: {
        primary: "#246EB9",
        secondary: "#FC814A",
        positive: "#4CB944",
        negative: "#EC0B43",
        dark: "#0D0106",
        pale: "#FDFFFC",
        interface: {
            navbar: '${this.colors.primary}',
            navbarHover: '###',
            background: '###',
        }
    },
});
//# sourceMappingURL=default.js.map