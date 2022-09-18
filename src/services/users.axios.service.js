import axiosInstance from "./axios.service";

const getUsersAxios = () => {
    return axiosInstance.get("/users").then((response) => response.data);
}

const getUserAxios = (id) => {
    return axiosInstance.get(`/users/${id}`).then((response) => response.data);
}

export { getUsersAxios, getUserAxios };