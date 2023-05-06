import {useContext} from "react";
import {ContactsContext} from "./ContactsProvider"

/**
 * Хук для получения доступа к контексту компонента ContactsProvider
 * @returns context
 */
export function useContacts() {
    //Получаем доступ к контексту компонента ContactsProvider
    const context = useContext(ContactsContext);
    if (!context) {
        throw new Error(`Contacts context can be accessed only under ContactsProvider`)
    }
    return context
}
