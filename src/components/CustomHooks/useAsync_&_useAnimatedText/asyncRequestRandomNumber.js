/**
 * С задержкой возвращает случайное число в диапазоне 0-50 или ошибку.
 * Имитирует асинхронный ответ.
 * @return {Promise<Number>}
 */
export function asyncRequestRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random() * 100
            if (randomNumber > 50) {
                resolve(randomNumber)
            } else {
                reject('May be next time...')
            }
        }, 3000)
    })
}