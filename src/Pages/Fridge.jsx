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
    console.log(allFoods)

    const [allSelectedFoods, setAllSelectedFoods] = useState(allFoods)
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        const filtered = allFoods.filter(food =>
            food.title.toLowerCase().includes(searchText.toLowerCase()) ||
            food.description.toLowerCase().includes(searchText.toLowerCase())
        );
        setAllSelectedFoods(filtered);
    };


    const handleSortByType = (type) => {
        console.log(type);
        const sortedItems = allFoods.filter(items => items.category === type);
        setAllSelectedFoods(sortedItems);
    }

    const handleSortByOthers = () => {
        const knownCategories = [
            'Dairy',
            'Meat & Poultry',
            'Fish',
            'Vegetables',
            'Fruits',
            'Grains & Cereals',
            'Snacks',
            'Beverages',
            'Condiments & Spices',
            'Bakery',
            'Sweets & Desserts',
            'Nuts & Seeds',
            'Oils & Fats'
        ];

        const sortedItems = allFoods.filter(item =>
            item.category === 'Others' || !knownCategories.includes(item.category)
        );

        setAllSelectedFoods(sortedItems);
    };


    return (
        <div>
            <h1 className="text-4xl font-bold text-center py-10">All Items</h1>
            <div className="flex justify-center gap-4">
                <select
                    className="select select-bordered w-full max-w-xs"
                    value={selectedCategory}
                    onChange={(e) => {
                        const value = e.target.value;
                        setSelectedCategory(value);
                        if (value === 'All') {
                            setAllSelectedFoods(allFoods);
                        } else if (value === value) {
                            handleSortByOthers();
                        } else {
                            handleSortByType(value);
                        }
                    }}
                >
                    <option value="" disabled>Filter by categories</option>
                    <option value="All">All</option>
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


                <input
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        } else if (e.key === 'Escape') {
                            setSearchText('');
                            setAllSelectedFoods(allFoods);
                        }
                    }}
                    className="input input-bordered w-full max-w-xs"
                />
                <button className="btn btn-primary" onClick={handleSearch}>Search</button>

                <button className="btn btn-soft shadow-2xl" onClick={() => {
                    setAllSelectedFoods(allFoods);
                    setSearchText('');
                    setSelectedCategory('');
                }}>Reset</button>


            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
                {allSelectedFoods.length === 0 ? (
                    <p className="text-center col-span-full">No food items found.</p>
                ) : (
                    allSelectedFoods.map(food => (
                        <FoodCard key={food._id} food={food} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Fridge;