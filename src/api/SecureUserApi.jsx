import useAxiosSecure from "../hooks/useAxiosSecure";

const useSecureUserApi = () => {
    const axiosSecure = useAxiosSecure();

    const getCurrentUser = (email) => {
        return axiosSecure.get(`/allUser?email=${email}`)
            .then(response => response.data)
            .catch(error => {
                console.error('Error fetching items:', error);
                throw error;
            })
            .finally(() => {
                console.log('Finished fetching user details for:', email);
            });
    };

    return { getCurrentUser };
};

export default useSecureUserApi;
