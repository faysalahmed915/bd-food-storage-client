import React, { useState } from 'react';

const ProfileUpdateModal = ({ isOpen, onClose, onSave, initialData }) => {
    const [formData, setFormData] = useState({
        displayName: initialData?.displayName || '',
        email: initialData?.email || '',
        photoURL: initialData?.photoURL || '',
        bio: initialData?.bio || '',
        socials: initialData?.socials || {
            facebook: '',
            twitter: '',
            linkedin: '',
            instagram: '',
            website: '',
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name in formData.socials) {
            setFormData((prev) => ({
                ...prev,
                socials: { ...prev.socials, [name]: value },
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
                    onClick={onClose}
                >
                    &times;
                </button>

                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Edit Profile</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <input
                            type="text"
                            name="displayName"
                            placeholder="Full Name"
                            value={formData.displayName}
                            onChange={handleChange}
                            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="photoURL"
                            placeholder="Photo URL"
                            value={formData.photoURL}
                            onChange={handleChange}
                            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="bio"
                            placeholder="Short Bio"
                            value={formData.bio}
                            onChange={handleChange}
                            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2"
                        />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-700">Social Links</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {Object.keys(formData.socials).map((key) => (
                            <input
                                key={key}
                                type="url"
                                name={key}
                                placeholder={`${key.charAt(0).toUpperCase() + key.slice(1)} URL`}
                                value={formData.socials[key]}
                                onChange={handleChange}
                                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        ))}
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileUpdateModal;
