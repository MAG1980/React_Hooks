import {useQuery, useQueryClient} from "react-query";
import {queryFunction} from "../api";
import {useCallback} from "react";


/**
 * Возвращает удобный интерфейс для получения кэшированных данных,
 * полученных из хука useQuery, в удобной форме,
 * а также функцию ля их инвалидации
 * @param queryKey уникальный ключ запроса (параметры запроса query (url))
 * @return {{data: undefined, loading: boolean, error: undefined, mutate:function}}
 */
export function useRequest(queryKey) {
    //Получаем кэшированные данные, полученные в ответ от API
    //на запрос, содержащий queryKey,
    //с помощью хука useQuery библиотеки ReactQuery
    const {isLoading, data, error} = useQuery(queryKey, queryFunction)

    //Получаем ссылку на клиент ReactQuery приложения с помощью библиотечного хука
    const queryClient = useQueryClient()
    /**
     * Мемоизированная функция,
     * котораая вызывает очистку кеша ReactQuery для конкретного queryKey.
     * Аналог mutate() библиотеки SWR
     * @param queryKey уникальный ключ запроса (параметры запроса query (url))
     * @type {(function(): void)|*}
     */
    const invalidate = useCallback(
        //Оптимизируем функцию инвалидации для использования в мемоизированных компонентах
        () => {
            //Вызываем инвалидацию данных (сброс кэша) для конкретного queryKey
            queryClient.invalidateQueries(queryKey)
        },
        [queryClient, queryKey],
    );


    return {
        loading: isLoading,
        data,
        error,
        invalidate
    }
}
