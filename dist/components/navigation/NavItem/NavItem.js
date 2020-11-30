"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tinycolor2_1 = require("tinycolor2");
const flexbox_react_1 = require("flexbox-react");
const React = require("react");
const context_1 = require("../../../themes/context");
class NavItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
        };
    }
    onMouseEnter() {
        this.setState({
            hovered: true,
        });
    }
    onMouseLeave() {
        this.setState({
            hovered: false,
        });
    }
    render() {
        const { context: { colors, }, props: { children, href, padding, }, } = this;
        let bgColor = this.state.hovered ? colors.secondary : colors.primary;
        let styles = {
            padding: padding,
            color: tinycolor2_1.default.mostReadable(bgColor, ['black', 'white']),
            backgroundColor: this.state.hovered ? colors.secondary : colors.primary,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
        };
        return (React.createElement("a", { href: href, style: styles, onMouseEnter: this.onMouseEnter.bind(this), onMouseLeave: this.onMouseLeave.bind(this) },
            React.createElement(flexbox_react_1.default, null, children)));
    }
}
NavItem.contextType = context_1.default;
NavItem.defaultProps = {
    children: "NavItem",
    href: "#",
    padding: "0.5em 1em",
};
exports.default = NavItem;
//# sourceMappingURL=NavItem.js.map