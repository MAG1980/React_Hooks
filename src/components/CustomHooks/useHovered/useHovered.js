import {useEffect, useState} from "react";

export function useHovered(elementRef) {
    const [hovered, setHovered] = useState(false)

    //Срабатывает при изменении ссылки на элемент
    useEffect(() => {
        //Проверка существования ссылки на элемент
        if (!elementRef.current) {
            return
        }

        const handleMouseOver = () => {
            setHovered(true)
        }

        const handleMouseOut = () => {
            setHovered(false)
        }

        const node = elementRef.current

        //Подписка на события мыши
        node.addEventListener('mouseover', handleMouseOver)
        node.addEventListener('mouseout', handleMouseOut)

        return () => {
            //Очистка
            node.removeEventListener('mouseover', handleMouseOver)
            node.removeEventListener('mouseout', handleMouseOut)
        };
    }, [elementRef]);

    return hovered
}
