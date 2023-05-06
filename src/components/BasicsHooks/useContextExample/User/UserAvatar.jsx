import {useUser} from "./UserContext";
import {useTheme} from "../ThemeContext";
import {getThemeColor} from "../getThemeColor";

export const UserAvatar = () => {
    const {avatarUrl} = useUser()

    //В ссылку добавляем GET-запрос с текущим временем, чтобы каждый раз получать новую картинку
    const src = `${avatarUrl}?${new Date().getTime()}`
    const [theme] = useTheme()

    const style = {
        width: 128,
        height: 128,
        borderRadius: 10,
        border: `3px solid ${getThemeColor(theme)}`,
        objectFit: 'cover'
    }
    return (
        <img src={src} alt="User avatar" style={style}/>
    )
}
