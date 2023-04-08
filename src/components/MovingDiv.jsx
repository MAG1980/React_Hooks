import {usePosition} from "../hooks/usePosition";

export const MovingDiv = () => {
    const [left, top] = usePosition(50)
    return (
        <>
            <h2>[{left}, {top}]</h2>
            <div style={{
                backgroundColor: '#F00',
                position: 'absolute',
                width: 100,
                height: 100,
                left,
                top
            }}>
            </div>
        </>
    )
}