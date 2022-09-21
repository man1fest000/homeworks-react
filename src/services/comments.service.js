import { axiosService } from "./axios.service";
import { urls } from "../configs";

const commentsService = {
    getAll: () => axiosService.get(urls.comments),
    create: (car) => axiosService.post(urls.comments, car),

};

export { commentsService };