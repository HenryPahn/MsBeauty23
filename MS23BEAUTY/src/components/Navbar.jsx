import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/Navbar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = (e) => {
        e.preventDefault();
        setMenuOpen(prevClick => !prevClick);
    };

    return (
        <nav className={`navbar p-5 md:py-7 bg-white md:flex md:items-center md:justify-between font-Montserrat`}>
            <div className='flex justify-between items-center'>
                <span className='cursor-pointer'>
                    <span className='ml-2 text-2xl 2xl:text-4xl md:items-center font-Abril_Fatface'>
                        <img className='h-12 md:items-center md:h-[60px] rounded-full m-0 inline mr-3' src="logo.png" alt="logo" /> 
                        MS23 BEAUTY
                    </span>
                </span>
                <span className='absolute text-3xl cursor-pointer mx-2 block mb-3 right-2 xl:hidden'>
                    <FontAwesomeIcon icon={!menuOpen ? faBars : faXmark} onClick={handleMenuClick} />
                </span>
            </div>
            <ul className={`z-[1] w-full left-0 absolute py-4 pl-7 xl:py-0 xl:z-auto xl:w-auto xl:static xl:flex xl:items-center xl:pl-0 xl:opacity-100 top-[-400px] transition-all ease-in duration-500 ${menuOpen ? 'top-[80px] bg-white flex flex-col' : ' '}`}>
                <li className='mx-2 my-1 md:my-0'>
                    <a href='/' className={`hover-underline-animation text-xl 2xl:text-xl duration-500 ${menuOpen ? 'text-black' : ''}`}>Home</a>
                </li>
                <li
                    className='mx-2 my-1 md:my-0'
                >
                    <a href='/nails' className={`hover-underline-animation text-xl duration-500 ${menuOpen ? 'text-black' : ''}`} >
                        Nail Care
                    </a>
                </li>
                <li
                    className='mx-2 my-1 md:my-0'
                >
                    <a href='/eyelash-waxing' className={`hover-underline-animation text-xl duration-500 ${menuOpen ? 'text-black' : ''}`} >
                        Eyelash & Waxing
                    </a>
                </li>
                <li
                    className='mx-2 my-1 md:my-0'
                >
                    <a href='/promotion' className={`hover-underline-animation text-xl duration-500 ${menuOpen ? 'text-black' : ''}`} >
                        Promotions
                    </a>
                </li>
                <li className='mx-2 my-1 md:my-0'>
                    <a href='/about' className={`hover-underline-animation text-xl duration-500 ${menuOpen ? 'text-black' : ''}`}>About</a>
                </li>
                <li className='mx-2 my-1 md:my-0'>
                    <a href='https://www.instagram.com/ms23beauty/' target="_blank" className={`hover-underline-animation text-xl duration-500 ${menuOpen ? 'text-black' : ''}`}>Instagram</a>
                </li>
                <li className='mx-2 my-1 md:my-0'>
                    <a
                        href='/contact'
                        className={`hover-underline-animation text-xl duration-500 ${menuOpen ? 'text-black' : ''}`}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
