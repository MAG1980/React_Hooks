import {useRef} from "react";
import {useElementSize} from "./useElementSize";

const styles = {
    cell: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        height: 100,
        borderRadius: 10,
        backgroundColor: "#AFA",
        color: "#040",
        fontSize: 20
    }
}
export const Cell = () => {
    const ref = useRef()

    //Передаём ссылку на данный DOM-элемент (div) в хук, возвращающий размеры элемента
    const {width, height} = useElementSize(ref)
    return (
        //Помещаем ссылку на данный DOM-элемент в ref-контейнер
        <div ref={ref} style={styles.cell}>
            {width} x {height}
        </div>
    )
}