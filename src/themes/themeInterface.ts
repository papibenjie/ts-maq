import { CSSProperties } from "react";

export interface ThemeInterface {
    colors: {
        primary: CSSProperties["color"],
        secondary: CSSProperties["color"],
        positive: CSSProperties["color"],
        negative: CSSProperties["color"],
        dark: CSSProperties["color"],
        pale: CSSProperties["color"],

        interface: {
            navbar: CSSProperties["color"],
            navbarHover: CSSProperties["color"],
            background: CSSProperties["color"],
        }
    }

}