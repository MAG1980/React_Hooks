import {UserContext} from "./User/UserContext";
import {UserAvatar} from "./User/UserAvatar";
import {UserTitle} from "./User/UserTitle";

const style = {
    padding: 10,
    borderWidth: 2,
    border: '2px dashed #DDDDDD'
}

const user = {
    firsName: 'Jack',
    middlename: 'the',
    lastName: 'Cat',
    avatarUrl: 'https://cataas.com/cat'

}

/**
 * Отображает информацию о текущем пользователе
 * @returns {JSX.Element}
 * @constructor
 */
export const UserPanel = () => {
    return (
        <div style={style}>
            <UserContext.Provider value={user}>
                <UserAvatar/>
                <br/>
                <UserTitle/>
            </UserContext.Provider>
        </div>
    )
}
