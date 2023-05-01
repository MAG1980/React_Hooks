const idleStyle = {
    width: 150,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const activeStyle = {
    ...idleStyle,
    borderBottom: '2px solid #58F'
}
export const TabHeader = ({text, isActive, onClick}) => {
    const style = isActive ? activeStyle : idleStyle
    return (
        <div style={style} onClick={onClick}>
            {text}
        </div>
    )
}
