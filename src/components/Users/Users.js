import { useDispatch, useSelector } from "react-redux";


import { User } from "../User/User";
import { getAllUsers } from "../../services";


const Users = () => {
    const dispatch = useDispatch();
    getAllUsers().then(value => dispatch({type: 'SET_USERS', payload: value.data}));

    const users = useSelector(({userReducer}) => userReducer.users);
    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }
        </div>
    );
};

export { Users };