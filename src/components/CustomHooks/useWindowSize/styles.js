export const COLOR = '#345678'

/**
 * Объект, содержащий функции для расчёта стилей DOM-элементов в зависимости от ширины и высоты окна
 * @type {{preview: (function(*, *): {border: string, width: *, position: string, height: *}), heightText: (function(*): {transform: string, top: number, color: string, left: number, textAlign: string, position: string, height: *, writingMode: string}), widthText: (function(*): {top: number, color: string, left: number, textAlign: string, width: *, position: string})}}
 */
export const styles = {
    preview: (width, height) => ({
        width,
        height,
        position: 'relative',
        border: `2px dashed ${COLOR}`,
    }),
    widthText: (width) => ({
        width,
        position: 'absolute',
        left: 0,
        top: 0,
        color: COLOR,
        textAlign: 'center',
    }),
    heightText: (height) => ({
        height,
        position: 'absolute',
        left: 0,
        top: 0,
        writingMode: 'vertical-lr',
        transform: 'rotate(180deg)',
        textAlign: 'center',
        color: COLOR
    })
}