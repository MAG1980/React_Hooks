import "./index.css"
import {useUserContext} from "../UserContext";

export function Avatar() {
    const {data} = useUserContext()
    //Формируем строку, содержащую первые буквы слов, входящих в строку name
    const initials = data.name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')

    return <div className="avatar">{initials}</div>
}
