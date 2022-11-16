import axios from "axios";

export const landLordApi = axios.create({
    baseURL: 'http://localhost:8080'
});

export const authApi = axios.create({
    baseURL: 'http://localhost:8090'
});

export const matchingApi = axios.create({
    baseURL: 'http://localhost:8099'
})

const axiosConfig = {
    landLordApi,
    authApi,
    matchingApi
}

export default axiosConfig;