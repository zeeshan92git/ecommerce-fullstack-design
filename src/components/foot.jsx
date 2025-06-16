import React from 'react';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

function Foot() {
    return (
        <div className='mt-6 '>

            <div className="bg-white flex flex-col md:flex-row justify-between gap-8 px-6 py-10 border-b border-gray-200 rounded">
                {/*  Logo & Description */}
                <div className="flex flex-col gap-4 max-w-xs">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-500 p-2 rounded-md">
                            <LiaShoppingBagSolid className="text-2xl text-white" />
                        </div>
                        <p className="text-2xl md:text-3xl text-blue-400 font-bold">XXX</p>
                    </div>
                    <p className="text-sm text-gray-600">
                        Best information about the company goes here. But for now, Lorem ipsum is used as placeholder content.
                    </p>
                    <div className="flex items-center gap-3 text-3xl text-stone-400">
                        <a href="#"><FaFacebook className="hover:text-blue-500" /></a>
                        <a href="#"><AiFillTwitterCircle className="hover:text-black" /></a>
                        <a href="#"><FaLinkedin className="hover:text-blue-500" /></a>
                        <a href="#"><FaInstagramSquare className="hover:text-red-500" /></a>
                        <a href="#"><FaYoutube className="hover:text-red-500" /></a>
                    </div>
                </div>

                {/*  Link Columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6  text-gray-700">
                    <div>
                        <h2 className="font-semibold mb-2 text-lg text-gray-900">About</h2>
                        <ul className="flex flex-col text-sm gap-1">
                            <a href="#" className="text-stone-400">About Us</a>
                            <a href="#" className="text-stone-400">Find Store</a>
                            <a href="#" className="text-stone-400">Categories</a>
                            <a href="#" className="text-stone-400">Blogs</a>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-2 text-lg text-gray-900">Partnership</h2>
                        <ul className="flex flex-col text-sm gap-1">
                            <a href="#" className="text-stone-400">Sell With Us</a>
                            <a href="#" className="text-stone-400">Affiliate Program</a>
                            <a href="#" className="text-stone-400">Careers</a>
                            <a href="#" className="text-stone-400">Press</a>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-2 text-lg text-gray-900">Information</h2>
                        <ul className="flex flex-col text-sm gap-1">
                            <a href="#" className="text-stone-400">Privacy Policy</a>
                            <a href="#" className="text-stone-400">Terms & Conditions</a>
                            <a href="#" className="text-stone-400">Returns</a>
                            <a href="#" className="text-stone-400">FAQ</a>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-2 text-lg text-gray-900">For Users</h2>
                        <ul className="flex flex-col text-sm gap-1">
                            <a href="#" className="text-stone-400">Login</a>
                            <a href="#" className="text-stone-400">Register</a>
                            <a href="#" className="text-stone-400">Orders</a>
                            <a href="#" className="text-stone-400">Help</a>
                        </ul>
                    </div>
                </div>

                {/*  App Download */}
                <div className="flex flex-col items-start gap-3">
                    <h2 className="font-semibold mb-1 text-gray-900">Get App</h2>
                    <div className="flex flex-col gap-2">
                        <img src="/images/app-store.png" alt="App Store" className="w-32 h-10 object-cover rounded-md" />
                        <img src="/images/g-play.png" alt="Google Play" className="w-32 h-10 object-cover rounded-md" />
                    </div>
                </div>

            </div>

            <div className='p-6 flex justify-between items-center gap-80 text-gray-400 bg-gray-200'>
                <p className="">&copy; 2023 Ecommerce.</p>
                <div className="flex items-center text-sm justify-center gap-2">
                    <img src="https://flagcdn.com/us.svg" alt="us_flag" className="w-6 h-4 object-cover rounded-sm" />
                    <p>English</p>
                    <IoIosArrowDown />
                </div>
            </div>


        </div>
    )
}

export default Foot;
