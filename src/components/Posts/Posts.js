import { useDispatch, useSelector } from "react-redux";

import { Post } from "../Post/Post";
import { getAllPosts } from "../../services";

const Posts = () => {

    const dispatch = useDispatch();

    getAllPosts().then(value => dispatch({type: 'SET_POSTS', payload: value.data}));

    const posts = useSelector(({postReducer}) => postReducer.posts);


    return (
        <div>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }

        </div>
    );
};

export { Posts };