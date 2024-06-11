import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-black py-8 font-Montserrat border-t-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="mb-2 flex items-center">
                            <a href="tel:+14374327688" target="_blank">
                                <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-500" /> (437) 432-7688
                            </a>
                        </p>
                        <p className="mb-2 flex items-center">
                            <a href="mailto:ms23beauty@gmail.com" target="_blank">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-500" /> ms23beauty@gmail.com
                            </a>
                        </p>
                        <p className="mb-2">
                            <a href="https://maps.app.goo.gl/qy4vSw31r7TCvXFh6" target="_blank">
                                <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-gray-500" /> 680 Queen St W, Toronto, ON M6J 1E5
                            </a>
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
                                <FontAwesomeIcon icon={faFacebook} className="text-2xl text-gray-500" />
                            </a>
                            <a href="https://www.instagram.com/ms23beauty/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
                                <FontAwesomeIcon icon={faInstagram} className="text-2xl text-gray-500" />
                            </a>
                            <a href="https://www.tiktok.com/@ms23.beauty" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
                                <FontAwesomeIcon icon={faTiktok} className="text-2xl text-gray-500" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Open Hours</h3>
                        <ul className="list-none text-gray-700">
                            <li className="mb-2">Mon - Fri: 10:00 am – 8:00 pm</li>
                            <li className="mb-2">Sat: 10:00 am – 7:00 pm</li>
                            <li>Sun: 10:00 am – 6:00 pm</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-500 text-sm">
                    © 2024 MS23 BEAUTY CARE. All rights reserved.
                </div>
            </div>
        </footer>
    );
}



