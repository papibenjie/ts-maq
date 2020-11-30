"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderExample = void 0;
const react_1 = require("react");
const cssEnums_1 = require("../../../utils/cssEnums");
const Border_1 = require("./Border");
exports.default = {
    title: 'Components/Border',
    argTypes: {
        borderColor: { control: "color" },
        borderRadius: { control: { type: "range", min: 0, max: 50, step: 1 } },
        borderWidth: { control: { type: "range", min: 0, max: 50, step: 1 } },
        borderStyle: {
            control: {
                type: 'select',
                options: Object.values(cssEnums_1.ECssBorderStyle)
            },
        },
        padding: { control: { type: "range", min: 0, max: 100, step: 4 } },
        margin: { control: { type: "range", min: 0, max: 100, step: 4 } },
        children: { control: "text" },
    }
};
exports.BorderExample = (args) => (react_1.default.createElement(Border_1.default, Object.assign({}, args)));
//# sourceMappingURL=Border.stories.js.map