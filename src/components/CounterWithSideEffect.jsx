import {useCounter} from "../hooks/useCounter";
import {useEffect} from "react";

//Имитирует асинхронный ответ сервера
const updateClicksCount = (clicksCount) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                clicksCount
            })
        }, 1000)
    })

}
export const CounterWithSideEffect = () => {
    const [counter, increment, decrement] = useCounter(0, 1)

    //Обновление поля title HTML
    useEffect(() => {
        document.title = `Counter №${counter}`
    }, [counter])

    //Отправка нового значения счётчика на сервер и получение ответа
    useEffect(() => {
        const update = async () => {
            const response = await updateClicksCount(counter)
            console.log(response)
        }
        update()
    }, [counter])
    return (
        <>
            <p>Current count: {counter}</p>
            <button onClick={increment}>Прибавить</button>
            <button onClick={decrement}>Отнять</button>
        </>
    )
}