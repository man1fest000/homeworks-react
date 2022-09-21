import {  useState } from "react";

import { CommentForm } from "../CommentForm/CommentForm";
import { Comment } from "../Comment/Comment";



const Comments = () => {
    const [comments, setComments] = useState([]);



    return (
        <div>
            <CommentForm setComments={setComments} />
            <hr/>
            <div>Comments</div>
            {comments.map((comment, index) => <Comment key={index} comment={comment} />)}

        </div>
    );
};

export { Comments };