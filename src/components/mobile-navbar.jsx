import React from 'react';
import { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import MobileSidebar from './mobile-sidebar';

const categories = [
    "All categories",
    "Automobiles",
    "Clothes and Wear",
    "Home interiors",
    "Computer and Tech",
    "Tools, Equipment",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery Tools"
];

function MobileNavbar({  showBackArrow = false, categoryName = "" }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Top Navbar Row */}
            <div className='flex sm:hidden justify-between items-center mx-4 mt-3'>
                <div className='flex items-center gap-2'>
                    {showBackArrow ? (
                        <>
                            <FaArrowLeftLong className='text-xl text-gray-700' />
                            <p className="text-lg font-semibold text-gray-700">{categoryName}</p>
                        </>
                    ) : (
                        <>
                            <MdMenu className='text-xl ' onClick={()=> setIsOpen(true)} />
                            <div className="flex items-center gap-1">
                                <div className="bg-indigo-500 p-1 rounded">
                                    <LiaShoppingBagSolid className="text-xl text-white" />
                                </div>
                                <p className="text-xl italic text-indigo-500 font-bold">𝓢𝓱𝓸𝓹𝔃𝔂</p>
                            </div>
                        </>
                    )}
                </div>
                <div className='flex items-center gap-3 text-black'>
                    <Link to="/my-cart" className="hover:text-blue-500 transition cursor-pointer">
                        <AiOutlineShoppingCart className="text-xl" />
                    </Link>
                    <Link to="/profile" className="hover:text-blue-500 transition cursor-pointer">
                        <CgProfile className="text-xl" />
                    </Link>
                </div>
            </div>

            {isOpen && 
                <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen}/>   
            }
             
            {/* Mobile Search Bar */}
            <div className='sm:hidden mt-4 mx-4 flex items-center gap-2 border border-stone-300 rounded-md px-3 py-2'>
                <IoIosSearch className='text-lg text-stone-400' />
                <input
                    type="text"
                    placeholder='Search'
                    className='flex-1 text-sm text-gray-700 placeholder-stone-400 outline-none'
                />
            </div>

            {/* Categories Row */}
            <div className='sm:hidden mt-4 mx-4 flex items-center overflow-x-auto gap-2'>
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className='bg-blue-100 text-blue-500 px-3 py-2 rounded-md whitespace-nowrap text-lg font-normal'
                    >
                        {cat}
                    </div>
                ))}
            </div>

        </>
    )
}

export default MobileNavbar;
