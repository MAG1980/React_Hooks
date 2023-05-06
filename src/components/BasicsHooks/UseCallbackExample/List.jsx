import {useCallback, useState} from "react";
import {ListItem} from "./ListItem";
export const List = ({items}) => {
/*    const onItemClick = (item) => {
        console.log(`Clicked item with id ${item.id}`)
    }*/
    //При пустом списке зависимостей ссылка на callback будет всегда одной и той же.
    const onItemClick = useCallback(
        (item) => {
            console.log(`Clicked item with id ${item.id}`)
        },
        [],
    );

    console.log('Render List')

    const [trigger, setTrigger] = useState({});
    const rerender = () => {
        setTrigger({})
    }

    return (
        <>
            <p>
                <button onClick={rerender}>Rerender</button>
            </p>
            {items.map(item=>(
           /*     При каждом рендере компонента создаётся новый callback onItemClick,
                который затем передаётся всем дочерним компонентам.
                Все дочерние компоненты будут рендериться заново на каждый рендер компонента List,
                даже если List будет PureComponent,
                т.к. будут изменяться ссылки на их props onItemClick.
                Чтобы этого избежать следует мемоизировать onItemClick, обернув его в useCallback.
                Это позволит сохранить ссылку на onItemClick при ререндере List.
                */
                <ListItem key={item.id} item={item} onClick={onItemClick}/>
            ))}
        </>
    )
}
