import {useMergedState} from "../hooks/useMergedState";

const initState = {
    name: '',
    surname: '',
    age: 21
}

export const ExampleForm = () => {
    const [mergedState, mergeState] = useMergedState(initState);

    const clear = () => {
        mergeState(initState)
    }

    return (
        <div style={{
            margin: "0 auto",
            width: "25%",
            padding: "25px",
            backgroundColor: '#f2f2f2'
        }}
        >
            <form style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",

            }}>
                <input
                    type="text"
                    name='name'
                    value={mergedState.name}
                    onChange={(event) => {
                        console.log(event.target.value)
                        mergeState({name:event.target.value})
                        console.log(mergedState)
                    }}
                />
                <input
                    type='text'
                    name='surname'
                    value={mergedState.surname}
                    onChange={(event) => {
                        mergeState({surname: event.target.value})
                        console.log(mergedState)
                    }}
                />
                <input
                    type="number"
                    name='age'
                    value={mergedState.age}
                    onChange={(event) => mergeState({age:parseInt(event.target.value)})}
                />
                <button onClick={clear}>
                    Очистить
                </button>
            </form>

            <div>
                <p>Имя: {mergedState.name}</p>
                <p>Фамилия: {mergedState.surname}</p>
                <p>Возраст: {mergedState.age}</p>
            </div>
        </div>
    )
}

