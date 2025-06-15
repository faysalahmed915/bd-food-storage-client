import dayjs from 'dayjs';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FoodDetails = () => {

    const foodDetails = useLoaderData();
    console.log(foodDetails);

    const { addedDate, category, title, userEmail, description, expiryDate, image, quantity, _id } = foodDetails;

    // const id = useParams();
    // console.log(id)
    const isExpired = dayjs().isAfter(dayjs(expiryDate), 'day');
    

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <div className="card-body">
                <h2 className="card-title text-xl justify-between">
                    {title}
                    {isExpired && <div className="badge badge-error">Expired</div>}
                </h2>
                {/* {!result &&
                    <div className="badge badge-secondary">
                        <span className="text-xs">Expired</span>
                    </div>} */}

                <p className="text-sm text-gray-600">Category: {category}</p>
                <p className="text-sm text-gray-600">Quantity: {quantity}</p>
                <p className="text-sm text-gray-500">Expiry Date: {dayjs(expiryDate).format('YYYY-MM-DD')}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm">See Details</button>
                </div> */}
            </div>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;