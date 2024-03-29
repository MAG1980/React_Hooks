import {useRequest} from "./useRequest";

/**
 * Асинхронное получение данных о пользователе по его id
 * @param userId
 * @return {{data: object, loading: boolean, error: string}}
 */
export function useUser(userId) {
    //Формируем строку необходимых параметров запроса
    const query = `users/${userId}`
    return useRequest(query)
}
