import {useRequest} from "./useRequest";

/**
 * Асинхронное получение данных о списке задач пользователя по его id
 * @param userId
 * @return {{data: object, loading: boolean, error: string}}
 */
export function useTodoList(userId) {
    //Формируем строку необходимых параметров запроса
    const query = `todos?userId=${userId}`
    return useRequest(query)
}