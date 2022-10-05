import { useDispatch, useSelector } from "react-redux";

import { Comment } from "../Comment/Comment";
import { getAllComments } from "../../services";

const Comments = () => {

    const dispatch = useDispatch();
    getAllComments().then(value => dispatch({type: 'SET_COMMENTS', payload: value.data}));

    const comments = useSelector(({commentReducer}) => commentReducer.comments);
    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>
    );
};

export { Comments };