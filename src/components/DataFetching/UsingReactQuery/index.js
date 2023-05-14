import {QueryClient, QueryClientProvider} from "react-query";
import {AppContextProvider} from "./AppContextProvider";
import {TopPanel} from "./TopPanel";
import {Profile} from "./Profile";
import {TodoList} from "./TodoList";

/*Создаём клиента ReactQuery,
ссылка на который будет доступна во всём приложении с помощью библиотечного хука useQueryClient*/
const queryClient = new QueryClient()
export const UsingReactQuery = () => {
    return (
        /* Передаём ссылку на созданный клиент ReactQuery в провайдер */
        <QueryClientProvider client={queryClient}>
            <AppContextProvider>
                <TopPanel/>
                <Profile/>
                <TodoList/>
            </AppContextProvider>
        </QueryClientProvider>
    )
}