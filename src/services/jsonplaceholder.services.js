const getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json());
};

const getUser = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => response.json());
};

export { getUsers, getUser };
