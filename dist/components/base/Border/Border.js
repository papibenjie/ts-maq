"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const flexbox_react_1 = require("flexbox-react");
class Border extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const _a = this.props, { children, borderColor: bdColor, borderRadius: bdRadius, borderWidth: bdWidth, borderStyle: bdStyle, padding, margin, style } = _a, props = __rest(_a, ["children", "borderColor", "borderRadius", "borderWidth", "borderStyle", "padding", "margin", "style"]);
        let styles = Object.assign({ borderColor: bdColor, borderRadius: bdRadius, borderWidth: bdWidth, borderStyle: bdStyle, padding: padding, margin: margin }, style);
        return (React.createElement(flexbox_react_1.default, { style: styles }, children));
    }
}
Border.defaultProps = {
    borderColor: "black",
    borderRadius: "0",
    borderWidth: "1px",
    borderStyle: "solid",
    style: {},
    padding: "0",
    margin: "0",
    children: "Border"
};
exports.default = Border;
//# sourceMappingURL=Border.js.map