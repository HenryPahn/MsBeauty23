import storeImage from '../assets/imgs/footer/store_image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Footer({ formRef }) {
    return (
        <>
            <footer className="bg-white py-8 border-t border-gray-200 font-Rubik">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                            <img src={storeImage} alt="MS Beauty Care" className="mb-4" />
                            <h2 className="text-xl font-semibold">
                                680 Queen St W, Toronto, ON M6J 1E5
                            </h2>
                            <a
                                href="https://maps.app.goo.gl/sVvrHgpPfbsncWqc7"
                                className="text-gray-600 hover:text-black flex items-center mt-2"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span className='ml-2'>Directions</span>
                            </a>
                        </div>
                        <div className="w-full md:w-1/3 px-4 md:mb-0">
                            <h2 className="text-xl font-semibold mb-4">NEED HELP?</h2>
                            <ul className="list-none">
                                <li className="mb-2">
                                    <a href="/giftcard" className="text-gray-600 hover:text-black">
                                        Gift Cards
                                    </a>
                                </li>
                                <li>
                                    <a href="/faq" className="text-gray-600 hover:text-black">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                            <h2 className="text-xl font-semibold mt-10 mb-4">CUSTOMER SERVICE</h2>
                            <ul className="list-none">
                                <li className="mb-2">
                                    <a href="mailto:ms23beauty@gmail.com" className="text-gray-600 hover:text-black">
                                        ms23beauty@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+14374327688" className="text-gray-600 hover:text-black">
                                        (437) 432-7688
                                    </a>
                                </li>
                            </ul>
                            <h2 className="text-xl font-semibold mt-10 md:mb-4">OUR HOURS</h2>
                            <ul className="text-gray-700">
                                <li className="mb-2">
                                    <span>Mon - Fri: 10:00am – 8:00pm</span>
                                </li>
                                <li className="mb-2">
                                    <span>Sat: 10:00am – 7:00pm</span>
                                </li>
                                <li className="">
                                    <span>Sun: 10:00am – 5:00pm</span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full mt-10 md:w-1/3 px-4" ref={formRef}>
                            <h2 className="text-xl font-semibold mb-4 md:text-center">Contact Us</h2>
                            <form className="space-y-4" >
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="border border-gray-300 p-2 w-full"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="border border-gray-300 p-2 w-full"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="border border-gray-300 p-2 w-full"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        className="border border-gray-300 p-2 w-full"
                                    />
                                </div>
                                <textarea
                                    placeholder="Your Inquiry"
                                    className="border border-gray-300 p-2 w-full"
                                    rows="4"
                                ></textarea>
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="bg-black text-white p-2 rounded w-full md:bg-slate-950 md:hover:bg-slate-500"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}