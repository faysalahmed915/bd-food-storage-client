import React from 'react';
import { Link } from 'react-router';

const ExpiredFoodCard = ({ food }) => {
    const { image, title, category, quantity, expiryDate } = food;
    return (
        <div className="shadow-2xl rounded-lg shadow p-4 w-full max-w-sm bg-base-300">
            <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
            <div className="mt-3 space-y-1">
                <h2 className="text-lg font-semibold">{title.toUpperCase()}</h2>
                <p>Category: {category}</p>
                <p>Quantity: {quantity}</p>
                <p>
                    Expired on: {new Date(expiryDate).toLocaleDateString()}
                </p>
                <div className='flex items-center justify-between mt-4'>
                    <span className="inline-block mt-2 px-3 py-1 text-sm font-bold text-white bg-red-600 rounded-full">
                        Expired
                    </span>
                    <Link to={`/FoodDetails/${food._id}`}><button className="btn btn-primary btn-sm">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ExpiredFoodCard;