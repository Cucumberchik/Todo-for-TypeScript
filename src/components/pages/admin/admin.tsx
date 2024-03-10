import React from 'react'
import { useDispatch } from 'react-redux'


const Admin: React.FC = () => {
    const [user, setUser] = React.useState({
        name: "",
        lastname: "",
        age: "",
        id: Date.now()
    })
    let dispatch = useDispatch()
    function handleUser() {
        if (user.age && user.lastname && user.name) {
            dispatch({ type: "ADD_USER", payload: user })
            setUser({ name: "", age: "", lastname: "", id: Date.now() })
        } else {
            alert("строка не заполнено")
            return
        }
    }
    let age = user.age.replace(/[a-z]/gi, "")
    return (
        <div className='admin'>
            <section>
                <h1>Add user</h1>
                <input value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} type="text" placeholder='Name' />
                <input value={user.lastname} onChange={(e) => setUser({ ...user, lastname: e.target.value })} type="text" placeholder='Lastname' />
                <input value={age} onChange={(e) => setUser({ ...user, age: e.target.value })} type="text" placeholder='Age' />
                <button onClick={handleUser}>Add</button>
            </section>
        </div>
    )
}

export default Admin
