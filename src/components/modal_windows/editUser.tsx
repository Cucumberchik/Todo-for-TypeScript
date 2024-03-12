import React from 'react'
import { TypeUser } from '../../type'
import { useDispatch } from 'react-redux';
interface IUser {
    user?: TypeUser,
    state: boolean,
    closeEditUser: () => void;
}
const EditUser: React.FC<IUser> = ({ user, state, closeEditUser }) => {
    const [newUser, setNewUser] = React.useState<TypeUser>({ name: "", lastname: "", age: "", id: 0 });
    let dispatch = useDispatch()
    React.useEffect(() => {
        if (user) {
            setNewUser(user);
        }
    }, [user]);

    if (!user) {
        return null;
    }
    const handleUser = () => {
        if (newUser.age && newUser.name && newUser.lastname) {
            dispatch({ type: "EDIT_USER", payload: newUser })
            closeEditUser()
        } else {
            alert('строка пустая')
            return
        }
    }
    return (
        <div onClick={closeEditUser} className='EditUser' style={{ display: state ? "flex" : "none" }}>
            <section onClick={(e) => e.stopPropagation()}>
                <div className="edit_user">
                    <h1>Edit</h1>
                    <input value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} type="text" placeholder='Name' />
                    <input value={newUser.lastname} onChange={(e) => setNewUser({ ...newUser, lastname: e.target.value })} type="text" placeholder='lastname' />
                    <input value={newUser.age} onChange={(e) => setNewUser({ ...newUser, age: e.target.value })} type="text" placeholder='age' />
                    <button onClick={handleUser}>Save</button>
                </div>
            </section>
        </div>
    )
}

export default EditUser
