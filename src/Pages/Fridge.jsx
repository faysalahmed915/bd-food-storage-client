import FoodCard from '../Components/Foods/FoodCard';
import { useLoaderData } from 'react-router';

const Fridge = () => {
    
    // const fetchFoods = async () => {
    //     try {
    //        const response = await axios.get('http://localhost:3000/fridge')
    //     .then(response => {
    //         console.log(response.data);
    //     })
    //     }
    //     .catch(error => {
    //         console.error('Error fetching fridge items:', error);
    //     });
    // }

    // console.log(fetchFoods)

    const allFoods = useLoaderData();
    console.log(allFoods)

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
                {allFoods.map(food => (
                    <FoodCard key={food._id} food={food} />
                ))}
            </div>
        </div>
    );
};

export default Fridge;