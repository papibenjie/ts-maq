
import React, {Fragment} from 'react';
import NavItem from './NavItem';

export default {
    title: 'Components/Nav Item',
    argTypes: {
        href: {control: 'text'},
    }
};

export const NavItemExample = (args) => (
    <Fragment>
        <NavItem {...args} />
    </Fragment>
);
