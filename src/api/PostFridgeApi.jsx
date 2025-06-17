import useAxiosSecure from '../hooks/useAxiosSecure';

const PostFridgeApi = () => {
  const axiosSecure = useAxiosSecure();

  const myAddItemsPromise = (email) => {
    return axiosSecure.post('/fridge', { email }) 
      .then(response => response.data)
      .catch(error => {
        console.error('Error posting items:', error);
        throw error;
      })
      .finally(() => {
        console.log('Finished posting items for:', email);
      });
  };

  return {
    myAddItemsPromise,
  };
};

export default PostFridgeApi;
