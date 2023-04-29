import {useCallback, useEffect, useState} from "react";
import {useEventListener} from "../useEventListener";

const INITIAL_SIZE = [0, 0]

/**
 * Возвращает текущие размеры окна браузера при каждом изменении его размеров
 * @return {number[]} [innerWidth, innerHeight]
 */
export function useWindowSize() {
    const [size, setSize] = useState(INITIAL_SIZE);

    //Срабатывает только при монтировании компонента
    useEffect(() => {
        const {innerWidth, innerHeight} = window
        setSize([innerWidth, innerHeight])
    }, []);

    //При каждом изменении размеров окна браузера (событие resize) вызывается мемоизированный обработчик,
    // который сохраняет в state текущие размены окна
    useEventListener(
        'resize',
        useCallback(
            (event) => {
                //Получаем текущие размеры окна браузера из объекта события
                const {innerWidth, innerHeight} = event.target
                setSize([innerWidth, innerHeight])
            },
            [],
        )
    )

    return size
}