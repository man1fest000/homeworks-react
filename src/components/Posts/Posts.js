import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { postActions } from "../../redux";
import { Post } from "../Post/Post";

const Posts = () => {
    const dispatch = useDispatch();
    const {posts, error, loading, postFromAPI} = useSelector(state => state.postReducer);
    
    useEffect(()=>{
        dispatch(postActions.getAll())
    },[])
    return (
        <div>
            {loading && <h1>Loading...</h1>} }
            {error && <h1>Error</h1>}
            {postFromAPI && <h1>{postFromAPI.title}</h1>}
            {
                posts.map(post=><Post key={post.id} post={post} />)
            }

            
        </div>
    );
};

export { Posts };