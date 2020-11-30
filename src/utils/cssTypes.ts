import * as React from 'react';
import { ECssBorderStyle } from './cssEnums';


export type CssLength = string & {};

export type CssColor = React.CSSProperties["color"];

export type CssBorderStyle = typeof ECssBorderStyle;