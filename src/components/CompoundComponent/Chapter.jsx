import {useMasterDetailContext} from "./useMasterDetailContext"

/**
 * Кнопка меню,
 * вызывающая отображение указанного компонента в основной области окна браузера
 * @param title string
 * @param component JSX.Element
 * @returns {JSX.Element}
 * @constructor
 */
export const Chapter = ({title, component}) => {
    /*Получаем название выбранного компонента из контекста
    и функцию для изменения названия выбранного компонента и ссылки на него
    в контексте */
    const {selectedTitle, selectChapter} = useMasterDetailContext()
    //Проверка на совпадение названия выбранного и текущего компонента
    const isSelected = title === selectedTitle

    const className = `master-button ${isSelected ? 'selected' : ''}`

    /**
     * При клике по кнопке делает компонент с её названием выбранным
     */
    const handleClick = () => {
        selectChapter(title, component)
    }
    return (
        <button className={className} onClick={handleClick}>
            {title}
        </button>
    )
}
