import {useState} from "react";

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

export const Calculator = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    //Для сохранения функции в state используем callback,
    // возвращающий функцию, но не вызываем её
    //callback возвращает ссылку на функцию
    const [action, setAction] = useState(() => add);
    const OnChange = (setter) => {
        return (event) => {
            const {value} = event.target.value
            setter(value ? parseFloat(value) : 0)
        }
    }

    return (
        <form>
            <input type="number" value={a} onChange={OnChange(setA)}/>
            <input type="number" value={b} onChange={OnChange(setB)}/>

            <button type="button" onClick={setAction((prevState) => add)}>Сложить</button>
            <button type="button" onClick={setAction((prevState) => subtract)}>Вычесть</button>
            <button type="button" onClick={setAction((prevState) => multiply)}>Перемножить</button>
            <button type="button" onClick={setAction((prevState) => divide)}>Разделить</button>

            <p> = {action ? action(a, b) : ''}</p>

        </form>
    )
}
