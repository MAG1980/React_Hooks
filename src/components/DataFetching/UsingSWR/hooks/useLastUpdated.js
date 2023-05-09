import useSWR from "swr";

/**
 * Имитация асинхронного получения TimeStamp последнего обновления с сервера
 * (на самом деле возвращает текущие дату и время)
 * @return {Promise<unknown>}
 */
function fetchLastUpdated() {
    return new Promise(resolve => {
        resolve(new Date())
    })
}

const SWR_CONFIG = {
    //Интервал опроса API для получения времени последнего обновления
    refreshInterval: 3000
}

/**
 * Возвращает TimeStamp последнего обновления данных
 * @return {{data: unknown, loading: boolean, error: any}}
 */
export function useLastUpdated() {
    //В качестве уникального ключа запроса передана строка 'lastUpdated'
    //fetchLastUpdated - функция fetcher
    //SWR_CONFIG - options
    const {data, error} = useSWR('lastUpdated', fetchLastUpdated, SWR_CONFIG)

    return {
        loading: !data && !error,
        data,
        error
    }
}