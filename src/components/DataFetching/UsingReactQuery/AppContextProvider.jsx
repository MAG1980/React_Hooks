import {useState} from "react";
import {AppContext} from "./hooks/useAppContext"

const USER_ID = 3


export const AppContextProvider = ({children}) => {
    //Хранение id авторизованного пользователя
    const [userId, setUserId] = useState(USER_ID)

    //Маппим элементы массив в свойства объекта
    const value = {
        userId,
        setUserId
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>

    )
}