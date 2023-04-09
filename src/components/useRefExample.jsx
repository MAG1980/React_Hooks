import {useRef, useState} from 'react'

export const UseRefExample = () => {
    const refContainer = useRef()
    const toggledRef = useRef(false);
    const [toggledState, setToggledState] = useState(false);

    const focusInput = () => {
        console.log(refContainer.current)
        //? - проверка на null и undefined
        refContainer.current?.focus()
    }

    const onChangeInputText = (event) => {
        if (event.target.value === '123') {
            //Снимает фокусировку
            refContainer.current?.blur()
        }
    }

    const changeToggledRef = () => {
        toggledRef.current = !toggledRef.current
        console.log(`ToggledRef is toggled to: ${toggledRef.current}`)
    }

    const changeToggledState = () => {
        setToggledState((prev) => !prev)
        console.log(`ToggledState is toggled to: ${toggledState}`)
    }

    //Выполняется при каждом рендере
    console.log('Rerendered!')

    return (
        <div>
            <input type="text" ref={refContainer} onChange={onChangeInputText}/>
            <p>
                <button type='button' onClick={focusInput}>Focus</button>
            </p>
            <p>
                <button type='button' onClick={changeToggledRef}>ChangeToggledRef</button>
                <button type='button' onClick={changeToggledState}>ChangeToggledState</button>
            </p>
        </div>
    )
}