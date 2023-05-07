import {useUser} from "./hooks/useUser";
import {useTodoList} from "./hooks/useTodoList";
import {AppContext} from "./hooks/useAppContext"

export function AppContextProvider({userId, children}) {
    const user = useUser(userId)
    console.log(user)
    const todoList = useTodoList(userId)
    console.log(todoList)
    const context = {
        loading: user.loading,
        error: user.error,
        user: user.data,
        todoList: todoList.data,
    }
    console.log(context)
    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}
