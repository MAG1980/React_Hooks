export const ToggleButton = ({toggled, handleToggle}) => {
    const caption = toggled ? 'ON' : 'OFF'
    return (
        <button style={{width: 100}} onClick={handleToggle}>{caption}</button>
    )
}