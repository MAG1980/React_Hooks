import {memo} from "react";

//Компонент обёрнут в memo,
//чтобы при добавлении новых элементов не происходил рендеринг остальных элементов
export const Particle = memo(({left, top, speed, color, size}) => {
    const style = {
        position: "absolute",
        left,
        top,
        width: size,
        height: size,
        backgroundColor: color,
        animation: `spin ${speed}s linear infinite`,
    }
    return (
        <div style={style}/>
    )
})