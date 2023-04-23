import {useCallback, useState} from "react";

/**
 * Фабрика хуков
 * @param mapper функция преобразования входного значения
 * @return [value, setMappedValue] [значение. функция-маппер, применяемая ко входным значениям при их обновлении]
 */
export function createMapState(mapper) {
    return function (initialValue) {
        //Пропускаем initialValue через функцию-mapper, преобразующую входные данные.
        const [value, setValue] = useState(mapper(initialValue));

        //Сохраняем ссылку на функцию постоянной с помощью useCallback с пустым массивом зависимостей.
        const setMappedValue = useCallback(
            (newValue) => {
                //Пропускаем newValue через функцию-mapper, преобразующую входные данные.
                setValue(mapper(newValue))
            },
            [],
        );


        return [value, setMappedValue]
    }
}