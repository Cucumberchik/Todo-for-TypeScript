import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TypeUser } from '../../../type';
import EditUser from '../../modal_windows/editUser';

interface IState {
    users: TypeUser[];
}
export interface IUserState {
    state: boolean,
    obj?: TypeUser;
}
const Hero: React.FC = () => {
    const dispatch = useDispatch()
    let [user, setUser] = React.useState<IUserState>({ state: false, obj: { name: "", lastname: "", age: "", id: 0 } })
    let users = useSelector((state: IState) => state.users)

    const handleUser = (type: string, id: number) => {
        if (type === "delete") {
            dispatch({ type: "DELETE_USER", payload: id })
        }
    }
    const handleEdit = (el: TypeUser) => {
        setUser({ state: true, obj: el });
    };
    const closeEditUser = () => {
        setUser({ state: false })
    }
    return (
        <div className='Hero'>
            <section>
                {
                    users.map((el, id) => (
                        <div key={id} className='hero_user'>
                            <div>
                                <h1>{el.name}</h1>
                                <p>{el.lastname}</p>
                                <br />
                                <h2>{el.age}</h2>
                            </div>
                            <div>
                                <button onClick={() => handleUser("delete", el.id)}>Delete</button>
                                <button onClick={() => handleEdit(el)}>Edit</button>
                            </div>

                        </div>
                    ))
                }

            </section >
            <EditUser user={user.obj} state={user.state} closeEditUser={closeEditUser} />
        </div >
    )
}

export default Hero
