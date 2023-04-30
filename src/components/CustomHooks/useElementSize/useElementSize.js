import {useCallback, useEffect, useState} from "react";
import {useEventListener} from "../useEventListener";

const DEFAULT_SIZE = {
    width: 0,
    height: 0
}

/**
 * Возвращает размеры DOM-элемента (контейнера)
 * @param elementRef ссылка на DOM-элемент
 * @return {{width: number, height: number}}
 */
export function useElementSize(elementRef) {
    const [size, setSize] = useState(DEFAULT_SIZE)

    /**
     * Сохраняет в state размеры DOM-элемента
     * @type {(function(): void)|*}
     */
    const updateElementSize = useCallback(
        () => {
            const node = elementRef.current
            if (node) {
                const {width, height} = node.getBoundingClientRect()
                setSize({width, height})
            }
        },
        [elementRef],
    );

    //Эффект срабатывает при изменении ссылки на DOM-элемент за счёт useCallback, зависящего от elementRef
    useEffect(() => {
        updateElementSize()
    }, [updateElementSize]);

    //Подписка на событие resize объекта Window
    useEventListener('resize', updateElementSize)

    return size
}