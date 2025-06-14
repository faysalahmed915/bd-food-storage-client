import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const hobbyCategories = [
    'Drawing & Painting',
    'Photography',
    'Video Gaming',
    'Fishing',
    'Running',
    'Cooking',
    'Reading',
    'Writing',
    'Custom'
];

const UpdateGroup = () => {

    const navigate = useNavigate()
    const group = useLoaderData();
    const { user } = useContext(AuthContext);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [customCategory, setCustomCategory] = useState('');

    const id = group._id
    // const { id } = useParams()
    // console.log(id)

    const updateGroup = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        // console.log('Form Data:', Object.fromEntries(formData.entries()));
        const updatedGroup = Object.fromEntries(formData.entries())
        console.log(updatedGroup)


        fetch(`https://pawsome-hobby-server.vercel.app/createGroup/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedGroup)
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
                navigate('/MyGroup')
                }
            })

        // const updatedGroup = {
        //     groupName,
        //     category: selectedCategory === 'Custom' ? customCategory : selectedCategory,
        //     description,
        //     location,
        //     maxMembers,
        //     startDate,
        //     imageUrl,
        //     userName: user?.displayName || '',
        //     userEmail: user?.email || ''
        // };

        // console.log('Updated Group:', updatedGroup);
        // Proceed with API call here
    };

    return (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-6">Update Hobby Group</h2>

                <form className="space-y-6" onSubmit={updateGroup}>
                    {/* Group Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Group Name</label>
                        <input
                            type="text"
                            name="groupName"
                            defaultValue={group?.groupName}
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Hobby Category */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Hobby Category</label>
                        {selectedCategory === 'Custom' ? (
                            <input
                                type="text"
                                name="Category"
                                required
                                value={customCategory}
                                onChange={(e) => setCustomCategory(e.target.value)}
                                placeholder="Enter your custom hobby"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        ) : (
                            <select
                                required
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select a category</option>
                                {hobbyCategories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            rows="4"
                            name="description"
                            defaultValue={group?.description}
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Meeting Location */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Meeting Location</label>
                        <input
                            type="text"
                            name="location"
                            defaultValue={group?.location}
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Max Members, Start Date, Image URL */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Max Members</label>
                            <input
                                type="number"
                                name="maxMembers"
                                defaultValue={group?.maxMembers}
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                            <input
                                type="date"
                                name="startDate"
                                defaultValue={group?.startDate}
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                            <input
                                type="url"
                                name="imageUrl"
                                defaultValue={group?.imageUrl}
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* User Info (readonly) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
                            <input
                                type="text"
                                name="userName"
                                value={user?.displayName || ''}
                                readOnly
                                className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-700"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">User Email</label>
                            <input
                                type="email"
                                name="userEmail"
                                value={user?.email || ''}
                                readOnly
                                className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-700"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-8 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default UpdateGroup;
