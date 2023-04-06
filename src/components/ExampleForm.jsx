import {useState} from "react";

export const ExampleForm = () => {
    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    const [age,setAge] = useState(21)
    return (
        <form style={{display:"flex",flexDirection:"column", justifyContent:"center"}}>
            <input

                type="text"
                name='name'
                value={name}
            />
            <input

                type='text'
                name='surname'
                value={surname}
            />
            <input
              
                type="number"
                name='age'
                value={age}
            />
        </form>
    )
}
