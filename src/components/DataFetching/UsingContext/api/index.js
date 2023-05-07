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
    // console.log(query)
    const response = await axiosInstance.get(query)
    //Деструктуризация response
    const {data} = response
    return data
}
