import { axiosService } from "./axios.service";
import { urls } from "../configs";

const usersService = {
    getAll: () => axiosService.get(urls.users),
    create: (user) => axiosService.post(urls.users, user),
};

export { usersService };