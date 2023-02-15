export const HelloWorld = (props) => {
    const {color} = props
    return (
        <div>
            Hello <span style={{color}}>World</span>
        </div>
    )
}
