import axios from "axios";

const apiAxiosInstance = axios.create({
    baseURL: "api",
    timeout: 10000,
});

export default apiAxiosInstance;