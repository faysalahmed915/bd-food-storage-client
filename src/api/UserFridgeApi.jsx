import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const UserFridgeApi = () => {
    const axiosSecure = useAxiosSecure();

    const myItemsPromise = email => {
        return axiosSecure.get(`/fridge?email=${email}`)
            .then(response => response.data)
            .catch(error => {
                console.error('Error fetching items:', error);
                throw error;
            });
    }

    return {
        myItemsPromise
    };
};

export default UserFridgeApi;