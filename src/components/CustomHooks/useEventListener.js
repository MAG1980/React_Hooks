import {useEffect, useRef} from "react";

/**
 *Подписка на глобальное событие событие объекта Window, либо другого DOM-элемента, не находящегося под
 * контролем React)
 * @param eventName Название события
 * @param handler функция-обработчик события
 * @param element DOM-элемент, на события которого производится подписка
 */
export function useEventListener(eventName, handler, element = window) {
    //Чтобы не подписываться заново, когда изменяется handler, используем useRef
    const saveHandler = useRef();
    //При изменении handler сохраняем ссылку на него в Ref-контейнере
    useEffect(() => {
        saveHandler.current = handler
    }, [handler]);

    //Подписка на выполнение обработчика заданного события на заданном элементе
    useEffect(() => {
        //Проверка поддержки метода addEventListener DOM-элементом
        const isSupported = element && element.addEventListener
        if (!isSupported) {
            throw new Error('addEventListener is not supported by ' + element)
        }

        /**
         * Вызывает обработчик события из Ref-контейнера для текущего события
         * @param event
         */
        const eventListener = (event) => {
            //Проверка handler на существование
            if (saveHandler.current) {
                //Передаём событие текущему обработчику, хранящемуся в Ref-контейнере
                saveHandler.current(event)
            }
        }

        //Подписка на выполнение обработчика заданного события на заданном элементе
        element.addEventListener(eventName, eventListener)

        //Очистка от подписки при демонтаже компонента
        return () => {
            element.removeEventListener(eventName, eventListener)
        }

    }, [eventName, element]);

}
