
import * as React from 'react';
import { CssColor, CssLength, CssBorderStyle } from '../../../utils/cssTypes';
import Flexbox from 'flexbox-react';
import { EBorderStyle } from '../../../utils/cssEnums';

interface IBorderProps {
    borderColor?: CssColor,
    borderRadius?: CssLength,
    borderWidth?: CssLength,
    borderStyle?: CssBorderStyle,
    style?: React.CSSProperties,
    padding?: CssLength,
    margin?: CssLength,
    children?: React.ReactNode
}

class Border extends React.Component<IBorderProps> {

    static defaultProps : IBorderProps = {
        borderColor: "black",
        borderRadius: "0",
        borderWidth: "1px",
        borderStyle: EBorderStyle.Solid,
        style: {},
        padding: "0",
        margin: "0",
        children: "Border"
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {
            props: {
                children,
                borderColor: bdColor,
                borderRadius: bdRadius,
                borderWidth: bdWidth,
                borderStyle: bdStyle,
                padding,
                margin,
                style,
                ...props
            },
        } = this;

        let styles : React.CSSProperties = {
            borderColor: bdColor,
            borderRadius: bdRadius,
            borderWidth: bdWidth,
            borderStyle: bdStyle,
            padding: padding,
            margin: margin,
            ...style
        }

        return (
            <Flexbox style={styles}>
                {children}
            </Flexbox>
        ) 
    }
}

export default Border;
