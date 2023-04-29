import {useEffect, useState} from "react";

/**
 * Через равные интервалы времени возвращает подстстроку увеличивающейся длины, полученную из исходной
 * @param text исходная строка текста
 * @param delayMs интервал отображения символов
 * @returns {string} подстрока
 */
export function useAnimatedText(text, delayMs) {
    //Позиция последнего символа отображаемой подстроки.
    const [currentPos, setCurrentPos] = useState(0);

    useEffect(() => {
        //
        const intervalHandle = setInterval(() => {
            setCurrentPos((pos) => {
                //Проверка текущей позиции на соответствие последнему символу строки
                const isLast = pos === text.length - 1

                //Если символ не последний, увеличиваем длину отображаемой строки на 1
                //По достижении конца строки номер последнего отображаемого символа сбрасывается на 0
                return isLast ? 0 : pos + 1
            })
        }, delayMs)
        return () => {
            clearInterval(intervalHandle)
        };
    }, [text, delayMs]);

    //Возвращаем строку, образанную до текущей позиции
    return text.substring(0, currentPos)
}
