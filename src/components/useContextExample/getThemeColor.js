//Чтобы избежать возможных ошибок при наботе кода,
//вместо строковых литералов использованы константы
export const Theme = {
    GREEN: 'green',
    BLUE: 'blue',
    RED: 'red'
}

/**
 * Возвращает цвет в зависимости от названия темы
 * @param theme
 * @returns {string}
 */
export function getThemeColor(theme) {
    switch (theme) {
        case Theme.RED:
            return '#994444'
        case Theme.BLUE:
            return '#4444FF'
        default:
            return '#449944'
    }
}
