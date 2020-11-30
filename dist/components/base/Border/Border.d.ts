import * as React from 'react';
import { CssColor, CssLength, CssBorderStyle } from '../../../utils/cssTypes';
interface IBorderProps {
    borderColor?: CssColor;
    borderRadius?: CssLength;
    borderWidth?: CssLength;
    borderStyle?: CssBorderStyle;
    style?: React.CSSProperties;
    padding?: CssLength;
    margin?: CssLength;
    children?: React.ReactNode;
}
declare class Border extends React.Component<IBorderProps> {
    static defaultProps: IBorderProps;
    constructor(props: any);
    render(): JSX.Element;
}
export default Border;
