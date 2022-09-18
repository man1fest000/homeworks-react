

const User = ({user, getPostsByUserId}) => {
    return (
        <div>
            <h2>Id: {user.id}</h2>
            <h3>Name: {user.name}</h3>
            <h3>User Name: {user.username}</h3>
            <button onClick={
                () => getPostsByUserId(user.id)
            } >Posts</button>
        </div>
    );
};

export default User;