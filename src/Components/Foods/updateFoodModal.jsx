import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import PostFridgeApi from '../../api/PostFridgeApi';

const UpdateFoodModal = ({ isOpen, onClose, item }) => {
    const { addedDate, category, title, userEmail, description, expiryDate, image, quantity, _id } = item;
    console.log(item);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { myAddItemsPromise } = PostFridgeApi();

    const [formData, setFormData] = useState({
        image: '',
        title: '',
        category: '',
        quantity: '',
        expiryDate: '',
        description: '',
    });

    const handleChange = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedItem = Object.fromEntries(formData.entries())
        console.log(updatedItem)


        fetch(`https://bd-food-storage-server.vercel.app/fridge/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Group has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/MyItems')
                }
            })
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const now = new Date();
        const dateOnly = formData.expiryDate;
        const combinedDateTime = new Date(`${dateOnly}T${now.toTimeString().split(' ')[0]}`);

        const foodItem = {
            ...formData,
            quantity: parseInt(formData.quantity),
            userEmail: user.email,
            addedDate: new Date().toISOString(),
            expiryDate: combinedDateTime.toISOString(),
        };

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
                    onClose(); // Close modal on success
                }
            })
            .catch(error => {
                console.error('Failed to add item:', error);
            });
    };

    if (!isOpen) return null; // Modal hidden if not open

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-xl w-full relative">
                <button
                    className="absolute top-3 right-3 text-xl font-bold"
                    onClick={onClose}
                    aria-label="Close Modal"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center">Add New Food</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* form fields (same as your original) */}
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
        </div>
    );
};

export default UpdateFoodModal;
