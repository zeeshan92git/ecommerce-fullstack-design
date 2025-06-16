import React from 'react';
import { CgProfile } from "react-icons/cg";

const categories = [
  "Automobiles",
  "Clothes and Wear",
  "Home interiors",
  "Computer and Tech",
  "Tools, Equipment",
  "Sports and outdoor",
  "Animal and pets",
  "Machinery Tools"
];

function Hero() {
  return (
    <div className="bg-gray-100 mt-4 p-4 border border-gray-300 rounded-md flex gap-4 justify-between max-w-7xl mx-auto">

      {/* Left Sidebar Categories */}
      <div className="w-1/5">
        <ul className="flex flex-col gap-2">
          {categories.map((cat, indx) => (
            <li
              key={indx}
              className={`px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:font-semibold cursor-pointer ${indx === 0 ? "bg-blue-100 font-semibold" : ""
                }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Center Banner */}
      <div className="relative w-3/5 overflow-hidden rounded-md">
        <img
          src="/images/hero.jpeg"
          alt="Electronic items"
          className="w-full h-full object-cover "
        />
        <div className="absolute top-12 left-12 text-black">
          <p className="text-xl">Latest trending</p>
          <p className="text-3xl font-bold">Electronic items</p>
          <button className="mt-4 bg-white text-black px-4 py-2 rounded-md shadow hover:bg-gray-100">
            Learn more
          </button>
        </div>
      </div>

      {/* Right User Section */}
      <div className="w-1/5 flex flex-col gap-4">

        <div className="bg-white rounded-md shadow p-2 text-center">
          <div className="flex justify-start items-start gap-1 mb-2">
            <CgProfile className="text-4xl text-gray-400" />
            <div className='flex flex-col items-start justify-start font-medium gap-1'>
              <p className="text-gray-700 text-lg">Hi, user</p>
              <p className="text-gray-700 text-lg">let's get started</p>
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mb-2">
            Join now
          </button>
          <button className="w-full border border-blue-500 text-blue-500 py-2 rounded-md hover:bg-blue-500 hover:text-white">
            Log in
          </button>
        </div>


        <div className="bg-orange-500 text-white p-4 rounded-md text-lg text-center">
          Get US $10 off<br />with a new supplier
        </div>


        <div className="bg-sky-400 text-white p-4 rounded-md text-lg text-center">
          Send quotes with<br />supplier preferences
        </div>

      </div>
    </div>
  );
}

export default Hero;
