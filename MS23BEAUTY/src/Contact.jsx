// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// export default function Contact() {
//     const form = useRef();
//     const [messageSent, setMessageSent] = useState(false);
//     const [messageError, setMessageError] = useState(false);
//     const [charCount, setCharCount] = useState(0);

//     const sendEmail = (e) => {
//         e.preventDefault();
//         if (charCount > 250) {
//             setMessageError(true);
//             return;
//         }

//         emailjs
//             .sendForm('service_30ynwbk', 'template_txihllw', form.current, {
//                 publicKey: 'SB78WrzB1Teox8ykP',
//             })
//             .then(
//                 () => {
//                     console.log('SUCCESS!');
//                     setMessageSent(true);
//                 },
//                 (error) => {
//                     console.log('FAILED...', error.text);
//                 },
//             );
//     };

//     const handleMessageChange = (e) => {
//         const message = e.target.value;
//         setCharCount(message.length);
//         if (message.length <= 250) {
//             setMessageError(false);
//         }
//     };

//     return (
//         <div className="flex flex-col min-h-screen">
//             <Navbar />
//             <main className="flex-grow">
//                 {messageSent ? (
//                     <div className="flex flex-col items-center justify-center mt-32 md:mt-60">
//                         <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full">
//                             <FontAwesomeIcon icon={faCheckCircle} className="text-black text-5xl mb-4" />
//                             <h2 className="text-2xl font-semibold mb-2">Success!</h2>
//                             <p className="text-gray-600">Your form has been sent successfully.</p>
//                             <p className="text-gray-600 mb-6">Our team will contact you shortly.</p>
//                             <button
//                                 className="bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-700"
//                             >
//                                 <a href='/'>Return Home</a>
//                             </button>
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="flex justify-center mt-40 mb-20 md:mt-48 px-4 font-Montserrat">
//                         <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
//                             <h2 className="text-3xl mb-4 text-center font-Abril_Fatface">Contact Us</h2>
//                             <form className="space-y-4" ref={form} onSubmit={sendEmail}>
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <input
//                                         type="text"
//                                         placeholder="First Name"
//                                         className="border border-gray-300 p-2 w-full rounded"
//                                         name="first_name"
//                                     />
//                                     <input
//                                         type="text"
//                                         placeholder="Last Name"
//                                         className="border border-gray-300 p-2 w-full rounded"
//                                         name="last_name"
//                                     />
//                                 </div>
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <input
//                                         type="email"
//                                         placeholder="Email Address"
//                                         className="border border-gray-300 p-2 w-full rounded"
//                                         name="email"
//                                     />
//                                     <input
//                                         type="tel"
//                                         placeholder="Phone"
//                                         className="border border-gray-300 p-2 w-full rounded"
//                                         name="phone"
//                                     />
//                                 </div>
//                                 <textarea
//                                     placeholder="Your Inquiry"
//                                     className={`border border-gray-300 p-2 w-full rounded ${messageError ? 'border-red-500' : ''}`}
//                                     rows="4"
//                                     name='message'
//                                     onChange={handleMessageChange}
//                                     maxLength="250"
//                                 ></textarea>
//                                 {messageError && (
//                                     <p className="text-red-500">Message exceeds 250 characters.</p>
//                                 )}
//                                 <div className="flex justify-center">
//                                     <button
//                                         type="submit"
//                                         className="bg-black text-white p-2 rounded w-full md:bg-slate-950 md:hover:bg-slate-500"
//                                         value="Send"
//                                     >
//                                         Submit
//                                     </button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 )}
//             </main>
//             <Footer />
//         </div>
//     );
// }

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        inquiry: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://ms23beauty-backend.vercel.app/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setIsSubmitted(true);
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
            {isSubmitted ? (
                <div className="flex flex-col items-center justify-center mt-32 md:mt-60">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-black text-5xl mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">Success!</h2>
                        <p className="text-gray-600">Your form has been sent successfully.</p>
                        <p className="text-gray-600 mb-6">Our team will contact you shortly.</p>
                        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-700">
                            <a href="/">Return Home</a>
                        </button>
                    </div>
                </div>
            ) : (
                
                    <div className="flex flex-col items-center justify-center mt-24 lg:mt-36 xl:mt-40">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                            <h2 className="text-center text-2xl font-semibold mb-6">Contact Us</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input
                                        type="text"
                                        name="first_name"
                                        placeholder="First Name"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        className="border p-2 rounded"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="last_name"
                                        placeholder="Last Name"
                                        value={formData.last_name}
                                        onChange={handleChange}
                                        className="border p-2 rounded"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="border p-2 rounded"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="border p-2 rounded"
                                        required
                                    />
                                </div>
                                <textarea
                                    name="inquiry"
                                    placeholder="Your Inquiry"
                                    value={formData.inquiry}
                                    onChange={handleChange}
                                    className="border p-2 rounded w-full h-32 mb-4"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-black text-white px-4 py-2 w-full hover:bg-slate-700"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                
            )}
            </main>
            <Footer />
        </div>
    );
};

export default ContactForm;
