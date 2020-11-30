
import * as React from 'react';
import { CssColor, CssLength } from '../../../utils/cssTypes';
import { ECssBorderStyle } from '../../../utils/cssEnums';
import Flexbox from 'flexbox-react';

interface IBorderProps {
    borderColor?: CssColor,
    borderRadius?: CssLength,
    borderWidth?: CssLength,
    borderStyle?: CSSProperties['borderStyle'],
    style?: CSSProperties,
    padding?: CssLength,
    margin?: CssLength,
    children?: React.ReactNode
}

class Border extends React.Component<IBorderProps> {

    static defaultProps : IBorderProps = {
        borderColor: "black",
        borderRadius: "0",
        borderWidth: "1px",
        borderStyle: "solid",
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

        let styles : CSSProperties = {
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
