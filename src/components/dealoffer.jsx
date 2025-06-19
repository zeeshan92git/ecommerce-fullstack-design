import React from 'react';
import { Link } from 'react-router-dom';
const dealOfferProducts = [
  {
    image: "/images/watch.jpeg",
    title: "Smart Watches",
    discount: "-25%",
  },
  {
    image: "/images/laptop.jpeg",
    title: "Laptops",
    discount: "-18%",
  },
  {
    image: "/images/camera.jpeg",
    title: "Digital Cameras",
    discount: "-30%",
  },
  {
    image: "/images/headphone.jpeg",
    title: "Headphones",
    discount: "-15%",
  },
  {
    image: "/images/phone.jpeg",
    title: "Smartphones",
    discount: "-20%",
  },
];


function DealsOffer() {
  return (
    <>
      {/* Desktop view */}
      <div className="sm:bg-gray-100 flex items-stretch justify-between gap-2 rounded-md sm:border border-gray-300 p-2 sm:mt-4 mt-2 max-w-7xl mx-auto overflow-x-auto scrollbar-hide">

        {/* Title + Countdown */}
        <div className="hidden sm:block w-2/12 min-w-[160px] p-2">
          <h1 className="text-2xl font-bold">Deals and offers</h1>
          <p className="text-lg text-gray-400">Hygiene equipments</p>
          <div className="flex gap-2 mt-2">
            {['Days', 'Hours', 'Min', 'Sec'].map((label, idx) => (
              <div key={idx} className="bg-stone-500 rounded-md text-white w-16 h-14 flex flex-col items-center justify-center text-xs">
                <span className="font-bold text-lg leading-none">04</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Blocks */}
        {dealOfferProducts.map((prod, i) => (
          <Link to="/product-detail" key={i} className="hidden sm:flex flex-col items-center gap-2 w-2/12 min-w-[160px] h-full border-l border-gray-300 pl-4">
            <img src={prod.image} alt={prod.title} className="w-32 h-32 object-contain rounded-md" />
            <p className="text-center font-medium">{prod.title}</p>
            <span className="text-red-500 text-center font-medium bg-red-200 px-3 rounded-full w-fit">{prod.discount}</span>
          </Link>
        ))}

      </div>

      {/* Mobile Menu */}
      <div className='sm:hidden flex items-center justify-between gap-2 p-6'>

        <div className='flex flex-col gap-2'>
          <p className="text-2xl font-bold">Deals and offers</p>
          <p className="text-lg text-gray-400">Hygiene equipments</p>
        </div>

        <div className='flex gap-2'>
          {['Days', 'Hours', 'Min', 'Sec'].map((label, idx) => (
            <div key={idx} className="bg-stone-300 rounded-md text-gray-500 w-16 h-14 flex flex-col items-center justify-center text-xs">
              <span className="font-bold text-lg leading-none">04</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Product Blocks */}
      <div className='bg-gray-100 sm:hidden flex items-stretch justify-between gap-2 rounded-md border border-gray-300 p-2 mt-4 max-w-7xl mx-auto overflow-x-auto scrollbar-hide'>
        {dealOfferProducts.map((prod, i) => (
          <Link to="/product-detail" key={i} className="sm:hidden flex flex-col items-center gap-2 w-2/12 min-w-[160px] h-full border-l border-gray-300 pl-4">
            <img src={prod.image} alt={prod.title} className="w-32 h-32 object-contain rounded-md" />
            <p className="text-center font-medium">{prod.title}</p>
            <span className="text-red-500 text-center font-medium bg-red-200 px-3 rounded-full w-fit">{prod.discount}</span>
          </Link>
        ))}
      </div>
    </>
  );
}

export default DealsOffer;
