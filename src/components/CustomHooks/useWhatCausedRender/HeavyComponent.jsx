import {memo} from "react";
import {useWhatCausedRender} from "./useWhatCausedRender";

//Мемоизированный для уменьшения количества ререндеров тяжёлый компонент
export const HeavyComponent = memo((props) => {
    useWhatCausedRender('HeavyComponent', props)
    return (
        <div>
            <div>Counter: {props.counter}</div>
            <div>Text: {props.text}</div>
        </div>
    )
})
