import { UserForm } from "../UserForm/UserForm";
import { useState } from "react";

import { User } from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([]);

    return (
        <div>
            <UserForm setUsers={setUsers} />
            <hr />
            <div>Users</div>
            {users.map((user, index) => (
                <User key={index} user={user} />
            ))}
        </div>
    );
};

export { Users };
