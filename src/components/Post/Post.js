
const Post = ({post}) => {
    return (
        <div>
            <h3>Post {post.id}</h3>
            <div>UserId {post.userId}</div>
            <div>Title {post.title}</div>
            <div>Body {post.body}</div>
        </div>
    );
};

export default Post;