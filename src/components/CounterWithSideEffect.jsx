import {useCounter} from "../hooks/useCounter";
import {useEffect} from "react";

const updateClicksCount = (clicksCount)=>{
    return new Promise((resolve) =>{
        setTimeout (()=>{
            resolve({
                success: true,
                clicksCount
            })
        }, 1000)
    })

}
export const CounterWithSideEffect = () => {
    const [counter, increment, decrement] = useCounter(0, 1)

    useEffect(()=>{
        document.title = `Counter №${counter}`
    },[counter])
    return (
        <>
            <p>Current count: {counter}</p>
            <button onClick={increment}>Прибавить</button>
            <button onClick={decrement}>Отнять</button>
        </>
    )
}