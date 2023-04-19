export const ListItem = ({item, onClick}) => {
    const {name}=item
    console.log(`> render ${name}`)

    return (
        //В данном случае использовать useCallback нет необходимости,
        // т.к. callback используется именно в этом компоненте.
        <div onClick={()=>onClick(item)}>
            {name}
        </div>
    )
}
