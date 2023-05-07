import {Profile} from "./Profile";
import {TopPanel} from "./TopPanel";
import {AppContextProvider} from "./AppContextProvider";
import {TodoList} from "./TodoList";

const USER_ID = 1
export const UsingContext = () => {
    return (
        <AppContextProvider userId={USER_ID}>
            {/*<UserContextProvider userId={USER_ID}>
                <TodoListContextProvider userId={USER_ID}>*/}
            <TopPanel/>
            <Profile/>
            <TodoList/>
            {/*   </TodoListContextProvider>
            </UserContextProvider>*/}
        </AppContextProvider>
    )
}
