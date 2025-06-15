import React from 'react';

const FoodCard = ({ food }) => {
    // console.log(food);

    // const { addedDate, category, title, userEmail, description, expiryDate, image, quantity, _id } = food;

    const { addedDate, category, title, userEmail, description, expiryDate, image, quantity, _id } = food;

    const now = new Date(); 

    if (now > expiryDate) {
        console.log("Item is expired");
    } else {
        console.log("Item is still valid");
    }


    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title.toUpperCase()}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;