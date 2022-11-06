import axios from "axios";

export const landLordApi = axios.create({
    baseURL: 'http://localhost:8080'
});

export const authApi = axios.create({
    baseURL: 'http://localhost:8090'
});

const axiosConfig = {
    landLordApi,
    authApi
}

export default axiosConfig;