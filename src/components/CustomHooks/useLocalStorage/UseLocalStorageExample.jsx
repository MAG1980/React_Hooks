import {useLocalStorage} from "./useLocalStorage";

const DEFAULT_USER = {
    firstName: 'John',
    lastName: 'Connor'
}

const inputStyle = {
    margin: 0,
    padding: 5,
    border: '1px dashed #000',
    borderRadius: 15,
    outline: 'none',
    fontWeight: '600',
    color: '#000'
}

export const UseLocalStorageExample = () => {
    const [user, setUser] = useLocalStorage('user', DEFAULT_USER);
    const [position, setPosition] = useLocalStorage('position', 'React Developer');
    const [age, setAge] = useLocalStorage('age', 25);

    const updateFirstName = (event) => {
        setUser((user) => ({
            ...user,
            firstName: event.target.value,
        }))
    }

    const updateLastName = (event) => {
        setUser((user) => ({
            ...user,
            lastName: event.target.value,
        }))
    }

    const updatePosition = (event) => {
        setPosition(event.target.value)
    }

    const updateAge = (event) => {
        //Предварительно преобразуем строку в integer
        setAge(parseInt(event.target.value))
    }

    return (
        <>
            <h2>useLocalStorage example</h2>
            <input
                type="text"
                style={inputStyle}
                placeholder="First name"
                value={user.firstName}
                onChange={updateFirstName}
            />
            <input
                type="text"
                style={inputStyle}
                placeholder="Last name"
                value={user.lastName}
                onChange={updateLastName}
            />
            <input
                type="text"
                style={inputStyle}
                placeholder="Position"
                value={position}
                onChange={updatePosition}
            />
            <input
                type="number"
                style={inputStyle}
                placeholder="Age"
                value={age}
                onChange={updateAge}
            />
        </>
    )
}