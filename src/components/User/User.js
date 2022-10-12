import { useDispatch } from "react-redux";
import { userActions } from "../../redux";

import  css from './User.module.css'

const User = ({user}) => {
    const {id, name, email,username}= user

    const dispatch = useDispatch();

    return (
        <div className={css.User}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>userName: {username}</div>
            <div>email: {email}</div>
            <button onClick={()=> dispatch(userActions.setCurrentUser(user))}>Select</button>
            <button onClick={()=> dispatch(userActions.getById({id}))}>GetFromAPI </button>
            <button onClick={()=>dispatch(userActions.deleteUserById(id))} >Delete</button>
        </div>
    );
};

export { User };