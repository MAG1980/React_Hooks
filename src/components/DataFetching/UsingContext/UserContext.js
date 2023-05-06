import {createContext, useContext} from "react";

const UserContext = createContext()

export function useUserContext() {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('Trying to get Context outside of context provider.')
    }
}

export const UserContextProvider = ({userId, children}) => {

    return (
        <UserContext.Provider userId={userId}>
            {children}
        </UserContext.Provider>
    )
}
