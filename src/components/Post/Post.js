import css from './Post.module.css'
import { useDispatch } from "react-redux";
import { postActions } from "../../redux";

const Post = ({post}) => {
    const {userId, id, title, body} = post
    const dispatch = useDispatch();
    return (
        <div className={css.Post}>
            <div>userId: {userId} </div>
            <div>id: {id} </div>
            <div>title: {title} </div>
            <div>body: {body} </div>
            <button onClick={()=> dispatch(postActions.setCurrentPost(post))}>Select</button>
            <button onClick={()=>dispatch(postActions.deletePostById(id))}>delete</button>
        </div>
    );
};

export { Post };