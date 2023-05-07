import {createContext, useContext} from "react";

export const ToDoListContext = createContext()

export function useTodoListContext() {
    const context = useContext(ToDoListContext);
    if (!context) {
        throw new Error('Trying to get Context outside of context provider.')
    }
    return context
}