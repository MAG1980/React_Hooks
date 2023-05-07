import {createContext, useContext} from "react";

export const AppContext = createContext()

export function useAppContext() {
    const context = useContext(AppContext);
    return context
}
