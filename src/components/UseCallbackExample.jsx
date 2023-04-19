import {useState} from "react";

export const UseCallbackExample = () => {
    const [title, setTitle] = useState('Default Title');
    const onClick = useCallback(
        () => {
            console.log('Clicked!')
        },
        [],
    );

    const onChangeInputText = (event) => {
        setTitle(event.target?.value)
    }
    
    const changeTitle = useCallback(
        () => {
            callback
        },
        [input],
    );
    
    
    return (
        <>
            <button onClick={onClick}>Click me</button>
<div>
    <input type="text" value={title} onChange={onChangeInputText}/>
    <button onClick={changeTitle}>Click me</button>
</div>
        </>
    )
}