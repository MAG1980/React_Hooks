export const ContactTile = ({contact, selected, onClick}) => {
    const {firstName, lastName, phone} = contact
    //GET-параметры нужны (API всегда возвращает случайную картинку и их проигнорирует),
    //чтобы для каждого контакта браузер кешировал индивидуальную ссылку
    const src = `https://cataas.com/cat?${firstName}${lastName}`
    const containerClass = `contacts-tile`
    return (
        <div
            className="containerClass"
            onClick={onClick}
            style={{
                width: "25%"
            }}
        >
            <img src={src} alt={`${firstName} ${lastName}`}
                 style={{width: "100%", objectFit: 'cover'}}/>
            <div>
                {firstName} {lastName}
            </div>
            <div>{phone}</div>
        </div>
    )
}
