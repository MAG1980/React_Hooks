import {useState} from "react";
import {useHistory} from "./useHistory";
import {RateRow} from "../usePrevious for RateRow/RateRow";
import {VictoryChart, VictoryLine, VictoryTheme} from "victory";

//Настройки отображения графика
const styles = {
    chartContainer: {
        height: 200
    },
    lineChart: {
        data: {
            stroke: "#989",
            strokeWidth: 1
        }
    }
}
export const UseHistoryExample = () => {
    const [score, setScore] = useState(0);
    const history = useHistory(score)

    //Видимая область графика
    //При любом количестве элементов, отображается не менее 10 точек
    const domain = {
        x: [0, Math.max(10, history.length)],
        y: [0, 10]
    }

    //Маппинг массива с историей изменения,
    //возвращённого хуком useHistory, в массив объектов,
    //который требует на вход компонент VictoryLine
    const chartData = history.map((value, index) => ({
        x: index,
        y: value
    }))
    return (
        <>
            <h2>useHistory example</h2>
            <RateRow score={score} onChange={setScore}/>
            <div style={styles.chartContainer}>
                <VictoryChart
                    theme={VictoryTheme.material}
                    domain={domain}
                    padding={0}
                    height={40}
                >
                    {/*Линейный график*/}
                    <VictoryLine data={chartData}/>
                </VictoryChart>
            </div>
        </>
    )
}
