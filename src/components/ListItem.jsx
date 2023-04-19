export const ListItem = ({item, onClick}) => {
    const {name}=item
    console.log(`> render ${name}`)

    return (
        //В данном случае использовать useCallback нет необходимости.
        <div onClick={()=>onClick(item)}>
            {name}
        </div>
    )
}