import {useWindowSize} from "./useWindowSize";
import {styles} from "./styles";

const PREVIEW_WIDTH = 200
export const UseWindowSizeExample = () => {
    const [screenWidth, screenHeight] = useWindowSize()
    //Высота рассчитывается автоматически с сохранением соотношения сторон экрана (aspect ratio)
    const previewHeight = (PREVIEW_WIDTH * screenHeight) / screenWidth
    console.log(previewHeight)
    console.log(screenHeight)
    console.log(screenWidth)


    return (
        <>
            <h2>useWindowSize example</h2>

            <div style={styles.preview(PREVIEW_WIDTH, previewHeight)}>
                <div style={styles.widthText(PREVIEW_WIDTH)}>{screenWidth}px</div>
                <div style={styles.heightText(previewHeight)}>{screenHeight}px</div>
            </div>
        </>
    )
}