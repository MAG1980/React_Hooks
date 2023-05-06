import {useContext} from "react";
import {MasterDetailContext} from "./MasterDetailContextProvider";

export function useMasterDetailContext() {
    const context = useContext(MasterDetailContext)
    if (!context) {
        throw new Error("useMasterDetailContext must be used within a MasterDetailContextProvider")
    }
    return context
}
