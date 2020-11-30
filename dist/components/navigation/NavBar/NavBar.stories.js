"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBarExample = void 0;
const React = require("react");
const NavItem_1 = require("../NavItem");
const _1 = require(".");
exports.default = {
    title: 'Components/NavBar',
    argTypes: {
        backgroundColor: { control: 'color' },
        justifyContent: { control: 'text' },
        height: { control: { type: 'range', min: 40, max: 400, step: 5 } },
    }
};
exports.NavBarExample = (args) => (React.createElement(_1.default, Object.assign({}, args),
    React.createElement(NavItem_1.default, null, "Item 1"),
    React.createElement(NavItem_1.default, null, "Item 2"),
    React.createElement(NavItem_1.default, null, "Item 3")));
//# sourceMappingURL=NavBar.stories.js.map