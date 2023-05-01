import {useCallback, useEffect, useRef, useState} from "react";

/**
 * Вызывает callback с заданным timeout
 * @param callback функция
 * @param timeout время задержки перед началом выполнения
 */
export function useTimeout(callback, timeout) {
    const callbackRef = useRef()
    const [timeoutHandle, setTimeoutHandle] = useState(null)
    const [restartTrigger, setRestartTrigger] = useState({})

    //Использован useEffect, чтобы при изменении ссылки на callback
    // не происходило перезапуска timeout
    useEffect(() => {
        callbackRef.current = callback
    }, [callback]);

    useEffect(() => {
        const handle = setTimeout(() => {
            setTimeoutHandle(null)
            if (callbackRef.current) {
                callbackRef.current()
            }
        }, timeout)

        //Сохраняем handle в state, чтобы вернуть из хука isRunning
        setTimeoutHandle(handle)
        return () => {
            clearTimeout(handle)
        };
    }, [timeout, restartTrigger]);

    const isRunning = !!timeoutHandle
    // const isRunning = Boolean(timeoutHandle)

    /**
     * Отмена таймера
     * @type {(function(): void)|*}
     */
    const cancel = useCallback(
        () => {
            if (timeoutHandle) {
                clearTimeout(timeoutHandle)
                setTimeoutHandle(null)
            }
        },
        [timeoutHandle],
    );


    /**
     * Перезапуск таймера (вызывается ререндером компонента)
     * @type {(function(): void)|*}
     */
    const restart = useCallback(
        () => {
            setRestartTrigger({})
        },
        [],
    );
    return {isRunning, cancel, restart}
}