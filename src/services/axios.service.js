import axios from "axios";
import { jsonPlaceholder, owuLinkPc } from "../configs";

const axiosServiceJsonPlaceholder = axios.create({ baseURL:jsonPlaceholder });

const axiosServiceOwuLinkPc = axios.create({baseURL:owuLinkPc});

export { axiosServiceJsonPlaceholder, axiosServiceOwuLinkPc };