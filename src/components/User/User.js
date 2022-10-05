const User = ({item}) => {
    return (
        <div>
            <h2>{item.name}</h2>
            <div>{item.username}</div>
            <div>{item.email}</div>
            <div>{item.phone}</div>
            <div>{item.website}</div>


        </div>
    );
};

export { User };