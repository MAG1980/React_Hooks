import {AppContext} from "./hooks/useAppContext";
import {useUser} from "./hooks/useUser";
import {useTodoList} from "./hooks/useTodoList";

export function AppContextProvider({userId, children}) {
    const user = useUser(userId)
    const toDoList = useTodoList(userId)
    const context = {...user, ...toDoList}
    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}