import { axiosInstance } from "./axios.service";

const getComments = () => {
    return axiosInstance.get("/comments");
}

export { getComments };