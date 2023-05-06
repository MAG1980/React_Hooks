import {createContext, useContext, useMemo, useState} from "react";
import {Theme} from "./getThemeColor"

//Создание контекста
const ThemeContext = createContext()

/**
 * Пользовательский хук. Предоставляет доступ к ThemeContext.
 * @returns {unknown}
 */
export function useTheme() {
    //Сожраняет в переменную данные, хранимые в контексте
    const theme = useContext(ThemeContext);

    //Выбрасывает ошибку при попытке обращения к контексту за пределами провайдера
    if (!theme) {
        throw  new Error(`useTheme must be used within a ThemeProvider`)
    }
    return theme
}

//Компонент для передачи контекста вложенным компонентам
export function ThemeProvider(props) {
    //создаём state, который будем передавать дочерним компонентам
    const [theme, setTheme] = useState(Theme.GREEN);

    //Мемоизируем созданный state в зависимости от theme для оптимизации
    const value = useMemo(() => {
        return [theme, setTheme]
    }, [theme])

    //Возвращаем свойство Provider ранее созданного контекста
    //Передаём мемоизированный state с помощью props value в провайдер темы
    return <ThemeContext.Provider value={value} {...props} />
}
