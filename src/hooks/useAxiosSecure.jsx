import axios from 'axios';
import { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const axiosInstance = axios.create({
    baseURL: 'https://bd-food-storage-server.vercel.app'
})

const useAxiosSecure = () => {
    const { user, logOut } = use(AuthContext);

    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    });

    // response interceptor
    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {
        console.log(error)
        if (error.status === 401 || error.status === 403) {
            logOut()
                .then(() => {
                    console.log('sign out user for 401 or 403 status code')
                })
                .catch(err => {
                    console.log(err)
                })
        }
        return Promise.reject(error)
    })

    return axiosInstance;
};

export default useAxiosSecure;
