import {useState} from "react";
import {HeavyComponent} from "./HeavyComponent";

export const ComponentRerenderTracking = () => {
    const [counter, setCounter] = useState(0)
    const [text, setText] = useState('')

    const incrementCounter = () => {
        setCounter(prev => ++prev)
    }

    const onTextChange = (event) => {
        setText(event.target.value)
    }

    const clearLocalState = () => {
        setCounter(0)
        setText('')
    }

    return (
        <>
            <h2>useWhatCausedRender</h2>
            <p>
                <button onClick={incrementCounter}>Increment counter</button>
                <button onClick={clearLocalState}>Clear local state</button>
            </p>
            <p>
                <input type="text" value={text} onChange={onTextChange}/>
            </p>
            <HeavyComponent counter={counter} text={text}/>
        </>
    )
}
