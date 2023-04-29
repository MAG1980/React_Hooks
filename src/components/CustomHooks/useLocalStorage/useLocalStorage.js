import {useState} from "react";

/**
 * Проверка аргумента на принадлежность к типу function
 * @param valueOrFunction
 * @return {boolean}
 */
function isFunction(valueOrFunction) {
    return typeof valueOrFunction === 'function'
}

/**
 * Предоставляет удобный API для работы с localStorage.
 * Вызывает ререндер компонента при обновлении данных в localStorage.
 * @param key
 * @param initialValue
 * @return {unknown[]}
 */
export function useLocalStorage(key, initialValue) {
    //Принимает callback в качестве начального значения для ленивой инициализации
    const [storedValue, setStoredValue] = useState(() => {
        try {
            //Попытка получить из localStorage ранее сохранённого значения
            const item = window.localStorage.getItem(key)
            if (item) {
                //По умолчанию в localStorage все данные, в том числе и объекты, хранятся в string
                return JSON.parse(item)
            }

            //Если ранее сохранённое значение в localStorage отсутствует,
            //то рассчитывает начальное значение state в зависимости от того, является ли initialValue функцией
            const evaluated = isFunction(initialValue)
                ? initialValue()
                : initialValue

            //Сохраняет в localStorage преобразованное в строку вычисленное начальное значение по переданному ключу
            window.localStorage.setItem(key, JSON.stringify(evaluated))
            return evaluated
        } catch (error) {
            console.error(error)
            return initialValue
        }
    });

    /**
     * Модифицированный setter
     * @param newValue
     */
    const setValue = (newValue) => {
        try {
            //Если в качестве аргумента передана функция,
            //то вызываем её с текущим значением, хранящимся в state (storedValue),
            // переданным в качестве аргумента
            const evaluated = isFunction(newValue) ? newValue(storedValue) : newValue

            //Сохраняем данные в localStorage
            window.localStorage.setItem(key, JSON.stringify(evaluated))

            //Вызываем рендер компонента, получающие данные, возвращаемые хуком
            setStoredValue(evaluated)
        } catch (error) {
            console.error(error)
        }
    }

    //Возвращаем state, содержимое которого соответствует localStorage
    //с модифицированным сеттером
    return [storedValue, setValue]
}