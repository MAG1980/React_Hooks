import {useTheme} from "./ThemeContext";
import {Label} from "./Label";

/**
 * Выводит название активной темы
 * @returns {JSX.Element}
 * @constructor
 */
export const ThemeLabel = () => {
    const [theme] = useTheme()
    return (
        <Label>Current theme: {theme}</Label>
    )
}
