import React, { useEffect, useState } from "react";

import { getUsers } from "../../services/jsonplaceholder.api.services";
import User from "./User";

function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    const lift = (obgUser) => {
        setUser(obgUser);
    };

    useEffect(() => {
        getUsers().then((users) => setUsers(users));
    }, []);

    return (
        <div className={"users"}>
            <hr />
            {user && (
                <div className={"info"}>
                    <h3>Address</h3>
                    <div>Street: {user.address.street}</div>
                    <div>Suite: {user.address.suite}</div>
                    <div>City: {user.address.city}</div>
                    <div>Zipcode: {user.address.zipcode}</div>
                </div>
            )}
            <hr />
            {users.map((value) => (
                <User user={value} key={value.id} lift={lift} />
            ))}
        </div>
    );
}

export default Users;
