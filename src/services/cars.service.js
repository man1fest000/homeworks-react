import { axiosServiceOwuLinkPc } from "./axios.service";
import { urls } from "../configs";

const carsService ={
    getAll: () => axiosServiceOwuLinkPc.get(urls.cars),
    create: (car) => axiosServiceOwuLinkPc.post(urls.cars,car),
    updateById: (id,car) => axiosServiceOwuLinkPc.put(`${urls.cars}/${id}`,car),
    deleteById: (id) => axiosServiceOwuLinkPc.delete(`${urls.cars}/${id}`)
}

export {carsService}