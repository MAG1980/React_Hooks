import "./index.css"
import {useAppContext} from "../hooks/useAppContext";

export function Index() {
    // const {data} = useUserContext()
    const {user} = useAppContext()
    //Формируем строку, содержащую первые буквы слов, входящих в строку name
    const initials = user.name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')

    return <div className="avatar">{initials}</div>
}
