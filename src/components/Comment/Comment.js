import { Link } from "react-router-dom";

import css from './Comment.module.css'



const Comment = ({comment }) => {



    return (
        <div className={css.Comment}>
            <h2>Comment - {comment.id}</h2>
            <div>PostId - {comment.postId}</div>
            <div>Id - {comment.id}</div>
            <div>Name - {comment.name}</div>
            <div>Email - {comment.email}</div>
            <div>Body - <Link to={`post/${comment.postId}`}>{comment.body}</Link></div>
            


        </div>
    );
};

export { Comment };