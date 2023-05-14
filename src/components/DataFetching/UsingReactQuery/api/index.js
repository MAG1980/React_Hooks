import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

/**
 * Возвращает данные, полученные с сервера
 * @param queryKey массив параметров запроса
 * @return {Promise<any>}
 */
export async function queryFunction({queryKey}) {
    const {data} = await axiosInstance.get(queryKey[0])
    return data
}