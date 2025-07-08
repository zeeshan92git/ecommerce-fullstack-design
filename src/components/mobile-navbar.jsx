import React from 'react';
import { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import MobileSidebar from './mobile-sidebar';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

const categories = [
    "All categories",
    "Automobiles",
    "Clothes and Wear",
    "Home interiors",
    "Computer and Tech",
    "Tools, Equipment",
    "Sports and Outdoor",
    "Animals and Pets",
    "Machinery tools"
];

function MobileNavbar({ showBackArrow = false, categoryName = "", route = "", showSelection = true }) {

    const [isOpen, setIsOpen] = useState(false);
    const navigation = useNavigate();
    const { token, userData } = useContext(AppContext);
    //console.log({token , userData});
    return (
        <div className='mx-2'>
            {/* Top Navbar Row */}
            <div className={`flex sm:hidden items-center justify-between  mt-2 ${showSelection ? '' : 'mt-0 p-0 '}  w-full`}>

                <div className='flex items-center gap-2'>
                    {showBackArrow ? (
                        <>
                            <Link to={route}><FaArrowLeftLong className='text-2xl'/></Link>
                            <p className="text-lg font-semibold text-gray-700">{categoryName}</p>
                        </>
                    ) : (
                        <>
                            <MdMenu className='text-2xl ' onClick={() => setIsOpen(true)} />
                            <div className="flex items-center gap-1">
                                <div className="bg-blue-500 p-1 rounded">
                                    <LiaShoppingBagSolid className="text-[20px]  text-sky-400" />
                                </div>
                                <p className="text-[24px]  text-sky-500 font-bold">Brand</p>
                            </div>
                        </>
                    )}
                </div>

                <div className={`flex items-center ${showSelection ? '' : 'gap-4'} gap-3 text-black mr-2`}>
                    <Link to="/my-cart" className="hover:text-blue-500 transition cursor-pointer">
                        <AiOutlineShoppingCart className="text-[20px]" />
                    </Link>
                    <Link to="/my-profile" className="hover:text-blue-500 transition cursor-pointer">
                        {userData && userData.image ? (<img src={userData.image} alt={userData.name} className='w-7 h-7 rounded-full' />)
                            : (<CgProfile className='text-[20px]' />)}
                    </Link>
                </div>
            </div>

            {isOpen &&
                <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            }

            {/* Mobile Search Bar */}
            {showSelection &&
                <div className='sm:hidden mt-4  flex items-center gap-2 border border-stone-300 rounded-md p-1'>
                    <IoIosSearch className='text-lg text-stone-400' />
                    <input
                        type="text"
                        placeholder='Search'
                        className='flex-1 text-sm text-gray-700 placeholder-stone-400 outline-none'
                    />
                </div>
            }

            {/* Categories Row */}
            {showSelection &&
                <div className='sm:hidden mt-4  flex items-center overflow-x-auto gap-2 p-1'>
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            className="bg-blue-100 text-blue-500 px-3 py-2 rounded-md whitespace-nowrap text-[15px] font-normal"
                            onClick={() => {
                                navigation("/product-list", {
                                    state: { category: cat },
                                    replace: true,
                                });
                            }}
                        >
                            {cat}
                        </button>
                    ))}

                </div>
            }

        </div>
    )
}

export default MobileNavbar;
