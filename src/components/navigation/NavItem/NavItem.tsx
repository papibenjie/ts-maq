import tinycolor from 'tinycolor2';
import Flexbox from 'flexbox-react';
import * as React from 'react';
import ThemeContext from '../../../themes/context';

interface INavItemProps {
    children: React.ReactNode,
    href: string,
    padding: React.CSSProperties['padding'],
}

interface INavItemStates {
    hovered: boolean,
}

class NavItem extends React.Component<INavItemProps, INavItemStates> {

    static contextType = ThemeContext

    static defaultProps = {
        children: "NavItem",
        href: "#",
        padding: "0.5em 1em",
    }

    constructor(props) {
        super(props);

        this.state = {
            hovered: false,
        }
    }

    onMouseEnter() {
        this.setState({
            hovered: true,
        })
    }

    onMouseLeave() {
        this.setState({
            hovered: false,
        })
    }


    render() {
        const {
            context: { colors },
            props: { children, href, padding },
        } = this;

        let bgColor = this.state.hovered ? colors.secondary : colors.primary;

        let styles = {
            padding: padding,
            color: tinycolor.mostReadable(bgColor, ['black', 'white']),
            backgroundColor: this.state.hovered ? colors.secondary : colors.primary,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
        }

        return (
            <a href={href} style={styles} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
                <Flexbox>
                    {children}
                </Flexbox>
            </a>
        );
    }
}

export default NavItem;
