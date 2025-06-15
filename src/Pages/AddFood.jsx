import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
// import toast from 'react-hot-toast';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddFood = () => {
    const { user } = useContext(AuthContext); // assumes user.email is available
    const navigate = useNavigate();

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

        const foodItem = {
            ...formData,
            quantity: parseInt(formData.quantity),
            userEmail: user.email,
            addedDate: new Date().toISOString(),
        };
        // console.log(foodItem);


        axios.post('http://localhost:3000/fridge', foodItem)
            .then(res => {
                // console.log(res.data)
                if (res.data.insertedId) {
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
                console.log(error)
            })

        // try {
        //     const res = await fetch('http://localhost:3000/foods', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(foodItem),
        //     });

        //     if (res.ok) {
        //         toast.success('Food item added successfully!');
        //         navigate('/my-items');
        //     } else {
        //         toast.error('Failed to add item.');
        //     }
        // } catch (err) {
        //     console.error(err);
        //     toast.error('Error adding food item.');
        // }
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
                    <select name="category" onChange={handleChange} className="select select-bordered w-full" required>
                        <option disabled selected value="">Select Category</option>
                        <option>Dairy</option>
                        <option>Meat & Poultry</option>
                        <option>Seafood</option>
                        <option>Vegetables</option>
                        <option>Fruits</option>
                        <option>Grains & Cereals</option>
                        <option>Snacks</option>
                        <option>Beverages</option>
                        <option>Frozen Foods</option>
                        <option>Canned & Jarred</option>
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
