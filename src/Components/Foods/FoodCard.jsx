// import { ExpiryTime } from '../utility/ExpiryTime';
import dayjs from 'dayjs';
import { Link } from 'react-router';

const FoodCard = ({ food }) => {

    // const { addedDate, category, title, userEmail, description, expiryDate, image, quantity, _id } = food;

    const { category, title, expiryDate, image, quantity, _id } = food;

    // const now = new Date(); 

    // if (now > expiryDate) {
    //     console.log("Item is expired");
    // } else {
    //     console.log("Item is still valid");
    // }
    // const result = ExpiryTime(expiryDate)
    // console.log(result)

    const isExpired = dayjs().isAfter(dayjs(expiryDate), 'day');

    return (
        // <div className="card bg-base-100 shadow-sm">
        //     <figure>
        //         <img
        //             src={image}
        //             alt="Shoes" />
        //     </figure>
        //     <div className="card-body">
        //         <h2 className="card-title">
        //             {title.toUpperCase()}
        //         </h2>
        //         {!result &&
        //             <div className="badge badge-secondary">
        //                  <span className="text-xs">Expires in: {expiryDate}</span>
        //             </div>}
        //         <p>{description}</p>
        //         <div className="card-actions justify-end">
        //             <div className="badge badge-outline">Fashion</div>
        //             <div className="badge badge-outline">Products</div>
        //         </div>
        //     </div>
        // </div>
        <div className="card w-full bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt={title} className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl justify-between">
                    {title}
                    {!isExpired && <div className="badge badge-error">Expired</div>}
                </h2>
                {/* {!result &&
                    <div className="badge badge-secondary">
                        <span className="text-xs">Expired</span>
                    </div>} */}

                <p className="text-sm text-gray-600">Category: {category}</p>
                <p className="text-sm text-gray-600">Quantity: {quantity}</p>
                <p className="text-sm text-gray-500">Expiry Date: {dayjs(expiryDate).format('YYYY-MM-DD')}</p>
                <div className="card-actions justify-end">
                    <Link to ={`/FoodDetails/${_id}`}><button className="btn btn-primary btn-sm">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;