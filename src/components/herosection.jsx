import React, { useContext } from 'react';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const categories = [
  "Automobiles",
  "Clothes and Wear",
  "Home interiors",
  "Computer and Tech",
  "Tools, Equipment",
  "Sports and Outdoor",
  "Animals and Pets",
  "Machinery tools"
];



function Hero() {

  const { token, setToken, userData } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
    navigate("/");
    toast.success("Logged out successfully");
  };

  console.log("token at hero\n", token);
  return (
    <div className="sm:bg-gray-100 sm:mt-4 mt-5 sm:p-4  sm:border border-gray-300 sm:rounded-md max-w-7xl sm:mx-auto flex flex-col sm:flex-row gap-4 justify-between">

      {/* Left Sidebar Categories */}
      <div className="w-full sm:w-1/5 hidden sm:flex flex-col gap-2">
        <ul>
          {categories.map((cat, indx) => (
            <li
              key={indx} >
              <Link
                to="/product-list"
                state={{ category: cat }}
                className={`block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:font-semibold cursor-pointer ${indx === 0 ? "bg-blue-100 font-semibold" : ""
                  }`}> {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Center Banner */}
      <div className="relative w-full sm:w-3/5 overflow-hidden sm:rounded-md">
        <img
          src="https://res.cloudinary.com/dophfzeep/image/upload/v1750439638/hero_psijcp.jpg"
          alt="Electronic items"
          className="w-full h-full object-cover sm:rounded-md"
        />
        <div className="absolute top-8 left-6 text-black">
          <p className="sm:text-xl text-lg">Latest trending</p>
          <p className={`sm:text-3xl text-xl font-bold`}>Electronic items</p>
          <p className='mt-4'>
            <Link to="/product-list" state={{ category: "Computer and Tech" }} className="bg-white text-black sm:px-4 sm:py-2 p-2 rounded-md shadow hover:bg-blue-200 hover:font-medium">
              Learn more
            </Link>
          </p>

        </div>
      </div>

      {/* Right User Section */}
      <div className="w-full sm:w-1/5 hidden sm:flex  flex-col gap-8">

        <div className="bg-blue-100 rounded-md shadow p-2 text-center">
          <div className="flex justify-start items-start gap-1 mb-2">
            <div className='w-8 h-8 rounded-full'>
              {token ? <img className='w-full h-full rounded-full' src={userData.image} alt="img" /> : <CgProfile className="text-4xl text-gray-400" />}
            </div>

            <div className="flex flex-col items-start justify-start font-medium gap-1">
              {token ? (
                <>
                  <p className="text-gray-700 text-lg">Welcome! {userData.name} at Brand</p>
                  <p className="text-gray-700 text-lg">Shop your favourites</p>
                </>
              ) : (
                <>
                  <p className="text-gray-700 text-lg">Hai, user</p>
                  <p className="text-gray-700 text-lg">Let's get started</p>
                </>
              )}
            </div>

          </div>
          {token ?
            (<>
              <button className='block w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mb-2' onClick={handleLogout}>Logout</button>
            </>)
            : (<>
              <Link to="/login" className=" block w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mb-2">
                Join now
              </Link>
              <Link to="/login" className="block w-full border border-blue-500 text-blue-500 py-2 rounded-md hover:bg-blue-500 hover:text-white">
                Log in
              </Link>
            </>)}

        </div>

        <div className="bg-orange-500 text-white py-5 px-2 rounded-md text-lg text-center">
          Get US $10 off<br />with a new supplier
        </div>

        <div className="bg-sky-400 text-white  py-5 px-2 rounded-md text-lg text-center">
          Send quotes with<br />supplier preferences
        </div>

      </div>

    </div>

  );
}

export default Hero;
