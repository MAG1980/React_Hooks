import {createMapState} from "./createMapState";

/**
 * хук, обрезающий пробелы в начале и конце входящей строки
 * @type {(function(*): [unknown,(function(*): void)|*])|*}
 */
export const useTrimmedState = createMapState((newValue) => {
    return newValue?.trim()
})