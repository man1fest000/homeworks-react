import { axiosService } from "./axios.service";
import { urls } from "../configs";

const getAllComments = () => axiosService.get(urls.comments);

export { getAllComments };