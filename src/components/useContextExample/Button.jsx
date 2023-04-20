import {useTheme} from "./ThemeContext";
import {getThemeColor} from "./getThemeColor";


export const Button = ({children, onClick}) => {
    const [theme] = useTheme()
    console.log(theme)
    const style = {
        border: 'none',
        paddingLeft: 20,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        margin: 5,
        color: '#FFF',
        fontFamily: 'monospace',
        backgroundColor: getThemeColor(theme)
    }
    return (
        <button onClick={onClick} style={style}>{children}</button>
    )
}
