import {useCallback, useEffect, useRef, useState} from "react";

/**
 * Использование таймера повторяющегося действия в декларативном стиле
 * @return {{stop: () => void, isRunning: *, restart: *}} функция для остановки, текущее состояние, функция для перезапуска
 */
export function useInterval(callback, delay) {
    const callbackRef = useRef(callback);
    const [intervalHandle, setIntervalHandle] = useState(null);
    const [trigger, setTrigger] = useState();

    //Использовать связку useCallback и useEffect в данном случае необязательно.
    //Но это гарантия того, что useInterval будет всегда отрабатывать с одинаковой задержкой,
    //даже если callback будет меняться в зависимости от логики работы компонента,
    //т.к. useEffect отрабатывает после рендера.
    useEffect(() => {
        callbackRef.current = callback
    }, [callback]);

    //Выполняет сохранённый в Ref-контейнере callback
    useEffect(() => {
        const interval = setInterval(() => {
            if (callbackRef.current) {
                callbackRef.current()
            }
        }, delay);

        //Сохраняем номер interval в state для остановки вызовом функции stop снаружи useEffect
        //Для хранения номера interval используем именно useState, а не useRef,
        //т.к. требуется, чтобы при изменении номера interval происходил ререндер,
        //т.к. от значения intervalHandle зависит параметр isRunning, возвращаемый хуком.
        //(чтобы изменения isRunning незамедлительно триггерили апдейт компонента)
        setIntervalHandle(interval)

        return () => {
            clearInterval(interval)
        };
    }, [delay, trigger]);

    const isRunning = !!intervalHandle

    const stop = useCallback(() => {
        if (intervalHandle) {
            clearInterval(intervalHandle)
            setIntervalHandle(null)
        }
    }, [intervalHandle])

    /**
     * Вызывает рендер компонента путём сохранения пустого объекта в state
     * Функция обёрнута в useCallback, чтобы ссылка на неё не изменилась
     * при ререндерах компонента и возвращении функции хуком
     * @type {(function(): void)|*}
     */
    const restart = useCallback(
        () => {
            setTrigger({})
        },
        [],
    );


    return {isRunning, stop, restart}
}