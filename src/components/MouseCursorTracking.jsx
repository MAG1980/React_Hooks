import {useCallback, useState} from "react";
import {useEventListener} from "./CustomHooks/useEventListener";

export const MouseCursorTracking = () => {
    const [coords, setCoords] = useState([]);
    const onMouseMove = useCallback(
        (event) => {
            //Получаем координаты курсора мыши из объекта события
            const {clientX, clientY} = event
            //Координаты новой точки
            const newPoint = {x: clientX, y: clientY}
            //Добавляем объект с координатами новой точки в state
            setCoords((array) => [...array, newPoint])
        },
        [],
    );

    useEventListener('mousemove', onMouseMove)

    return (
        <>
            {coords.map((point, index) => {
                    const style = {
                        position: 'absolute',
                        left: point.x,
                        top: point.y,
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        backgroundColor: '#F66'
                    }
                    return <div key={index} style={style}/>
                }
            )}
        </>
    )
}
