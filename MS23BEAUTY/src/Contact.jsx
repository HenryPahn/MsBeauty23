import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [charCount, setCharCount] = useState(0);

    const sendEmail = (e) => {
        e.preventDefault();
        if (charCount > 250) {
            setMessageError(true);
            return;
        }

        emailjs
            .sendForm('service_30ynwbk', 'template_txihllw', form.current, {
                publicKey: 'SB78WrzB1Teox8ykP',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setMessageSent(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const handleMessageChange = (e) => {
        const message = e.target.value;
        setCharCount(message.length);
        if (message.length <= 250) {
            setMessageError(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                {messageSent ? (
                    <div className="flex flex-col items-center justify-center mt-32 md:mt-60">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-black text-5xl mb-4" />
                            <h2 className="text-2xl font-semibold mb-2">Success!</h2>
                            <p className="text-gray-600">Your form has been sent successfully.</p>
                            <p className="text-gray-600 mb-6">Our team will contact you shortly.</p>
                            <button
                                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-700"
                            >
                                <a href='/'>Return Home</a>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center mt-40 mb-20 md:mt-48 px-4 font-Montserrat">
                        <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-3xl mb-4 text-center font-Abril_Fatface">Contact Us</h2>
                            <form className="space-y-4" ref={form} onSubmit={sendEmail}>
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="border border-gray-300 p-2 w-full rounded"
                                        name="first_name"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="border border-gray-300 p-2 w-full rounded"
                                        name="last_name"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="border border-gray-300 p-2 w-full rounded"
                                        name="email"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        className="border border-gray-300 p-2 w-full rounded"
                                        name="phone"
                                    />
                                </div>
                                <textarea
                                    placeholder="Your Inquiry"
                                    className={`border border-gray-300 p-2 w-full rounded ${messageError ? 'border-red-500' : ''}`}
                                    rows="4"
                                    name='message'
                                    onChange={handleMessageChange}
                                    maxLength="250"
                                ></textarea>
                                {messageError && (
                                    <p className="text-red-500">Message exceeds 250 characters.</p>
                                )}
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="bg-black text-white p-2 rounded w-full md:bg-slate-950 md:hover:bg-slate-500"
                                        value="Send"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
