import React from 'react';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const links = [
    {
        title: 'About',
        links: ['About Us', 'Find Store', 'Categories', 'Blogs']
    },
    {
        title: 'Partnership',
        links: ['Sell With Us', 'Affiliate Program', 'Careers', 'Press']
    },
    {
        title: 'Information',
        links: ['Privacy Policy', 'Terms & Conditions', 'Returns', 'FAQ']
    },
    {
        title: 'For Users',
        links: ['Login', 'Register', 'Orders', 'Help']
    }
];

function Foot() {
    return (
        <div className="mt-6">

            {/* Top Footer Section */}
            <div className="bg-gray-100 flex flex-col items-start md:flex-row flex-wrap justify-between gap-8 px-6 py-10 border-b border-gray-200">

                {/* Logo & Description */}
                <div className="flex flex-col items-start gap-2 max-w-md">
                    <div className="flex items-center gap-2 p-2">
                        <div className="bg-blue-500 p-2 rounded-md">
                            <LiaShoppingBagSolid className="text-[20px] text-sky-200" />
                        </div>
                        <p className="text-[24px]  md:text-3xl text-sky-400 font-extrabold">Brand</p>
                    </div>
                    <p className="text-sm text-gray-600">
                        Best information about the company goes here. But for now, Lorem ipsum is used as placeholder content.
                    </p>
                    <div className="flex items-center gap-3 text-2xl text-stone-400">
                        <a href="https://www.facebook.com" target='_blank'><FaFacebook className="hover:text-blue-500" /></a>
                        <a href="https://twitter.com" target='_blank'><AiFillTwitterCircle className="hover:text-black" /></a>
                        <a href="https://www.linkedin.com" target='_blank'><FaLinkedin className="hover:text-blue-500" /></a>
                        <a href="https://www.instagram.com" target='_blank'><FaInstagramSquare className="hover:text-red-500" /></a>
                        <a href="https://www.youtube.com" target='_blank'><FaYoutube className="hover:text-red-500" /></a>
                    </div>
                </div>

                {/* Link Columns */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-700 flex-grow">
                    {links.map((section, idx) => (
                        <div key={idx}>
                            <h2 className="font-semibold  mb-2 text-lg text-gray-900">{section.title}</h2>
                            <ul className="flex flex-col text-sm gap-1">
                                {section.links.map((link, linkIdx) => (
                                    <a key={linkIdx} href="/about" className="text-stone-400 hover:text-black">{link}</a>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* App Download */}
                <div className="flex flex-col items-start ">
                    <h2 className="font-semibold text-lg text-gray-900">Get App</h2>
                    <div className="w-32 h-32  rounded-md">
                        <img src="https://res.cloudinary.com/dophfzeep/image/upload/v1750921032/g-aaple-removebg-preview_zcaac2.png" alt="App Store" 
                        className="w-full h-full object-fill rounded-md" />
                    </div>
                </div>
            </div>

            {/* Bottom Footer Bar */}
            <div className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-gray-400 bg-gray-200 text-sm">
                <p>&copy; 2023 Brand Ecommerce.</p>
                <div className="flex items-center gap-2">
                    <img src="https://flagcdn.com/us.svg" alt="us_flag" className="w-6 h-4 object-cover rounded-sm" />
                    <p>English</p>
                    <IoIosArrowDown />
                </div>
            </div>
        </div>

    )
}

export default Foot;
