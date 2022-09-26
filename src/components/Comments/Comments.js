import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Comment } from "../Comment/Comment";
import { getComments } from "../../services/comments.service";
import css from "./Comments.module.css";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then((comments) => setComments(comments.data));
    }, []);

    return (
        <div>
            <div>
                <div className={css.commentsWrap}>
                    {comments.map((comment) => (
                        <Comment key={comment.id} comment={comment} />
                    ))}
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export { Comments };
