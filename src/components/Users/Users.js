
import { useEffect, useState } from "react";

import {getUsersAxios} from "../../services/users.axios.service";
import User from "../User/User";

const Users = ({getPostsByUserId}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsersAxios().then((users) => setUsers(users));
    });

    return (
        <div className={'users'}>
            {
                users.map((user) => <User user={user} key={user.id} getPostsByUserId={getPostsByUserId} />)
            }
        </div>
    );
};

export default Users;