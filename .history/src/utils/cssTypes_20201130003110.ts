import { CSSProperties } from 'react';
import { ECssBorderStyle } from './cssEnums';


export interface CssLength {
    length: string & {},
}

export interface CssColor {
    CSSProperties['color'],
}

export interface CssBorderStyle {
    ECssBorderStyle
}
