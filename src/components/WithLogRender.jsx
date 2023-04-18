import {useRef, useState} from "react";
import {SimpleTextWithLogRender} from "./SimpleTextWithLogRender";
import {withLogRender} from "../HOC/withLogRender";
import PinInput from "./PinInput";

const PinInputWithLogRender = withLogRender(PinInput)
export const WithLogRender = () => {
    const [digits, setDigits] = useState(['', '', '']);

    const inputRef = useRef()

    const focus = () => {
        inputRef.current?.focus()
    }

    return (
        <>
            <SimpleTextWithLogRender text='Test text'/>
            <PinInputWithLogRender ref={inputRef} digits={digits} onChange={setDigits}/>
            <div>
                <button onClick={focus}>Focus</button>
            </div>
        </>
    )
}