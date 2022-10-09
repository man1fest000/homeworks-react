import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userActions } from "../../redux";
import { User } from "../User/User";
import css from './Users.module.css'

const Users = () => {
    const dispatch = useDispatch();
    const {users,error,loading,userFromAPI} = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(userActions.getAll())
    },[]);

    return (
        <div>

            <div className={css.other}>
                {loading && <div> Loading... </div>}
                {error && <div> Error </div>}
                {userFromAPI && <div> {userFromAPI.email} </div>}
            </div>
            {
                users.map(user => <User key={user.id}  user={user} />)
            }
        </div>
    );
};

export { Users };