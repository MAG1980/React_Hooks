import {useEffect, useRef} from "react";

/**
 * Возвращает значение state или props предыдущего рендера, а не предыдущее значение
 * аналог метода жизненного цикла componentDidUpdate
 * @param value
 * @returns {*}
 */
export function usePrevious(value) {
    const refContainer = useRef(value);

    //При изменении value произойдёт рендер, а затем сработает хук useEffect,
    //при этом в refContainer.current будет сохранено новое значение value,
    //но, т.к. хук useRef в отличие от useState  при изменении хранимого значения не вызывает рендер компонента,
    //UI не обновится на месте переменной, получающей значение refContainer.current,
    //пользователь будет видеть предыдущее значение величины,
    //несмотря на то, что в refContainer.current уже хранится актуальное значение value.
    //Оно будет отображено при следующем рендере, в том числе,
    //рендере родительского компонента, что приведёт к отрисовке текщего значения.
    useEffect(() => {
        refContainer.current = value
    }, [value]);

    return refContainer.current
}
