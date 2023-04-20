import {useTheme} from "./ThemeContext";
import {Theme} from "./getThemeColor";
import {Button} from "./Button";

export const ThemeToolbar = () => {
    //Получаем сеттер темы из пользовательского хука
    const [, setTheme] = useTheme()
    return (
        <>
            <Button onClick={() => setTheme(Theme.RED)}>Red</Button>
            <Button onClick={() => setTheme(Theme.GREEN)}>Green</Button>
            <Button onClick={() => setTheme(Theme.BLUE)}>Blue</Button>
        </>
    )
}
