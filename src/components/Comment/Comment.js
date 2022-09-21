import css from "./Comment.module.css";

const Comment = ({comment}) => {
    return (
        <div className={css.Comment}>
        <div>{comment.name}</div>
        <div>{comment.email}</div>
        <div>{comment.body}</div>
        </div>
    );
};

export { Comment };