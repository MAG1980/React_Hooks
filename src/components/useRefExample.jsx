import {useRef} from 'react'

export const UseRefExample = () => {
    const refContainer = useRef()

    const focusInput = () => {
        console.log(refContainer.current)
        //? - проверка на null и undefined
        refContainer.current?.focus()
    }

    const onChangeInputText = (event) => {
        if (event.target.value === '123'){
            //Снимает фокусировку
            refContainer.current?.blur()
        }
    }

    return (
        <div>
            <input type="text" ref={refContainer} onChange={onChangeInputText}/>
            <p>
                <button type='button' onClick={focusInput}>Focus</button>
            </p>
        </div>
    )
}