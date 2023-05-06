import {useCallback, useEffect} from 'react';
import {useCounter} from "../CustomHooks/useCounter";
import {useUpdateEffect} from "../CustomHooks/useUpdateEffect"

export const MemoizedCallback = () => {
    const [value, increment] = useCounter(0, 1)

    useEffect(() => {
        console.log('Component is mounted!')
    }, [])

    console.log(`Render. Value = ${value}`)


    //Ссылка на callback изменится при изменении значения счётчика кликов
    const memoizedCallback = useCallback(
        () => {
            console.log(`Value is updated! Value: ${value}`)
        },
        [value],
    );

    //memoizedCallback выполняется каждый раз при изменении ссылки на него, кроме первого рендера.
    useUpdateEffect(memoizedCallback)

    return (
        <>
            <button onClick={increment}>Rerender</button>
        </>
    )
}
