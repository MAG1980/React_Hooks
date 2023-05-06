import {useCounter} from "../CustomHooks/useCounter";

const delta = 3
export const ClicksCounterOnCustomHook = ({initValue, delta}) => {
    const [counter, increment, decrement] = useCounter(initValue, delta)
    return (
        <form>
            <h3>{counter}</h3>
            <button
                type="button"
                onClick={increment}>Прибавить
            </button>
            <button
                type="button"
                onClick={() => decrement()}>Отнять
            </button>
        </form>
    )
}
