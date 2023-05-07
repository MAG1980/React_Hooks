import "./index.css"
import {useUserContext} from "../hooks/useUserContext";

export function Index() {
    const {data} = useUserContext()
    //Формируем строку, содержащую первые буквы слов, входящих в строку name
    const initials = data.name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')

    return <div className="avatar">{initials}</div>
}
