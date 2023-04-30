const styles = {
    row: {
        display: "flex",
        flexDirection: "row",
    },
}
export const Row = ({children}) => {
    return (
        <div style={styles.row}>{children}</div>
    )
}