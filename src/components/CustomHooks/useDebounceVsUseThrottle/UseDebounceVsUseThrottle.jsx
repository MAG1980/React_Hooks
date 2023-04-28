import {useCallback, useEffect, useState} from "react";
import {useDebounce} from "./useDebounce";
import {useEventListener} from "../useEventListener";
import {Point} from "./Point";

const INITIAL_POSITION = {
    clientX: 0,
    clientY: 0
}
export const UseDebounceVsUseThrottle = () => {
    const [lastPos, setLastPos] = useState(INITIAL_POSITION);
    const debouncedPos = useDebounce(lastPos, 300)

    const [path, setPath] = useState([])
    const [debouncedPath, setDebouncedPath] = useState([])

    //Сохранение в массив всех координат положений мыши
    useEventListener(
        'mousemove',
        useCallback(
            (event) => {
                const {clientX, clientY} = event
                const pos = {clientX, clientY}
                setLastPos(pos)
                setPath(array => [...array, pos])
            },
            [],
        )
    )

    //Добавление в массив координат положений мыши с Debounce
    useEffect(() => {
        setDebouncedPath(debouncedPath => [...debouncedPath, debouncedPos])
    }, [debouncedPos]);

    return (
        <>
            {/*Точки, координаты которых сохранены с debounce, отображаются выше*/}
            <h2>UseDebounce vs useThrottle</h2>
            {path.map((pos, index) => (
                <Point key={index} left={pos.clientX} top={pos.clientY} color="#F88"/>
            ))}
            {debouncedPath.map((pos, index) => (
                <Point key={index} left={pos.clientX} top={pos.clientY} color="#8FF"/>
            ))}
        </>
    )
}
