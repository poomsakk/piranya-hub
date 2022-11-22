import axios from "axios";

// export const landLordApi = axios.create({
//     baseURL: 'http://localhost:8080'
// });

export const authApi = axios.create({
    baseURL: 'http://localhost:8090'
});

// export const matchingApi = axios.create({
//     baseURL: 'http://localhost:8099'
// })

export const landLordApi = axios.create({
    baseURL: 'https://piranyahub-landlordbackend.herokuapp.com'
});

// export const authApi = axios.create({
//     baseURL: 'https://piranyahub-authbackend.herokuapp.com'
// });

export const matchingApi = axios.create({
    baseURL: 'https://piranyahub-matchingbackend.herokuapp.com'
})

const axiosConfig = {
    landLordApi,
    authApi,
    matchingApi
}

export default axiosConfig;