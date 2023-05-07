import {useEffect, useState} from "react";
import {queryFunction} from "../api";


/**
 * Возвращает данные, полученные от https://jsonplaceholder.typicode.com в зависимости от параметров
 * @param query параметры запроса
 * @return {{data: undefined, loading: boolean, error: undefined}}
 */
export function useRequest(query) {
    const [data, setData] = useState()
    const [error, setError] = useState()
    console.log(query)
    useEffect((query) => {
        console.log(query)
        queryFunction(query)
            .then(data => setData(data))
            .catch(error => setError(error))
    }, [query]);

    return {
        loading: !data && !error,
        data,
        error
    }
}