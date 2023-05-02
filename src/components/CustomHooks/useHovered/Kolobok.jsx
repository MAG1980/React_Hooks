import {useRef} from "react";
import {useHovered} from "./useHovered";

const style = {
    fontSize: 128,
}
export const Kolobok = () => {
    const spanRef = useRef()
    const isHovered = useHovered(spanRef)
    return (
        <span ref={spanRef} style={style}>
{isHovered ? '\u{1f603}' : '\u{1f642}'}
        </span>
    )
}
