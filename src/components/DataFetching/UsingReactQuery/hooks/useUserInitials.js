import {useUser} from "./useUser";

export function useUserInitials() {
    const {data} = useUser()
    const userName = data?.name ?? ''

    //Формируем строку, содержащую первые буквы слов, входящих в строку name
    return userName
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
}