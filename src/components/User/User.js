import { useDispatch } from "react-redux";
import { userActions } from "../../redux";

const User = ({user}) => {
    const {id, name, email,username}= user

    const dispatch = useDispatch();

    return (
        <div>
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