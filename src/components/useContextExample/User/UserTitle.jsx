import {useUser} from "./UserContext";

const style = {
    fontFamily: 'monospace',
    fontSize: 24,
    margin: 10
}

export const UserTitle = () => {
    //Извлекаем данные о пользователе из UserContext с помощью пользовательского хука
    const {firstName, middleName, lastName} = useUser()

    return (
        <span style={style}>
            {`${firstName} ${middleName} ${lastName}`}
        </span>
    )
}
