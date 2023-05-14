import {useQuery} from "react-query";

const OPTIONS = {
    //интервал между запросами для автоматического обновления
    refetchInterval: 3000,
}

/**
 * Имитация асинхронного ответа сервера
 * @return {Promise<unknown>} текущая дата
 */
function fetchLastUpdated() {
    return new Promise(resolve => {
        resolve(new Date())
    })
}

export function useLastUpdated() {
    const {isLoading, data, error} = useQuery(
        //уникальный ключ - параметр запроса (в качестве примера использована строковая константа)
        'lastUpdated',
        //функция fetcher
        fetchLastUpdated,
        //параметры
        OPTIONS
    )

    return {
        loading: isLoading,
        data,
        error,
    }
}