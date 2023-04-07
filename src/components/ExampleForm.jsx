import {useState} from "react";

const initState = {
    name: '',
    surname: '',
    age: 21
}

export const ExampleForm = () => {
    const [name, setName] = useState(initState.name)
    const [surname, setSurname] = useState(initState.surname)
    const [age, setAge] = useState(initState.age)
    const [formData, setFormData] = useState(initState);

    const saveFormDataToState = (target) => {
        target.preventDefault()
        setFormData({
            name,
            surname,
            age
        })
        setName('')
        setSurname('')
        setAge(21)
    }

    return (
        <div style={{
            margin: "0 auto",
            width: "25%",
            padding: "25px",
            backgroundColor: '#f2f2f2'
        }}
        >
            <form style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",

            }}>
                <input
                    type="text"
                    name='name'
                    value={name}
                    onChange={(event) => {
                        console.log(event.target.value)
                        setName(event.target.value)
                    }}
                />
                <input
                    type='text'
                    name='surname'
                    value={surname}
                    onChange={(event) => setSurname(event.target.value)}
                />
                <input
                    type="number"
                    name='age'
                    value={age}
                    onChange={(event) => setAge(parseInt(event.target.value))}
                />
                <button onClick={saveFormDataToState}>
                    Сохранить
                </button>
            </form>

            <div>
                <p>Имя: {formData.name}</p>
                <p>Фамилия: {formData.surname}</p>
                <p>Возраст: {formData.age}</p>
            </div>
        </div>
    )
}
