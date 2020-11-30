
import React, {Fragment} from 'react';
import { ECssBorderStyle } from '../../../utils/cssEnums';
import Border from './Border';

export default {
    title: 'Components/Border',
    argTypes: {
        borderColor: {control: "color"},
        borderRadius: {control: {type: "range", min: 0, max: 50, step: 1}},
        borderWidth: {control: {type: "range", min: 0, max: 50, step: 1}},
        borderStyle: {
            control: {
            type: 'select',
            options: Object.values(ECssBorderStyle)
          },
        },
        padding: {control: {type: "range", min: 0, max: 100, step: 4}},
        margin: {control: {type: "range", min: 0, max: 100, step: 4}},
        children: {control: "text"},
    }
};

export const BorderExample = (args) => (
    <Border {...args}></Border>
);
