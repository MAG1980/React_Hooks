import {createContext} from "react";

export const MasterDetailContext = createContext()

export const MasterDetailContextProvider = ({value, children}) => {

    return (
        <MasterDetailContext.Provider value={value}>
            {children}
        </MasterDetailContext.Provider>
    )
}
