import {useEffect, useState} from "react";

/**
 * В хронологическом порядке возвращает массив значений, полученных ранее (историю их изменения)
 *
 * @param value any
 * @returns {any[]}
 */
export function useHistory(value) {
    //useState использутеся для того,
    // чтобы после добавления элементов в массив происходило обновление UI (рендеринг)
    const [history, setHistory] = useState([]);

    //При каждом изменении входящего значения сохраняет в конец массива
    useEffect(() => {
        setHistory((array) => [...array, value])
    }, [value]);

    return history
}
