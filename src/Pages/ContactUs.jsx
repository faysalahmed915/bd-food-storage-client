import React from 'react';

const ContactUs = () => {
    return (
        <section className="py-12 px-2 md:px-4 lg:px-8 max-w-7xl mx-auto">
            <div className="grid max-w-7xl grid-cols-1 mx-auto md:grid-cols-2 md:divide-x md:divide-gray-300">
                {/* Contact Info */}
                <div className="py-8 md:pr-6">
                    <h1 className="text-4xl font-extrabold mb-2">Get in touch</h1>
                    <p className="mb-6">We’d love to hear from you. Here’s how you can reach us.</p>
                    <div className="space-y-5">
                        <p className="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-blue-600" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            Dhaka, Bangladesh
                        </p>
                        <p className="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-blue-600" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            123456789
                        </p>
                        <p className="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-blue-600" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            bd-food-storage@business.com
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <form noValidate className="flex flex-col py-8 space-y-6 md:pl-6">
                    <h1 className="text-4xl font-extrabold mb-2">Let Us Know</h1>
                    <label className="block">
                        <span className="text-sm font-medium">Full Name</span>
                        <input type="text" placeholder="Your name"
                            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </label>
                    <label className="block">
                        <span className="text-sm font-medium">Email Address</span>
                        <input type="email" placeholder="Your email"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </label>
                    <label className="block">
                        <span className="text-sm font-medium">Message</span>
                        <textarea rows="4" placeholder="Your message"
                            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </label>
                    <button type="submit"
                        className="w-full md:w-auto self-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
