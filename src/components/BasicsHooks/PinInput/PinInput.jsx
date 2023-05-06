import {useRef, useImperativeHandle, forwardRef} from 'react'

const inputStyle = {
    width: 30,
    height: 30,
    fontSize: 20,
    textAlign: 'center',
    margin: 5
}

/**
 * Возвращает копию исходного массива с внесёнными изменениями не мутируя исходный массив
 * @param array исходный массив
 * @param index индекс изменяемого элемента
 * @param newValue значение изменяемого элемента
 * @returns {*[]} новый массив
 */
const updateArray = (array, index, newValue) => {
    const copy = [...array]
    copy[index] = newValue
    return copy
}

/**
 *Возвращает компонент для ввода пин-кода
 * @param digits [] массив цифр пин-кода
 * @param onChange обработчик события onChange в input
 * @returns {JSX.Element}
 * @constructor
 */

/*Хук useImperativeHandle работает только в паре с хуком forwardRef,
поэтому для его использования перед экспортом компонента его необходимо обернуть
в хук forwardRef и экспортировать по умолчанию.
В результате этого React передаст в родительский компонент ссылку на ref,
используя которую можно вызывать методы у элемента, на который указываетс ссылка.
Для этого из родительского компонента эту ссылку нужно обратно передать в дочерний
с помощью атрибута ref.
Тогда в самой функции дочернего компонента доступ к ref можно получить через второй параметр,
(следующий после объекта props).
Теперь мы можем вызвать метод focus() извне (из родительского компонета)*/
const PinInput = ({digits, onChange}, ref) => {

    /*При первом рендеринге оздаём объект со свойством current,
    в котором хранится массив, число элементов равно длине массива digits,
    полученнного через props.
    Использование useRef позволяет сохранять состояние компонента между рендерами
    не вызывая новых рендеров при изменении состояния (в отличие от useState)*/
    const inputRefs = useRef(new Array(digits.last));

    /**
     * Обрабатывает значения, введённые в input
     * @param index индекс элемента массива
     * @param newValue новое значение элемента массива
     */
    const handleChange = (index, newValue) => {
        const oldDigit = digits[index]
        /*Образаем пробелы с обеих сторон у строки, полученной из input.
        Эта строка кроме новой цифры может содержать и старую.
        Заменяем в строке старую цифру на пустую строку.
        В полученноей строке остаётся только новая цифра*/
        const newDigit = newValue.trim().replace(oldDigit, '')

        //Если осташаяся строка не является цифрой - делаем возврат
        if (newDigit < '0' || newDigit > '9') {
            return
        }

        /*При каждом вводе цифры в input
        передаём массив значений всех input родительскому компоненту*/
        onChange(updateArray(digits, index, newDigit))

        //Смещаем фокус на следующий input
        const inputs = inputRefs.current
        /*Если текущий элемент не последний, то смещаем фокус на следующий input.
        В противном случае - снимаем фокусировку с текущего элемента.*/
        if (index < inputs.length - 1) {
            inputRefs.current[++index].focus()
        } else {
            inputRefs.current[index].blur()
        }
    }

    /**
     * При нажатии клавиши "Backspace" очищает значение текущего input и
     * переводит фокусировку на предыдущий элемент, если он не первый.
     * @param index индекс теущего элемента в массиве
     * @param keyPressed код нажатой клавиши
     */
    const handleKeyDown = (index, keyPressed) => {
        if (keyPressed !== 'Backspace') {
            return
        }

        //Если в input находится не пустая строка, то очищаем её
        if (digits[index]) {
            onChange(updateArray(digits, index, ''))
            //Нажатие "Backspace" в пустом input приведёт к фокусировке предыдущего, если он не последний.
        } else if (index > 0) {
            inputRefs.current[--index].focus()
        }
    }

/*      Предоставляет родительским компонентам для использования ref.
        Как всегда, в большинстве случаев следует избегать императивного кода с использованием ссылок.
        useImperativeHandle следует использовать с React.forwardRef.
        ref получаем из второго параметра компонента (идущего после props).
        Callback возвращает объект,
        в котором перечисляются доступные из родительского компонента методы.
        Теперь мы можем вызвать метод focus() извне (из родительского компонета)*/
    useImperativeHandle(ref, ()=>({
        focus: ()=>{
            inputRefs.current[0].focus()
        }
    }))

    return (
        <div>
            {digits.map((digit, index) => (
                <input
                    type="text"
                    key={index}
                    style={inputStyle}
                    value={digit}
                    onChange={(event) => handleChange(index, event.target.value)}
                    onKeyDown={(event) => handleKeyDown(index, event.nativeEvent.key)}

                    /*Атрибут ref может принимать callback,
                    который принимает параметром ссылку на текущий элемент.
                    Это позволяет сохранить ссылки на все input в массиве, хранимом в useRef,
                    по ключу элемента массива, полученного через props.*/
                    ref={ref => {
                        inputRefs.current[index] = ref
                    }}
                />
            ))}
        </div>
    )
}

export default forwardRef(PinInput)
