import {useEffect, useRef} from "react";

/**
 * Вычисляет состояние компонента
 * @returns {React.MutableRefObject<boolean>} состояние компонента в Ref-контейнере
 */
export function useMountedRef() {
    //При монтировании компонента хук возвращает true
    const isMountedRef = useRef(true);

    //При размонтировании компонента хук вернёт false
    useEffect(() => {
        //Функция будет объявлена в конце первого рендера
        const beforeUnmount = () => {
            isMountedRef.current = false
        }
        //но выполнится эта функция только при размонтировании компонента
        return beforeUnmount
    }, []);

    return isMountedRef
}
