import React from "react";
/*эквивалентный импорт
import {memo} from "react";*/


//Дочерний компонент ListItem обёрнут в React.memo,
//что позволяет избежать лишних рендеров при неизменных props
//при ререндеринге родительского компонента.
/*export const ListItem = memo(*/
export const ListItem = React.memo(
    ({item, onClick}) => {
        const {name} = item
        console.log(`> render ${name}`)

        return (
            //В данном случае использовать useCallback нет необходимости,
            // т.к. callback используется именно в этом компоненте.
            <div onClick={() => onClick(item)}>
                {name}
            </div>
        )
    }
)
