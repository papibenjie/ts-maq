import * as React from 'react';
import { CssLength } from '../../../utils/cssTypes';
interface INavBarProps {
    justifyContent?: React.CSSProperties['justifyContent'];
    height?: CssLength;
    children: React.ReactNode;
}
declare class NavBar extends React.Component<INavBarProps> {
    static contextType: React.Context<import("../../../themes/themeInterface").ThemeInterface>;
    static defaultProps: {
        backgroundColor: string;
        justifyContent: string;
        height: string;
    };
    constructor(props: any);
    render(): JSX.Element;
}
export default NavBar;
