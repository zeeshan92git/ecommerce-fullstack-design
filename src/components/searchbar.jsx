import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const categories = [
    "Automobiles",
    "Clothes and Wear",
    "Computer and Tech",
    "Tools, Equipment",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery Tools"
];

function SearchBar() {
    const [showAll, setshowAll] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const visibleCategories = showAll ? categories : categories.slice(0, 3);


    return (
        <div className="flex flex-1 max-w-xl border-2 border-blue-500 rounded-md relative">
            <input
                type="text"
                placeholder="Search"
                className="p-2 flex-grow text-[16px] text-gray-700 rounded-md outline-none"
            />

            {/* All category selector with dropdown */}
            <div
                onClick={() => {setShowCategories(!showCategories); setshowAll(false);}}
                className="flex items-center gap-1 px-3 border-l border-blue-500 text-sm text-gray-500 cursor-pointer relative"
            >
                <p className='text-[16px]'>All category</p>
                {showCategories ? <IoIosArrowUp className='text-lg' /> : <IoIosArrowDown className='text-lg' /> }

                {showCategories && (
                    <ul className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 shadow-md z-50 rounded-md">
                        {visibleCategories.map((cat, index) => (
                            <li
                                key={index}
                                className="p-2 hover:bg-blue-100 cursor-pointer text-sm"
                            >
                                {cat}
                            </li>
                        ))}
                        {!showAll && (
                            <li
                                onClick={(e) => {
                                    e.stopPropagation(); // prevent dropdown toggle
                                    setshowAll(true);
                                }}
                                className="p-2 hover:bg-blue-100 cursor-pointer text-sm font-medium text-gray-500 hover:text-blue-500"
                            >
                                More Categories
                            </li>
                        )}
                    </ul>
                )}
            </div>

            <button className="bg-blue-500 text-white px-4">Search</button>
        </div>

    );
}

export default SearchBar;
