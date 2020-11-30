import * as React from 'react';
import NavItem from '../NavItem';
import NavBar from '.';

export default {
    title: 'Components/NavBar',
    argTypes: {
        backgroundColor: {control: 'color'},
        justifyContent: {control: 'text'},
        height: {control: {type: 'range', min: 40, max: 400, step: 5}},
    }
}

export const NavBarExample = (args) => (
    <NavBar {...args}>
        <NavItem>Item 1</NavItem>
        <NavItem>Item 2</NavItem>
        <NavItem>Item 3</NavItem>
    </NavBar>
);
