import {AppContextProvider} from "./AppContextProvider";
import {SWRConfig} from "swr";
import {TopPanel} from "./TopPanel";
import {Profile} from "./Profile";
import {TodoList} from "./TodoList";
import {fetcher} from "./api/fetcher";

//Дефолтные параметры хука SWR
//Они могут быть переопределены при каждом вызове хука useSWR(3 параметра)
const SWR_CONFIG = {
    //асинхронная функция, возвращающая данные, полученные от сервера
    fetcher,
}

export function UsingSWR() {
    return (
        <AppContextProvider>
            <SWRConfig value={SWR_CONFIG}>
                <TopPanel/>
                <Profile/>
                <TodoList/>
            </SWRConfig>
        </AppContextProvider>
    )
}