import {useState} from "react";


export const useCounter = (initialValue = 0, delta) => {
    const [counter, setCounter] = useState(initialValue)
    console.log(delta)
    const increment = () => setCounter((prev) => prev + parseFloat(delta))
    const decrement = () => setCounter((prev) => prev - parseFloat(delta))
    return [counter, increment, decrement]
}
