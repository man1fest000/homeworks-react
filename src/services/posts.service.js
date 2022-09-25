import { axiosInstance } from "./axios.service";

const postsService = {
    getPosts: () => {
        return axiosInstance.get("/posts");
    },
    getPostById: (id) => {
        return axiosInstance.get(`/posts/${id}`);
    }
}

export { postsService };