import {UserContextProvider} from "./UserContextProvider";
import {TopPanel} from "./TopPanel";
import {Profile} from "./Profile";
import {TodoListContextProvider} from "./TodoListContextProvider";

const USER_ID = 1
export const UsingContext = () => {
    return (
        <UserContextProvider userId={USER_ID}>
            <TodoListContextProvider userId={USER_ID}>
                <TopPanel/>
                <Profile/>
                {/*<TodoList/>*/}
            </TodoListContextProvider>
        </UserContextProvider>
    )
}
