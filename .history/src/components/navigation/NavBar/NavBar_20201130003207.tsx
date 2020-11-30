
import Flexbox from 'flexbox-react';
import * as React from 'react';
import ThemeContext from '../../../themes/context';
import tinycolor from 'tinycolor2';
import { CssLength } from '../../../utils/cssTypes';

interface INavBarProps {
    justifyContent?: React.CSSProperties['justifyContent'],
    height?: CssLength,
    children: React.ReactNode;
}

class NavBar extends React.Component<INavBarProps> {

    static contextType = ThemeContext

    static defaultProps = {
        backgroundColor: 'grey',
        justifyContent: 'space-between',
        height: '60px',
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {
            context: { 
                colors,
            },
            props: {
                children,
                justifyContent,
                height,
            }
        } = this;

        let styles = {
            backgroundColor: colors.interface.navbar,
            justifyContent: justifyContent,
            height: height,
            width: "100%",
            color: tinycolor.mostReadable('inherit', ['black', 'white']),
        }

        return (
            <Flexbox style={styles}>
                {children}
            </Flexbox>
        );
    }
}

export default NavBar;
