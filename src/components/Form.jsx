import {useState} from "react";

const initState = 0;
export const Form = () => {
    const [clicks, setClicks] = useState(initState);

    //Благодаря использованию callback-функции в качестве аргумента сеттера, всегда работаем с актуальным занчением state,
    //т.к. при каждом вызове функции планируется отложенный вызов callback
    const inrcementClicks = () => setClicks(prev => prev + 1)

    //При асинхронных вызовах данная функция может получать устаревшее значение state,
    //т.к. сеттере useState используется значение clicks, находящееся в state в момент клика.
    const decrementClicks = () => setClicks(clicks - 1)
    const inrcementClicksWithDelay = () => {
        setTimeout(inrcementClicks, 2000)
    }
    const decrementClicksWithDelay = () => {
        setTimeout(decrementClicks, 2000)
    }
    return (
        <form>
            <h3>{clicks}</h3>
            <button
                type="button"
                onClick={inrcementClicksWithDelay}>Прибавить с задержкой
            </button>
            <button
                type="button"
                onClick={decrementClicksWithDelay}>Отнять с задержкой
            </button>
        </form>
    )
}
