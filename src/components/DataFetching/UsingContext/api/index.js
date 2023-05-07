import axios from "axios";

//Создаём instance axios для инкапсуляции в нём определённых настроек
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

/**
 * Возвращает свойство data, полученное в ответ на запрос к API
 * @param query
 * @return {Promise<any>}
 */
export async function queryFunction(query) {
    //Деструктуризация response
    const {data} = await axiosInstance.get(query)
    return data
}