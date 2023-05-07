import {createContext, useContext} from "react";

//Несмотря на то вложенные компоненты будут получать доступ к контексту с помощью кастомного хука,
//требуется экспортировать сам объект контекста, т.к. только он содержит свойство Provider
export const UserContext = createContext()

/**
 *Возвращает объект с данными, хранящимися в UserContext
 * @return {
 *         loading:boolean,
 *         data: object,
 *         error: string
 *     }
 */
export function useUserContext() {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('Trying to get Context outside of context provider.')
    }

    return context
}