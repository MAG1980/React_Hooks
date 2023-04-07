import {useState} from "react";

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

//Такой подход позволяет не создавать анонимную функцию в JSX
const OnChange = (setter) => {
    return (event) => {
        const {value} = event.target
        setter(value ? parseFloat(value) : 0)
    }
}

export const Calculator = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    //Для сохранения функции в state используем callback,
    // возвращающий функцию, но не вызывающий её
    //callback возвращает ссылку на функцию
    const [action, setAction] = useState(() => add);

    const [sign, setSign] = useState('+')

    const applyAction = (fn, fnSign) => {
        return () => {
            setAction(() => fn)
            setSign(fnSign)
        }
    }

    return (
        <form style={{padding: '20px'}}>
            <input type="number" value={a} onChange={OnChange(setA)}/>
            <span> {sign} </span>
            <input type="number" value={b} onChange={OnChange(setB)}/>
            <span> = {action ? action(a, b) : ' '}</span>
            <div style={{padding: '5px'}}>
                {/*Чтобы случайно не получить в качестве аргумента setAction устаревшее значение, хранимое в action, используем callback*/}
                <button type="button" onClick={applyAction(add, '+')}>Сложить</button>
                <button type="button" onClick={applyAction(subtract, '-')}>Вычесть</button>
                <button type="button" onClick={applyAction(multiply, '*')}>Перемножить</button>
                <button type="button" onClick={applyAction(divide, '/')}>Разделить</button>
            </div>
        </form>
    )
}
