import { axiosService } from "./axios.service";
import { urls } from "../configs";

const getAllPosts = () => axiosService.get(urls.posts);

export { getAllPosts };