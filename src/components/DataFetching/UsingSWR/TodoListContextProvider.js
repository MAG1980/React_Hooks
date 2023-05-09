import {ToDoListContext} from "./hooks/useTodoListContext";
import {useTodoList} from "./hooks/useTodoList";

export const TodoListContextProvider = ({userId, children}) => {
    const toDoList = useTodoList(userId)
    return (
        <ToDoListContext.Provider value={toDoList}>
            {children}
        </ToDoListContext.Provider>
    )
}