import envconfig from "@/app/config/envConfig";
import axios from "axios";


const axiosInstance = axios.create({
    baseURL: envconfig.baseApi,
});

export default axiosInstance;