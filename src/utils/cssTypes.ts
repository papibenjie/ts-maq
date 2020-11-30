import * as React from 'react';
import { EBase, EBorderStyle } from './cssEnums';

export type CssColor = string;

export type CssLength = string;


const _CssBorderStyle = { ...EBase, ...EBorderStyle };
export type CssBorderStyle = typeof _CssBorderStyle;