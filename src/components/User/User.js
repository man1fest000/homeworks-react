const User = (props) => {
    let { user, lift } = props;

    return (
        <div className={'user'}>
            <h2>{user.id}</h2>
            <h2>{user.name}</h2>
            <button onClick={()=>{
                lift(user);
            }} >Address</button>
        </div>
    );
};

export default User;