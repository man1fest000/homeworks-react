import { useEffect, useState } from "react";
import { postsService } from "../../services/posts.service";
import { useParams } from "react-router-dom";

const Post = () => {

    const { id } = useParams();


    const [post, setPost] = useState([]);

    useEffect(() => {
        postsService.getPostById(id).then(({ data }) => setPost(data));
    }, [id]);

    return (
        <div>
            <h2>Post</h2>
            <div>UserId - {post.userId}</div>
            <div>Id - {post.id}</div>
            <div>Title - {post.title}</div>
            <div>Body - {post.body}</div>
        </div>
    );
};

export { Post };