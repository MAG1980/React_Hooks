import {Cell} from "./Cell";
import {Row} from "./Row";

const styles = {
    row: {
        display: "flex",
        flexDirection: "row",
    },
    cell: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        height: 100,
        borderRadius: 10,
        backGroundColor: "#AFA",
        color: "#040",
        fontSize: 20
    }
}
export const UseElementSizeExample = () => {
    return (
        <>
            <h2>useElementSize example</h2>
            <Row>
                <Cell/>
                <Cell/>
                <Cell/>
            </Row>
            <Row>
                <Cell/>
                <Cell/>
            </Row>
            <Row>
                <Cell/>
            </Row>
            <Row>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
            </Row>
        </>
    )
}