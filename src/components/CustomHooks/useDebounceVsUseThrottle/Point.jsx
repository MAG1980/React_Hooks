import {memo} from "react";

const SIZE = 10
export const Point = memo(({left, top, color}) => {

    return (
        <div style={{
            position: 'absolute',
            left: left - SIZE / 2,
            top: top - SIZE / 2,
            width: SIZE,
            height: SIZE,
            borderRadius: "50%",
            backgroundColor: color
        }}>
        </div>
    )
})
