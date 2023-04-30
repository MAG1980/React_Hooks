import {useCallback, useRef, useState} from "react";
import {useElementSize} from "../useElementSize/useElementSize";
import {v4 as uuid} from "uuid";
import {useInterval} from "./useInterval";
import {Particle} from "./Particle";
import "./style.css";

const PALETTE = ['#23d969', '#fd743a', '#c293df', '#d6ef3d', '#ba1d44']
const MIN_SIZE = 10
const MAX_SIZE = 40

const getRandomElement = (array) => {
    const index = Math.round(Math.random() * array.length)
    return array[index]
}

export const UseIntervalExample = () => {
    const [particles, setParticles] = useState([]);
    const spawnAreaRef = useRef()
    //Получаем размеры  DOM-элемента-контейнера
    const areaSize = useElementSize(spawnAreaRef)
    //Вычисляем допустимый максимальный отступ от края контейнера
    //в зависимости от максимальных допустимых размеров элемента,
    //чтобы генерируемые элементы располагались только в видимой области
    const maxLeft = areaSize.width - MAX_SIZE
    const maxTop = areaSize.height - MAX_SIZE

    //Добавляет в массив particles один элемент
    //Используем useCallback, чтобы ссылка на функцию не изменялась между рендерами
    const spawnParticle = useCallback(() => {
        setParticles((array) => {
            const newItem = {
                id: uuid(),
                //Вычисляем абсолютные координаты позиции относительно контейнера
                //Получаем случайные величины в диапазоне от 0 до maxLeft и maxTop
                left: Math.random() * maxLeft,
                top: Math.random() * maxTop,
                size: MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE),
                speed: Math.random() * 10,
                color: getRandomElement(PALETTE),
            }
            return [...array, newItem]
        })
    }, [maxLeft, maxTop]);

    //Вызываем callback spawnParticle через каждые 500 мс
    //Получаем API для управления спавнингом элементов
    const {isRunning, stop, restart} = useInterval(spawnParticle, 500)

    //Функции stop и restart, возвращаемые хуком, обёрнуты в callback,
    //чтобы однозначно указать, что мы вызываем их без аргументов,
    // т.к. при прямом вызове они примут в качестве аргумента event
    const stopSpawning = () => {
        stop()
    }

    const resumeSpawning = () => {
        restart()
    }

    return (
        <>
            <h2>useInterval example</h2>
            {isRunning ? (
                <button onClick={stopSpawning}>STOP</button>
            ) : (
                <button onClick={resumeSpawning}>RESUME</button>
            )}

            <div className="spawnArea" ref={spawnAreaRef}>
                {particles.map((p) => (
                    <Particle key={p.id} {...p} />
                ))}
            </div>
        </>
    )
}