import {Kolobok} from "./Kolobok";

export const UseHoveredExample = () => {
    const array = []
    for (let i = 0; i < 5; i++) {
        //Если не планируется удаление элементов массива,
        //то в качестве key можно использовать индекс элемента в массивае
        array.push(<Kolobok key={i}/>)
    }
    return (
        <>
            <h2>useHoveved example</h2>
            {array}
        </>
    )
}
