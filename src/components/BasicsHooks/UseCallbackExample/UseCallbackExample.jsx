import {List} from "./List";

const items = [
    {id: '1', name: 'first'},
    {id: '2', name: 'second'},
    {id: '3', name: 'third'}
]
export const UseCallbackExample = () => {


    return (
        <List items={items}/>
    )
}
