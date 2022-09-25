import { axiosInstance } from "./axios.service";

const getAlbums = () => {
    return axiosInstance.get("/albums");
}

export { getAlbums };