import {useRequest} from "./useRequest";
import {useAppContext} from "./useAppContext";

/**
 * Асинхронное получение данных о списке задач пользователя по его id
 * Автоматически формирует правильный эндпойнт для получения данных о списке задач пользователя
 * @param userId
 * @return {{data: object, loading: boolean, error: string}}
 */
export function useTodoList() {
    //Получаем userId из контекста приложения
    const {userId} = useAppContext()
    //Формируем строку необходимых параметров запроса
    const query = `todos?userId=${userId}`
    return useRequest(query)
}