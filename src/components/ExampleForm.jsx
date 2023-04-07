import {useState} from "react";

const initState = {
    name: '',
    surname: '',
    age: 21
}

export const ExampleForm = () => {
    const [formData, setFormData] = useState(initState);

    const setName = (name) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                name
            }
        })
    }

    const setSurname = (surname) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                surname
            }
        })
    }

    const setAge = (age) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                age
            }
        })
    }

    const clear = () => {
        setFormData(initState)
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
                    value={formData.name}
                    onChange={(event) => {
                        console.log(event.target.value)
                        setName(event.target.value)
                    }}
                />
                <input
                    type='text'
                    name='surname'
                    value={formData.surname}
                    onChange={(event) => setSurname(event.target.value)}
                />
                <input
                    type="number"
                    name='age'
                    value={formData.age}
                    onChange={(event) => setAge(parseInt(event.target.value))}
                />
                <button onClick={clear}>
                    Очистить
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
