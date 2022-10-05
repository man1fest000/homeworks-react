const Comment = ({item}) => {
    return (
        <div>
            <h2>Comment</h2>
            <div>{item.name}</div>
            <div>{item.email}</div>
            <div>{item.body}</div>
        </div>
    );
};

export { Comment };