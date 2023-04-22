import {useState, useCallback, useDebugValue} from "react";

/**
 * Хук для удобного хранения и изменения значения типа Boolean
 * @param initialValue Boolean
 */
export function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue || false);

    //Позволит видеть теущее значение value в ReactDevTools
    useDebugValue(value)

    //Используем хук useCallback с пустым массивом зависимостей,
    // чтобы ссылка на возвращаемый хуком useToggle сеттер всегда оставалась одной и той же.
    //В данном случае мемоизация оправдана, т.к. одно и то значение,
    //возвращаемое хуком будет использоваться во всех компонентах приложения.
    const toggle = useCallback(
        () => {
            setValue(prevValue => !prevValue)
        },
        [],
    );

    return [value, toggle]
}