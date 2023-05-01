import {useState} from "react";
import {TabHeader} from "./TabHeader";
import {AsyncPicture} from "./AsyncPicture";
import axios from "axios";

const Tabs = {
    cat: 'cat',
    dog: 'dog',
}

const styles = {
    headerRow: {
        display: 'flex',
        flexDirection: 'row'
    },
    tabContent: {
        padding: 10,
    }
}
export const UseMountedRefExample = () => {
    const [tab, setTab] = useState(Tabs.cat);

    const showCat = () => {
        setTab(Tabs.cat)
        console.log('cat')
    }

    const showDog = () => {
        setTab(Tabs.dog)
        console.log('dog')
    }
    return (
        <>
            <h2>useMountedRef example</h2>
            <div style={styles.headerRow}>
                <TabHeader text="Cat" isActive={tab === Tabs.cat} onClick={showCat}/>
                <TabHeader text="Dog" isActive={tab === Tabs.dog} onClick={showDog}/>
            </div>
            <div style={styles.tabContent}>
                {/* Чтобы при переключении tab компонент каждый раз пересоздавался заново,
                в компоненты AsyncPicture передан props key,
                т.к. в этом случае при сравнении props React понимает,
                что имеет дело с двумя различными компонентами,
                а не с одним и тем же, в котором изменился props getImageFunc*/}
                {tab === Tabs.cat ? (
                    <AsyncPicture key="cat-picture" getImageFunc={fetchRandomCat}/>
                ) : (
                    <AsyncPicture key="dog-picture" getImageFunc={fetchRandomDog}/>
                )}
            </div>
        </>
    )
}

const fetchRandomCat = async () => {
    const response = await axios.get(
        'https://api.thecatapi.com/v1/images/search'
    )
    return response.data[0].url
}

const fetchRandomDog = async () => {
    const response = await axios.get(
        'https://dog.ceo/api/breeds/image/random'
    )
    return response.data.message
}
