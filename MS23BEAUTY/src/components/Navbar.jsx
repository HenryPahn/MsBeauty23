import { useState, useEffect } from 'react';
import icon from '../assets/imgs/navbar/ms23_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/Navbar.css";

export default function Navbar({ scrollToFooter }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [nailDropdownOpen, setNailDropdownOpen] = useState(false);
    const [otherDropdown, setOtherDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuClick = (e) => {
        e.preventDefault();
        setMenuOpen(prevClick => !prevClick);
    };

    return (
        <nav className={`navbar p-5 bg-white md:flex md:items-center md:justify-between font-Rubik ${scrolled ? 'scrolled' : ''}`}>
            <div className='flex justify-between items-center'>
                <span className='text-2xl cursor-pointer'>
                    <img className='h-12 md:h-[100px] inline rounded-full' src={icon} alt="logo" />
                    <span className='ml-2 pt-5 text-1xl'>MS23 BEAUTY</span>
                </span>
                <span className='text-3xl cursor-pointer mx-2 md:hidden block mb-3'>
                    <FontAwesomeIcon icon={!menuOpen ? faBars : faXmark} onClick={handleMenuClick} />
                </span>
            </div>
            <ul className={`md:flex md:items-center z-[1] md:z-auto md:static w-full left-0 md:w-auto absolute md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 top-[-400px] transition-all ease-in duration-500 md:mr-10 ${menuOpen ? 'top-[80px] bg-black flex flex-col' : ' '}`}>
                <li className='mx-4 my-5 md:my-0'>
                    <a href='/' className={`hover-underline-animation text-2xl duration-500 ${menuOpen ? 'text-white' : ''}`}>Home</a>
                </li>
                <li
                    className='mx-4 my-5 md:my-0 relative'
                    onClick={() => setNailDropdownOpen(prevClick => !prevClick)}
                >
                    <a href='/services/nails' className={`hover-underline-animation text-2xl duration-500 ${menuOpen ? 'text-white' : ''}`} >
                        Nail Care
                        {nailDropdownOpen ? <FontAwesomeIcon className='ml-2' icon={faAngleUp} /> : <FontAwesomeIcon className='ml-2' icon={faAngleDown} />}
                    </a>
                    <ul className={`mt-4 ${nailDropdownOpen ? 'block text-white md:w-60 md:absolute md:z-[1] md:border-x-2 md:border-black md:bg-white md:text-black ' : 'hidden'} `}>
                        <li >
                            <a key="1" href="#" className="block px-4 py-3 text-xl hover-underline-animation">
                                Regular Polish
                            </a>
                        </li>
                        <li>
                            <a key="2" href="#" className="block px-4 py-3 text-xl hover-underline-animation">
                                Gel/Shellac
                            </a>
                        </li>
                        <li>
                            <a key="3" href="#" className="block px-4 py-3 text-xl hover-underline-animation">
                                Bio Gel / Dipping
                            </a>
                        </li>
                        <li>
                            <a key="4" href="#" className="block px-4 py-3 text-xl hover-underline-animation">
                                Nail Combo
                            </a>
                        </li>
                    </ul>
                </li>
                <li
                    className='mx-4 my-5 md:my-0'
                    onClick={() => setOtherDropdown(prevClick => !prevClick)}
                >
                    <a href='/services/eyelash-waxing' className={`hover-underline-animation text-2xl duration-500 ${menuOpen ? 'text-white' : ''}`} >
                        Eyelash & Waxing
                        {otherDropdown ? <FontAwesomeIcon className='ml-2' icon={faAngleUp} /> : <FontAwesomeIcon className='ml-2' icon={faAngleDown} />}
                    </a>
                    <ul className={`mt-4 ${otherDropdown ? 'block text-white md:w-60 md:absolute md:z-[1] md:border-x-2 md:border-black md:bg-white md:text-black ' : 'hidden'} `}>
                        <li>
                            <a key="1" href="#" className="block px-4 py-3 text-xl hover-underline-animation">
                                Eyelash
                            </a>
                        </li>
                        <li>
                            <a key="2" href="#" className="block px-4 py-3 text-xl hover-underline-animation">
                                Waxing
                            </a>
                        </li>
                    </ul>
                </li>
                <li className='mx-4 my-5 md:my-0'>
                    <a href='/promotions' className={`hover-underline-animation text-2xl duration-500 ${menuOpen ? 'text-white' : ''}`}>Promotions</a>
                </li>
                <li className='mx-4 my-5 md:my-0'>
                    <a href='https://www.instagram.com/ms23beauty/' target="_blank" className={`hover-underline-animation text-2xl duration-500 ${menuOpen ? 'text-white' : ''}`}>Instagram</a>
                </li>
                <li className='mx-4 my-5 mb-7 md:my-0'>
                    <a href='/about' className={`hover-underline-animation text-2xl duration-500 ${menuOpen ? 'text-white' : ''}`}>About</a>
                </li>
                <button 
                    onClick={() => {
                        scrollToFooter();
                        setMenuOpen(false);
                    }} 
                    className={`font-bold text-2xl duration-500 w-11/12 py-4 md:w-auto md:px-6 md:mx-4 md:my-0 mt-auto md:text-white bg-white md:bg-slate-950 md:hover:bg-slate-500 md:hover:text-white ${menuOpen ? 'block' : 'hidden'}`}>
                    Contact Us
                </button>
            </ul>
            <button 
                onClick={() => {
                    scrollToFooter();
                    setMenuOpen(false);
                }} 
                className={`text-2xl duration-500 w-11/12 py-4 md:w-auto md:px-6 md:mx-4 md:my-0 mt-auto md:text-white bg-white md:bg-slate-950 md:hover:bg-slate-500 md:hover:text-white hidden md:block`}>
                Contact Us
            </button>
        </nav>
    );
}
