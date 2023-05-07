import {createContext, useEffect, useState} from "react";
import "./MasterDetail.css"
import {MasterDetailContextProvider} from "./MasterDetailContextProvider";

/**
 * Рендеринг пунктов меню (примеров или глав)
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export const MasterDetail = ({children}) => {
    const [selectedTitle, setSelectedTitle] = useState()
    const [DetailComponent, setDetailComponent] = useState();

    /*    Два сеттера объединенты в одну функцию,
        т.к. приложение долно запрещать вызывать их по отдельности,
        чтобы не нарушить логику*/
    const selectChapter = (title, component) => {
        setSelectedTitle(title)
        /*В переменной component хранится ссылка функциональный компонент (функцию).
          Если не использовать callback для передачи component в сеттер,
          то хук useState попытается использовать результат выполнения этой функции
          для получения значения,
          (как функцию, переданную для ленивой инициализации)
          что приведёт к ошибке*/
        setDetailComponent(() => component)
    }

    /*   Объединяем ссылки на выбранный компонент,
       его название и сеттер нового компонента в общий объект контекста,
       чтобы передать их в provider*/
    const contextValue = {
        selectedTitle, DetailComponent, selectChapter
    }

    /*    Создаём объект контекста (со свойством Provider),
        используя встроенную в React функцию createContext*/
    const Context = createContext()

    //Обновляет title вкладки браузера
    useEffect(() => {
        document.title = selectedTitle || 'React hooks in details'
    }, [selectedTitle]);

    return (
        <div className="container">
            {/*Предоставляем доступ к контексту только в меню*/}
            <div className="master">
                <MasterDetailContextProvider value={contextValue}>
                    {children}
                </MasterDetailContextProvider>
            </div>

            <div className="detail">{DetailComponent && <DetailComponent/>}</div>
            <div className="bottom">
                {/*<ConsoleViewer/>*/}
            </div>
        </div>)
}
