import  '../utils/extensions/string';
import { ThemeInterface } from './themeInterface';


export function buildTheme(obj: ThemeInterface) : ThemeInterface {
    let builded: ThemeInterface = {...obj};
    for (let key in Object.keys(obj)) {
        if (typeof obj[key] === 'string') {
            builded[key] = obj[key].interpolate(obj);
        } else if(typeof obj[key] === 'object') {
            builded[key] = buildTheme(obj[key])
        } else {
            builded[key] = obj[key]
        }
    } 
    return builded
}