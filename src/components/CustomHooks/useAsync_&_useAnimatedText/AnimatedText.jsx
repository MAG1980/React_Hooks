import {useAnimatedText} from "./useAnimatedText"

export const AnimatedText = ({text}) => {
    const currentText = useAnimatedText(text, 100)
    return (
        <p>{currentText}</p>
    )
}