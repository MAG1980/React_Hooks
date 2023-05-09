import {AppContext} from "./hooks/useAppContext"
import {useState} from "react";

const USER_ID = 2


export function AppContextProvider({children}) {
    const [userId, setUserId] = useState(USER_ID);
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
