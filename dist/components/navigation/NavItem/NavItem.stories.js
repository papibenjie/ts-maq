"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavItemExample = void 0;
const react_1 = require("react");
const NavItem_1 = require("./NavItem");
exports.default = {
    title: 'Components/Nav Item',
    argTypes: {
        href: { control: 'text' },
    }
};
exports.NavItemExample = (args) => (react_1.default.createElement(react_1.Fragment, null,
    react_1.default.createElement(NavItem_1.default, Object.assign({}, args))));
//# sourceMappingURL=NavItem.stories.js.map