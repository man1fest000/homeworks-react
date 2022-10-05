const Post = ({item}) => {
    return (
        <div>

            <h2>{item.title}</h2>
            <div>{item.body}</div>
        </div>
    );
};

export { Post };