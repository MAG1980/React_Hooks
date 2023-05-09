import {useUser} from "./hooks/useUser";
import {UserContext} from "./hooks/useUserContext"

export const UserContextProvider = ({userId, children}) => {
    //Получение данных с сервера
    const user = useUser(userId)
    return (
        //Помещение данных, полученных с сервера, в контекст
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}
