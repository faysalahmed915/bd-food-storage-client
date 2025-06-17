import { useState } from 'react';
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
    // console.log(allFoods)

    const [allSelectedFoods, setAllSelectedFoods] = useState(allFoods)

    const handleSortByType = (type) => {
        console.log(type);
        const sortItems = allFoods.filter(Items => Items.category === type);
        setAllSelectedFoods(sortItems);
    }

    return (
        <div>
            <h1 className="text-4xl font-bold text-center py-10">Manage Bills</h1>
            <div className="flex justify-center gap-4">
                
                
                {/* <select 
                onChange={(e) => {
                        const value = e.target.value;
                        if (value === 'All') {
                            setBills(allBills);
                        } else {
                            handleSortByType(value);
                        }
                    }}
                className="select select-bordered w-full max-w-xs">
                    <option

                    // disabled selected

                    >Filter by payment</option>
                    <option>All</option>
                    <option>Paid</option>
                    <option>Unpaid</option>
                </select> */}


                <select
                    className="select select-bordered w-full max-w-xs"
                    onChange={(e) => {
                        const value = e.target.value;
                        if (value === 'All') {
                            setAllSelectedFoods(allFoods);
                        } else {
                            handleSortByType(value);
                        }
                    }}
                >
                    <option

                    disabled selected

                    >Filter by categories</option>
                    <option>All</option>
                    <option>Dairy</option>
                        <option>Meat & Poultry</option>
                        <option>Fish</option>
                        <option>Vegetables</option>
                        <option>Fruits</option>
                        <option>Grains & Cereals</option>
                        <option>Snacks</option>
                        <option>Beverages</option>
                        <option>Condiments & Spices</option>
                        <option>Bakery</option>
                        <option>Sweets & Desserts</option>
                        <option>Nuts & Seeds</option>
                        <option>Oils & Fats</option>
                        <option>Others</option>
                </select>
                <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-primary">Search</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
                {allSelectedFoods.map(food => (
                    <FoodCard key={food._id} food={food} />
                ))}
                
            </div>
        </div>
    );
};

export default Fridge;