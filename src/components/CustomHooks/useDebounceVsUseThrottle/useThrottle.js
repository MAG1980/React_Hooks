import {useEffect, useRef, useState} from "react";

export function useThrottle(value, delay) {
    const [throttledValue, setThrottledValue] = useState(value);
    //Для хранения данных использован useRef, т.к. он не вызывает rerender
    const valueRef = useRef(value);

    //Хранение текущего значения во временной переменной
    useEffect(() => {
        valueRef.current = value
    }, [value]);

    //Сохранение текущего значения переменной в state через заданные промежутки времени
    useEffect(() => {
        const intervalHandler = setInterval(() => {
            setThrottledValue(valueRef.current)
        }, delay)

        //Очистка предыдущего setInterval
        return clearInterval(intervalHandler)
    }, [delay]);

    return throttledValue
}
