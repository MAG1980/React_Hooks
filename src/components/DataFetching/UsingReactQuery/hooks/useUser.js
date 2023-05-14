import {useRequest} from "./useRequest";
import {useAppContext} from "./useAppContext";

/**
 * Асинхронное получение данных о пользователе по его id
 * Автоматически формирует правильный эндпойнт для получения данных о пользователе
 * @param userId
 * @return {{data: object, loading: boolean, error: string}}
 */
export function useUser() {
    //Получаем userId из контекста приложения
    const {userId} = useAppContext()
    //Формируем строку необходимых параметров запроса
    const query = `users/${userId}`
    return useRequest(query)
}
