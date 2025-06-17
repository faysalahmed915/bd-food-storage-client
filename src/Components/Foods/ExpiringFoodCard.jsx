import React from 'react';
import ExpiryCountdown from '../DateCount/ExpiryCountdown';

const ExpiringFoodCard = ({food}) => {
    const { title, category, quantity, expiryDate, image } = food;
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
                <div className="flex flex-wrap gap-2 items-baseline justify-between mr-2">
                    <span className="inline-block mt-2 px-3 py-1 text-sm font-bold bg-red-400 rounded-full">
                    Expiring Soon
                </span>
            <ExpiryCountdown food={food} />
                </div>
            </div>
        </div>
    );
};

export default ExpiringFoodCard;