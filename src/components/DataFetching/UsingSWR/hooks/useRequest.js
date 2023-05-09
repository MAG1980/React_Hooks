import useSWR from "swr";


/**
 * Возвращает данные, полученные из хука useSWR, в удобной форме
 * @param requestKey уникальный ключ запроса (параметры запроса query (url))
 * @return {{data: undefined, loading: boolean, error: undefined, mutate:function}}
 */
export function useRequest(requestKey) {
    /*Если при вызове хука useSWR второй и третий параметры не указаны,
        то их значения берутся из провайдера конфигурации <SWRConfig value={SWR_Config}></SWRConfig>*/
    const {data, error, mutate} = useSWR(requestKey)

    return {
        //Если данные не получены и не получена ошибка, значит, продолжается загрузка
        loading: !data && !error,
        data,
        error,
        mutate
    }
}
