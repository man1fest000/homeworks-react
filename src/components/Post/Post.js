import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { postsService } from "../../services/posts.service";
import css from "./Post.module.css";

const Post = () => {
    const { id } = useParams();

    const [post, setPost] = useState([]);

    useEffect(() => {
        postsService.getPostById(id).then(({ data }) => setPost(data));
    }, [id]);

    return (
        <div className={css.Post}>
            <h2>Post - {post.id}</h2>
            <div>UserId - {post.userId}</div>
            <div>Title - {post.title}</div>
            <div>Body - {post.body}</div>
        </div>
    );
};

export { Post };
