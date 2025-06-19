import React, { useState } from 'react';
import SearchBar from './searchbar.jsx';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';

const languages = [
    "English, USD",
    "Urdu, PKR",
    "French, EUR",
    "Arabic, SAR"
];
const helps = [
    "Help 1",
    "Help 2"
];

const shipflags = [
    { name: "United States", flag: "https://flagcdn.com/us.svg" },
    { name: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
    { name: "Canada", flag: "https://flagcdn.com/ca.svg" },
    { name: "Germany", flag: "https://flagcdn.com/de.svg" },
    { name: "France", flag: "https://flagcdn.com/fr.svg" },
    { name: "India", flag: "https://flagcdn.com/in.svg" },
    { name: "Pakistan", flag: "https://flagcdn.com/pk.svg" },
    { name: "Australia", flag: "https://flagcdn.com/au.svg" },
    { name: "China", flag: "https://flagcdn.com/cn.svg" },
    { name: "United Arab Emirates", flag: "https://flagcdn.com/ae.svg" },
];


function Navbar() {

    const [showLanguages, setShowLanguages] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("English, USD");
    const [showhelp, setshowhelp] = useState(false);
    const [showshipping, setshowshipping] = useState(false);
    const [selectedshipping, setselectedshipping] = useState("https://flagcdn.com/us.svg");

    return (
        <>

            {/* Top Navbar */}
            <div className="hidden sm:flex flex-wrap items-center gap-12 justify-center p-4 border-b border-gray-200 w-full">
                {/* Logo */}
                <div className="flex items-center gap-1  p-2">
                    <div className="bg-indigo-500 p-2 rounded-md ">
                        <LiaShoppingBagSolid className="text-3xl text-white" />
                    </div>
                    <p className="text-2xl italic md:text-3xl text-indigo-500 font-extrabold">𝓢𝓱𝓸𝓹𝔃𝔂</p>

                </div>

                {/* Search Bar */}
                <SearchBar />

                {/* Icon Links */}
                <div className="flex gap-6 items-center text-xs text-gray-400">

                    <Link to="/profile" className="flex flex-col gap-1 items-start hover:text-blue-500 transition cursor-pointer">
                        <CgProfile className="text-2xl" />
                        <span>Profile</span>
                    </Link>

                    <Link to="/messages" className="flex flex-col gap-1 items-start hover:text-blue-500 transition cursor-pointer">
                        <MdMessage className="text-2xl" />
                        <span>Messages</span>
                    </Link>

                    <Link to="/orders" className="flex flex-col gap-1 items-start hover:text-blue-500 transition cursor-pointer">
                        <FaHeart className="text-2xl" />
                        <span>Orders</span>
                    </Link>

                    <Link to="/my-cart" className="flex flex-col gap-1 items-start hover:text-blue-500 transition cursor-pointer">
                        <AiOutlineShoppingCart className="text-2xl" />
                        <span>My cart</span>
                    </Link>

                </div>

            </div>

            {/* Bottom Menu */}
            <div className="hidden sm:flex justify-center items-center flex-wrap gap-28 text-black px-6 py-3 border-b border-gray-200 w-full">

                {/* Left Menu */}
                <div className="flex items-center gap-10 font-medium flex-wrap">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <MdMenu className="text-2xl" />
                        <Link to="/product-list">All category</Link>
                    </div>
                    <Link to="/product-list">Hot offers</Link>
                    <Link to="/product-list">Gift Boxes</Link>
                    <Link to="/product-list">Projects</Link>
                    <Link to="/product-list">Menu Item</Link>

                    <div onClick={() => { setshowhelp(!showhelp) }} className="flex gap-2 items-center cursor-pointer relative">
                        <a href="#">Help</a>
                        {showhelp ? <IoIosArrowUp className="text-stone-400 text-lg" /> : <IoIosArrowDown className="text-stone-400 text-lg" />}
                        {showhelp &&
                            <ul className="absolute top-full mt-2 left-2 z-10 w-40 bg-white font-normal border border-gray-300 rounded shadow-md">
                                {helps.map((help, idx) => (
                                    <li
                                        key={idx}
                                        className="px-4 py-2 hover:bg-blue-100 text-sm cursor-pointer"
                                        onClick={() => { }}
                                    >
                                        {help}
                                    </li>
                                ))}
                            </ul>
                        }
                    </div>
                </div>

                {/* Right Language / Shipping */}
                <div className="flex items-center gap-10  relative">

                    {/* Language Dropdown */}
                    <div onClick={() => setShowLanguages(!showLanguages)} className="flex items-center  gap-1 cursor-pointer relative">
                        <p className='font-semibold'>{selectedLanguage}</p>
                        {showLanguages ? <IoIosArrowUp className="text-stone-400" /> : <IoIosArrowDown className="text-stone-400" />}
                        {showLanguages && (
                            <ul className="absolute top-full mt-2 left-4 z-10 w-40 bg-white border border-gray-300 rounded shadow-md">
                                {languages.map((lang, idx) => (
                                    <li
                                        key={idx}
                                        className="px-4 py-2 hover:bg-blue-100 text-sm cursor-pointer"
                                        onClick={() => {
                                            setSelectedLanguage(lang);
                                            setShowLanguages(false);
                                        }}
                                    >
                                        {lang}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Ship To Dropdown Placeholder */}
                    <div onClick={() => setshowshipping(!showshipping)} className="flex items-center  gap-2 cursor-pointer relative">
                        <p className='font-semibold'>Ship to</p>
                        <img src={selectedshipping} alt="flag" className='w-5 h-4 rounded-sm object-cover' />
                        {showshipping ? <IoIosArrowUp className="text-stone-400 " /> : <IoIosArrowDown className="text-stone-400" />}
                        {showshipping &&
                            <ul className='absolute top-full mt-2 left-2 z-10 min-w-[200px] p-3 bg-white font-normal border border-gray-300 rounded shadow-md'>
                                {shipflags.map((country, i) => (
                                    <li onClick={() => setselectedshipping(country.flag)} className='flex items-center gap-2 p-1 hover:bg-gray-100 cursor-pointer' key={i}>
                                        <img src={country.flag} alt="flag" className='w-5 h-4 rounded-sm object-cover' />
                                        <span className='text-sm whitespace-nowrap'>{country.name}</span>
                                    </li>
                                ))}
                            </ul>

                        }
                    </div>
                </div>

            </div>
            
            <div>
            </div>


        </>
    );
}

export default Navbar;
