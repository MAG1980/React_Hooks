export const Field = ({label, value, setValue}) => {
    return (
        <div style={{margin: 10}}>
            <span style={{marginRight: 10}}>{label}</span>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    )
}