import css from './Comment.module.css'
import { Link } from "react-router-dom";

const Comment = ({comment}) => {
    return (
        <div className={css.Comment}>
            <div>PostId - {comment.postId}</div>
            <div>Id - {comment.id}</div>
            <div>Name - {comment.name}</div>
            <div>Email - {comment.email}</div>
            {/*<div>Body - {comment.body}</div>*/}
            <Link to={`/comments/${comment.postId}/post`} >Body - {comment.body}</Link>
        </div>


    );
};

export { Comment };