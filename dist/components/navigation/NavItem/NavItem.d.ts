import * as React from 'react';
interface INavItemProps {
    children: React.ReactNode;
    href: string;
    padding: React.CSSProperties['padding'];
}
interface INavItemStates {
    hovered: boolean;
}
declare class NavItem extends React.Component<INavItemProps, INavItemStates> {
    static contextType: React.Context<import("../../../themes/themeInterface").ThemeInterface>;
    static defaultProps: {
        children: string;
        href: string;
        padding: string;
    };
    constructor(props: any);
    onMouseEnter(): void;
    onMouseLeave(): void;
    render(): JSX.Element;
}
export default NavItem;
