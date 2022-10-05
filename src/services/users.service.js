import { axiosService } from "./axios.service";

import { urls } from "../configs";


const getAllUsers = () => axiosService.get(urls.users);

export { getAllUsers };