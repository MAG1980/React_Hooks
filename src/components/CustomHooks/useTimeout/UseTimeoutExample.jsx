import {useCallback, useEffect, useRef, useState} from "react";
import {useTimeout} from "./useTimeout";
import {useElementSize} from "../useElementSize/useElementSize";
import {Square} from "./Square";
import {v4 as uuid} from "uuid";

const SQUARE_SIZE = 30;
const FIVE_SECONDS = 5000;
const SQUARES_COUNT = 25;

const spawnAreaStyle = {
    marginTop: 20,
    border: '2px dashed gray',
    width: '100%',
    height: 300,
    position: 'relative',
};

/**
 * Возвращает массив квадратов, сгенерированный случайным образом?
 * расположенных в пределах заданной области
 * @param count количество квадратов
 * @param areaSize размеры родительского компонента
 * @return {*[]}
 */
const generateSquares = (count, areaSize) => {
    const squares = []
    for (let i = 0; i < count; i++) {
        squares.push({
            id: uuid(),
            left: Math.random() * (areaSize.width - SQUARE_SIZE),
            top: Math.random() * (areaSize.height - SQUARE_SIZE),
            size: SQUARE_SIZE,
            wasHit: false
        })
    }
    return squares
}

export const UseTimeoutExample = () => {
    const [squares, setSquares] = useState([]);

    //Получение размеров элемента-контейнера
    const spawnAreaRef = useRef();
    const areaSize = useElementSize(spawnAreaRef);

    //Как только область становится доступна, заполняется массив квадратов
    useEffect(() => {
        if (areaSize.width > 0 && areaSize.height > 0) {
            setSquares(generateSquares(SQUARES_COUNT, areaSize));
        }
    }, [areaSize]);

    /**
     * Возвращает количество поражённых квадратов
     * Оповещает об окончании игры и её результатах
     * @type {(function(): void)|*}
     */
    const onTimeout = useCallback(() => {
        const score = squares.filter((s) => s.wasHit).length;
        alert(`Time's up! Your score is ${score}`);
    }, [squares]);

    //Настройка времени задержки выполнения функции
    const timeoutHook = useTimeout(onTimeout, FIVE_SECONDS);
    const {isRunning: isTimeoutRunning, restart: restartTimeout} = timeoutHook;

    /**
     *
     * @type {(function(*): void)|*}
     */
    const handleHit = useCallback((squareId) => {
        setSquares((array) =>
            array.map((s) => {
                if (s.id !== squareId) {
                    return s;
                }
                return {
                    ...s,
                    wasHit: true,
                };
            })
        );
    }, []);

    const playAgain = () => {
        setSquares(generateSquares(SQUARES_COUNT, areaSize));
        restartTimeout();
    };

    return (
        <>
            <h2>useTimeout example</h2>
            {isTimeoutRunning ? (
                <p>You have {(FIVE_SECONDS / 1000).toFixed(1)} seconds to catch them all!</p>
            ) : (
                <button onClick={playAgain}>Play again!</button>
            )}

            <div ref={spawnAreaRef} style={spawnAreaStyle}>
                {isTimeoutRunning && squares.map((s) => (
                    <Square key={s.id} {...s} onHit={handleHit}/>
                ))}
            </div>
        </>
    )
}