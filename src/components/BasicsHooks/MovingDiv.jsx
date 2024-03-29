import {usePosition} from "../CustomHooks/usePosition";
import {useMemo} from "react";

const initialStyle = {
    backgroundColor: '#F00',
    position: 'absolute',
    width: 100,
    height: 100,
    left: 0,
    top: 0
}

const generateDummies = (count) => {
    const dummies = []
    for (let i = 0; i < count; i++) {
        dummies.push(<div>i = {i}</div>)
    }
    return dummies
}
export const MovingDiv = () => {
    const [left, top] = usePosition(50)
    // const [style, setStyle] = useState(initialStyle);


    //Ссылка на объект style будет сохраняться между рендерами.
    //Изменения в объекте style будут происходить
    //только при изменении значений переменных в массиве зависимостей хука useMemo.
    const style = useMemo(() => {
        return {
            ...initialStyle,
            left,
            top
        }
    }, [left, top]);

    /*    useLayoutEffect(() => {
            setStyle((prevState) => {
                    return {
                        ...prevState,
                        left,
                        top
                    }
                }
            )
            return () => {

            };
        }, [left, top]);*/


    return (
        <>
            <h2>[{left}, {top}]</h2>
            <div style={style}>
            </div>
            {generateDummies(30000)}
        </>
    )
}
