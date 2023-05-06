import {useEffect, useState} from "react";
import "./MasteDetail.css"
import {ConsoleViewer} from "./ConsoleViewer/ConsoleViewer";

export const MasterDetail = ({content}) => {
    const [chapterId, setChapterId] = useState('')
    const selectedChapterId = chapterId ? content[chapterId] : null
    const Detail = selectedChapterId?.component
    /*    Массив собственных перечислимых пар ключ-значение свойства со строковыми ключами данного объекта.
            Каждая пара ключ-значение представляет собой массив с двумя элементами:
            первый элемент — это ключ свойства (который всегда является строкой),а второй элемент — значение свойства.*/
    const entries = Object.entries(content)

    useEffect(() => {
        /*       Оператор объединения с null возвращает правый операнд,
                    если левый операнд равен null||undefined,
                    в противном случе он возвращает левый операнд*/
        document.title = content[chapterId]?.name ?? 'React Hooks in Details'
    }, [content, chapterId]);

    return (
        <div className="container">
            <div className="master">
                {entries.map(([key, value]) => {
                    const isSelected = chapterId === key
                    const classname = `master-button ${isSelected ? 'selected' : null}`
                    return (
                        <div key={key}>
                            <button className={classname} onClick={() => setChapterId(key)}>{value.name}</button>
                        </div>
                    )
                })}
            </div>
            {/*React позволяет рендерить компоненты, описанные переменой
            (название переменной должно начинаться с заглавной буквы*/}
            <div className="detail">{Detail ? <Detail/> : null}</div>
            <div className="bottom">
                <ConsoleViewer/>
            </div>
        </div>
    )
}
