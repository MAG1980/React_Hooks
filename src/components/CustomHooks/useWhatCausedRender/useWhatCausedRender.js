import {useEffect, useRef} from "react";

/**
 * Выводит в консоль причину повторного рендеринга компонентов
 * (сравнивает текущие и предыдущие props)
 * @param name  название отслеживаемеого компонента
 * @param props props
 */
export function useWhatCausedRender(name, props) {
    const prevPropsRef = useRef({});

    //Сравнение props выполняется после каждого рендера благодаря пустому массиву зависимостей
    useEffect(() => {
        const changes = []
        const prevProps = prevPropsRef.current

        //Набор, состоящий из всех свойств предыдущих и текущих props компонента без повторения
        const keySet = new Set([
            ...Object.keys(prevProps),
            ...Object.keys(props)
        ])

        keySet.forEach(key => {
            if (props[key] !== prevProps[key]) {
                changes.push({
                    key,
                    from: prevProps[key],
                    to: props[key]
                })
            }
        })

        console.log(`[${name}] rendered because of:`)
        changes.forEach(change => {
            const {key, from, to} = change
            console.log(`   ${key}: ${from} => ${to}`)
        })

        //Сохраняем в Ref-контейнере новые значения props
        prevProps.current = props
    });

}
