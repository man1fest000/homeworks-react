import { axiosServiceJsonPlaceholder } from "./axios.service";
import { urls } from "../configs";

const postService = {
    getAll : () => axiosServiceJsonPlaceholder.get(urls.posts),
    getById : (id) => axiosServiceJsonPlaceholder.get(`${urls.posts}/${id}`)
}

export { postService };