import useAxiosSecure from '../hooks/useAxiosSecure';

const UserFridgeApi = () => {
    const axiosSecure = useAxiosSecure();

    const myItemsPromise = email => {
        return axiosSecure.get(`/fridge?email=${email}`)
            .then(response => response.data)
            .catch(error => {
                console.error('Error fetching items:', error);
                throw error;
            })
            .finally(() => {
                console.log('Finished fetching items for:', email);
            });
    }

    return {
        myItemsPromise
    };
};

export default UserFridgeApi;