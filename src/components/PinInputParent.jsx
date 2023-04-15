import PinInput from "./PinInput";
import {useState, useRef} from "react";

const initialDigits = ['', '', '', '', '']

export const PinInputParent = () => {
    const [digits, setDigits] = useState(initialDigits);
    const ref = useRef();
    const focus = () => {
        ref.current?.focus()
    }

    //Очистка значений input без использования императивного стиля
    const clearDigits = () => {
        setDigits(initialDigits)
    }
    return (
        <>
           {/* Передаём ссылку на ref как обычный props,
            но получаем его отдельным параметром, следующим после объекта props.*/}
            <PinInput ref={ref} digits={digits} onChange={setDigits}  />
            <p>
                <button onClick={focus}>Focus on first digit</button>
                <button onClick={clearDigits}>Clear digits</button>
            </p>
        </>
    )
}
