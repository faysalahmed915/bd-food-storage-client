import React from 'react';
import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaGlobe,
} from 'react-icons/fa';

const SocialsProfile = () => {

    const socials = {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
        website: 'https://your-website.com',
    };

    return (
        <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-5 text-gray-600">
                    {socials.facebook && (
                        <a
                            href={socials.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition"
                        >
                            <FaFacebook size={22} />
                        </a>
                    )}
                    {socials.twitter && (
                        <a
                            href={socials.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-sky-500 transition"
                        >
                            <FaTwitter size={22} />
                        </a>
                    )}
                    {socials.linkedin && (
                        <a
                            href={socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-700 transition"
                        >
                            <FaLinkedin size={22} />
                        </a>
                    )}
                    {socials.instagram && (
                        <a
                            href={socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition"
                        >
                            <FaInstagram size={22} />
                        </a>
                    )}
                    {socials.website && (
                        <a
                            href={socials.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-600 transition"
                        >
                            <FaGlobe size={22} />
                        </a>
                    )}
                </div>
    );
};

export default SocialsProfile;