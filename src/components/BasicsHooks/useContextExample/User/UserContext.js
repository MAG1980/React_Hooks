import {createContext, useContext} from "react";

//Создаём новый контекст (пользователь)
export const UserContext = createContext()

/**
 * Пользовательский хук, возвращающий текущега пользователя
 * @returns {unknown}
 * @constructor
 */
export const useUser = () => {
    const user = useContext(UserContext)
    if (!user) {
        throw new Error(`useUser must be used within a UserContext provider`)
    }
    return user
}
