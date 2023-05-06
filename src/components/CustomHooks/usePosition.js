import {useState, useEffect} from "react";

export const usePosition = (step) => {
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    //Подписка на событие произойдёт после монтирования компонента и будет действовать в течение всей его жизни,
    //а функция очистки выполнится при размонтировании компонента
    //Сайд-эффект сработает после первого рендера
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    setLeft((prevState) => prevState - step)
                    break
                case 'ArrowRight':
                    setLeft((prevState) => prevState + step)
                    break
                case 'ArrowUp':
                    setTop((prevState) => prevState - step)
                    break
                case 'ArrowDown':
                    setTop((prevState) => prevState + step)
                    break
            }
        }
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [step])


    return [left, top]
}
    

