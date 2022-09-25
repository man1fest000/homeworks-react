import { useEffect, useState } from "react";
import { getComments } from "../../services/comments.service";
import { Comment } from "../Comment/Comment";



const Comments = () => {

    const [comments, setComments]  = useState([]);

    useEffect(()=>{
        getComments().then(comments => setComments(comments.data))
    },[])



    return (
        <div>
            <h2>Comments</h2>

            {
                comments.map(comment => <Comment key={comment.id} comment={comment}  />)
            }
        </div>
    );
};

export { Comments };