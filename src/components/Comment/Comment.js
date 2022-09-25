import css from './Comment.module.css'
import { Link, Outlet, useParams } from "react-router-dom";



const Comment = ({comment }) => {

    let {id} = useParams();


    return (
        <div className={css.Comment}>
            <h2>Comment - {comment.id}</h2>
            <div>PostId - {comment.postId}</div>
            <div>Id - {comment.id}</div>
            <div>Name - {comment.name}</div>
            <div>Email - {comment.email}</div>

            <Link to={`post/${comment.postId}`} >Body - {comment.body}</Link>
            
            {
                comment.postId === +id && <Outlet/>
            }

        </div>
    );
};

export { Comment };