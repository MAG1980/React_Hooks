import axios from "axios";

//Создаём instance axios для инкапсуляции в нём определённых настроек
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

/**
 * Возвращает свойство data, полученное в ответ на запрос к API
 * @param url
 * @return {Promise<any>}
 */
export async function fetcher(url) {
    // console.log(query)
    const response = await axiosInstance.get(url)

    return response.data
}
