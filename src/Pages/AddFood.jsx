import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
// import toast from 'react-hot-toast';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import PostFridgeApi from '../api/PostFridgeApi';

const AddFood = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    const navigate = useNavigate();
    const { myAddItemsPromise } = PostFridgeApi();
    // console.log(myAddItemsPromise);


    const [formData, setFormData] = useState({
        image: '',
        title: '',
        category: '',
        quantity: '',
        expiryDate: '',
        description: '',
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const now = new Date(); // current time
        const dateOnly = formData.expiryDate; // e.g. "2025-06-20"
        const combinedDateTime = new Date(`${dateOnly}T${now.toTimeString().split(' ')[0]}`); // "2025-06-20T17:45:00"

        const foodItem = {
            ...formData,
            quantity: parseInt(formData.quantity),
            userEmail: user.email,
            addedDate: new Date().toISOString(),
            expiryDate: combinedDateTime.toISOString(),
        };
        console.log(foodItem);


        myAddItemsPromise(foodItem)
            .then(res => {
                if (res.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Food has been added to the fridge",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/MyItems');
                }
            })
            .catch(error => {
                console.error('Failed to add item:', error);
            });
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-base-100 shadow-xl rounded-xl mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Add New Food</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                    <label className="label">Food Title</label>
                    <input type="text" name="title" onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="label">Food Image URL</label>
                    <input type="text" name="image" onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="label">Category</label>
                    <select
                        name="category"
                        onChange={handleChange}
                        className="select select-bordered w-full"
                        required
                        defaultValue=""
                    >
                        <option disabled value="">Select Category</option>
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
                </div>

                <div>
                    <label className="label">Quantity</label>
                    <input type="number" name="quantity" min="1" onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="label">Expiry Date</label>
                    <input type="date" name="expiryDate" onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="label">Description</label>
                    <textarea name="description" onChange={handleChange} className="textarea textarea-bordered w-full" required />
                </div>

                <button type="submit" className="btn btn-primary w-full">Add Food</button>
            </form>
        </div>
    );
};

export default AddFood;
