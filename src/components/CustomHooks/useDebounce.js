import {useEffect, useState} from "react";

/**
 * Возвращает отфильтрованное по интервалу обновления (времени задержки) значение
 * @param value входное значение
 * @param delay время задержки
 */
export function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    //Сохраняет в state новое значение с задержкой
    //
    useEffect(() => {
        const timeoutHandle = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        //Если value или delay изменятся до вызова callback в setTimeout, то отсчёт начнётся заново
        return () => {
            clearTimeout(timeoutHandle)
        }
    }, [value, delay]);


    return debouncedValue
}
