import dayjs from 'dayjs';
import { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import ExpiryCountdown from '../DateCount/ExpiryCountdown';

const FoodDetails = () => {

    const { user } = useContext(AuthContext);

    const foodDetails = useLoaderData();
    console.log(foodDetails);

    const navigate = useNavigate();

    // const { title, userEmail, description, expiryDate, image, _id } = foodDetails;
    const { addedDate, category, title, userEmail, description, expiryDate, image, quantity, _id } = foodDetails;


    // const { id } = useParams()
    //   if (!foodDetails) return null;

    //   const food = foodDetails.find(food => food._id === id);


    const handleDelete = () => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {

                fetch(`https://bd-food-storage-server.vercel.app/fridge/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after delete', data)
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                navigate('/MyFoods');
            }
        });
    }




    // const id = useParams();
    // console.log(id)
    const isExpired = dayjs().isAfter(dayjs(expiryDate), 'day');






    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            {/* Image Banner */}
            <div className="w-full md:h-96 lg:max-h-[550px] rounded-2xl overflow-hidden shadow">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Title and Actions */}
            <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <h1 className="text-3xl font-bold">{title.toUpperCase()}</h1>



                {
                    (user.email === userEmail) ? <div className="flex flex-wrap gap-2">

                        <Link
                            to={`/`}
                            // to={`/updateFood/${_id}`}
                            className="text-white px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 transition"
                        >
                            Add Note
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition"
                        >
                            Delete Item
                        </button>
                    </div> : <button
                        // onClick={() => onJoin(_id)}
                        disabled={isExpired}
                        className={`px-4 py-2 rounded-xl transition text-white ${isExpired
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-green-600 hover:bg-green-700'
                            }`}
                    >
                        Add to Favourite
                    </button>
                }



            </div>

            {/* Description */}
            <p className="mt-4 text-lg">{description}</p>

            {/* Prominent Deadline */}
            <div
                className={`mt-6 p-4 rounded-xl shadow-sm flex items-start gap-3 ${isExpired
                    ? 'bg-red-100 border-l-4 border-red-500'
                    : 'bg-yellow-100 border-l-4 border-yellow-500'
                    }`}
            >
                <div className="flex flex-wrap items-center justify-between w-full gap-2">
                    <div className='flex items-center gap-2'>
                        <span className="text-2xl">
                            {isExpired ? '🚫' : '⏳'}
                        </span>
                        <div>
                            <p
                                className={`font-semibold text-lg ${isExpired ? 'text-red-800' : 'text-yellow-800'
                                    }`}
                            >
                                {isExpired ? 'Expired on:' : 'Expiry Date:'}
                            </p>
                            <p
                                className={`text-base font-medium ${isExpired ? 'text-red-700' : 'text-yellow-700'
                                    }`}
                            >
                                {expiryDate ? dayjs(expiryDate).format('YYYY-MM-DD') : 'No deadline set'}
                            </p>
                        </div>
                    </div>
                    <div>
                        <ExpiryCountdown food={foodDetails}></ExpiryCountdown>
                    </div>
                </div>

            </div>

            {/* Details Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                <p><strong>📅 Added Date:</strong> {dayjs(addedDate).format('YYYY-MM-DD')}</p>
                <p><strong>🍽️ Category:</strong> {category}</p>
                <p><strong>🔢 Quantity:</strong> {quantity}</p>
                {/* <p><strong>📍 Location:</strong> {group.location}</p>
        <p><strong>👥 Max Members:</strong> {group.maxMembers}</p>
        <p><strong>📅 Starts:</strong> {group.startDate}</p>
        <p><strong>👤 Created By:</strong> {group.userName}</p>
        <p><strong>📧 Email:</strong> {group.userEmail}</p>
        <p><strong>🆔 ID:</strong> {group._id}</p> */}
            </div>


        </div>
        // <div className="hero bg-base-200 p-8">
        //     <div className="hero-content flex-col lg:flex-row">
        //         <img
        //             src={image}
        //             className="max-w-sm rounded-lg shadow-2xl"
        //         />
        //         <div>
        //             <h1 className="text-5xl font-bold">{title}</h1>
        //             <div className="card-body">
        //         <h2 className="card-title text-xl justify-between">
        //             {title}
        //             {isExpired && <div className="badge badge-error">Expired</div>}
        //         </h2>
        //         {/* {!result &&
        //             <div className="badge badge-secondary">
        //                 <span className="text-xs">Expired</span>
        //             </div>} */}

        //         <p>Category: {category}</p>
        //         <p>Quantity: {quantity}</p>
        //         <p>Description: {description}</p>
        //         <p>Expiry Date: {dayjs(expiryDate).format('YYYY-MM-DD')}</p>
        //         {/* <div className="card-actions justify-end">
        //             <button className="btn btn-primary btn-sm">See Details</button>
        //         </div> */}
        //     </div>
        //             <button className="btn btn-primary">Get Started</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default FoodDetails;