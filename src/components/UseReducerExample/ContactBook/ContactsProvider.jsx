import {createContext, useReducer} from "react";
import {initialState} from "./ContactsContent";
import {contactsReducer} from "./contactsReducer";

export const ContactsContext = createContext()

//Предоставляем вложенным компонентам доступ к reducer через context.provider
export const ContactsProvider = (props) => {
    const [state, dispatch] = useReducer(contactsReducer, initialState);
    return (
        <ContactsContext.Provider value={[state, dispatch]} {...props}></ContactsContext.Provider>
    )
}

