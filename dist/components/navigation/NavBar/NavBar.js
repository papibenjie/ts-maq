"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flexbox_react_1 = require("flexbox-react");
const React = require("react");
const context_1 = require("../../../themes/context");
const tinycolor2_1 = require("tinycolor2");
class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { context: { colors, }, props: { children, justifyContent, height, } } = this;
        let styles = {
            backgroundColor: colors.interface.navbar,
            justifyContent: justifyContent,
            height: height,
            width: "100%",
            color: tinycolor2_1.default.mostReadable('inherit', ['black', 'white']),
        };
        return (React.createElement(flexbox_react_1.default, { style: styles }, children));
    }
}
NavBar.contextType = context_1.default;
NavBar.defaultProps = {
    backgroundColor: 'grey',
    justifyContent: 'space-between',
    height: '60px',
};
exports.default = NavBar;
//# sourceMappingURL=NavBar.js.map