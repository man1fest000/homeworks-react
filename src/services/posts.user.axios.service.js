import axiosInstance from "./axios.service";


const getPostsUserAxios = (id) => {
    return axiosInstance( `/users/${id}/posts` ).then((response) => response.data);
}

export { getPostsUserAxios };