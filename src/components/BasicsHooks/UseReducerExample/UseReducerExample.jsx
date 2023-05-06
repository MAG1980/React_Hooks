import {useReducer} from "react";
import {ContactBook} from "./ContactBook/ContactBook";

const initialState = {
    count: 0
}

//Типы actions нужно хранить в констатах,
// чтобы измбежать ошибок, вызванных опечатками
const Types = {
    INCREMENT: 'INCREMENT',
    DOUBLE: 'DOUBLE',
    CLEAR: 'CLEAR'
}

//Чистая функция, которая принимает объект action (действие, возможно, с payload) и возвращает новое состояние
function reducer(state, action) {
    switch (action.type) {
        case Types.INCREMENT:
            return {
                ...state, count: state.count + 1
            }
        case Types.DOUBLE:
            return {
                ...state, count: state.count * 2
            }
        case Types.CLEAR:
            return initialState

        //Если action не будет опознан,\
        // то reducer вернёт предыдущее состояние,
        // а не undefined
        default:
            console.log(`action type: ${action.type} was not recognized`)
            return state
    }
}

export const UseReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = () => dispatch({type: Types.INCREMENT})
    const double = () => dispatch({type: Types.DOUBLE})
    const clear = () => dispatch({type: Types.CLEAR})
    return (
        <>
            <div>
                <h2>useReducer example</h2>
                <p>Clicks count: {state.count}</p>
                <button onClick={increment}>+1 Click</button>
                <button onClick={double}>Double clicks</button>
                <button onClick={clear}>Clear</button>
            </div>
            <ContactBook/>
        </>
    )
}
