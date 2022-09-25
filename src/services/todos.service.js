import { axiosInstance } from "./axios.service";

const getTodos = () => {
    return axiosInstance.get("/todos");
}

export { getTodos };