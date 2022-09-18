import Post from "../Post/Post";

const Posts = ({posts}) => {
    return (
        <div className={'posts'}>
            {
                posts.map((post) => <Post post={post} key={post.id} />)
            }
        </div>
    );
};

export default Posts;