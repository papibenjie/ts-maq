import { ThemeInterface } from "./themeInterface";
import { buildTheme } from "./utils";

export let DefaultTheme : ThemeInterface = buildTheme({
    colors: {
        primary: "#246EB9",
        secondary: "#FC814A",
        positive: "#4CB944",
        negative: "#EC0B43",
        dark: "#0D0106",
        pale: "#FDFFFC",

        interface: {
            navbar: '${this.colors.primary}',
            navbarHover: '###',
            background: '###',
        }
    },

})
