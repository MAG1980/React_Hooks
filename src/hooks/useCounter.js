import {useState} from "react";


export const useCounter = ({initialValue = 0, delta}) => {
    const [counter, setCounter] = useState(initialValue)
    const increment = () => setCounter((prev) => prev + delta)
    const decrement = () => setCounter((prev) => prev - delta)
    return [counter, increment, decrement]
}
