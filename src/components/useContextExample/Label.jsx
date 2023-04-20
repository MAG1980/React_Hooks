import {getThemeColor} from "./getThemeColor";
import {useTheme} from "./ThemeContext";


export const Label = ({children}) => {
    //Получаем тему приложения с помощью пользовательского хука
    const [theme] = useTheme()

    const style = {
        color: getThemeColor(theme),
        fontSize: 18,
        fontFamily: 'monospace'
    }

    return (
        <p style={style}>
            {children}
        </p>
    )
}
