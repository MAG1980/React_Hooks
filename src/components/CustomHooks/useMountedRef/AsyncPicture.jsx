import {useMountedRef} from "./useMountedRef";
import {useEffect, useState} from "react";
import {ImagePlaceholder} from "./ImagePlaceholder";

const SIZE = 200
const styles = {
    image: {
        width: SIZE,
        height: SIZE,
        objectFit: 'cover',
        borderRadius: SIZE / 2,
    }
}
export const AsyncPicture = ({getImageFunc}) => {
    const isMountedRef = useMountedRef()
    const [imageURL, setImageURL] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getImageFunc()
            .then((url) => {
                //Проверка компонента на существование (он может быть демонтирован)
                if (isMountedRef.current) {
                    setImageURL(url)
                }
            })
            .catch(error => {
                console.log(error)
            })
            //выполняется всегда, даже при возникновении ошибки
            .finally(() => {
                if (isMountedRef.current) {
                    setIsLoading(false)
                }
            })
    }, [getImageFunc, isMountedRef]);

    if (isLoading) {
        return <ImagePlaceholder size={SIZE}/>
    }
    return (
        <img
            src={imageURL}
            alt="Fetched from external service"
            style={styles.image}
        />
    )
}
