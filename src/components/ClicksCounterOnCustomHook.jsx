import {useCounter} from "../hooks/useCounter";

const initValue = 1;
const delta = 3
export const ClicksCounterOnCustomHook = ({initValue}) => {
    const [counter, increment, decrement] = useCounter({initValue, delta})
    return (
        <form>
            <h3>{counter}</h3>
            <button
                type="button"
                onClick={increment}>Прибавить
            </button>
            <button
                type="button"
                onClick={()=>decrement()}>Отнять
            </button>
        </form>
    )
}
