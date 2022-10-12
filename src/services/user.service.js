import { axiosServiceJsonPlaceholder } from "./axios.service";
import { urls } from "../configs";

const userService = {
    getAll : () => axiosServiceJsonPlaceholder.get(urls.users),
    getById : (id)=> axiosServiceJsonPlaceholder.get(`${urls.users}/${id}`)
}



export { userService  };