import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const gadgetItems = [
  [
    {
      name: "Soft Chairs",
      price: "USD 19",
      image: "/images/chair.jpeg",
    },
    {
      name: "Juicer Machine",
      price: "USD 25",
      image: "/images/juicer.jpeg",
    },
  ],
  [
    {
      name: "Table Lamp",
      price: "USD 15",
      image: "/images/lamp.jpeg",
    },
    {
      name: "Coffee Maker",
      price: "USD 29",
      image: "/images/coffee.jpeg",
    },
  ],
  [
    {
      name: "Solar Panel",
      price: "USD 99",
      image: "/images/solar.jpeg",
    },
    {
      name: "Travel Bags",
      price: "USD 35",
      image: "/images/bags.jpeg",
    },
  ],
  [
    {
      name: "Portable Charger",
      price: "USD 12",
      image: "/images/port.jpeg",
    },
    {
      name: "Power Pot",
      price: "USD 22",
      image: "/images/p-pot.jpeg",
    },
  ],
];

function Gadgets() {

  const { productsData } = useContext(AppContext);
  console.log("products at Gadgets \n", productsData);


  const techItems = productsData.filter(p => p.category.name === "Computer and Tech");
  const machineryItems = productsData
    .filter(p => p.category.name === "Machinery tools")
    .slice(0, 2); // take only 2 items

  const gadgetItems = [...techItems, ...machineryItems];

  console.log("gadgetItems\n", gadgetItems);


  return (
    <>
      {/* Desktop View */}
      <div className="w-full sm:max-w-7xl sm:flex sm:items-stretch sm:border border-gray-300 sm:mx-auto rounded mt-4 overflow-hidden">

        {/* Left Banner */}
        <div className="w-1/5 min-w-[180px] relative hidden sm:block rounded-l-md overflow-hidden">
          <img
            src="https://res.cloudinary.com/dophfzeep/image/upload/v1750439430/electronic_xhnlm9.png"
            alt="electric-bg"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-6 z-10 text-black w-3/4">
            <p className="text-xl font-bold mb-4 leading-snug">Home and outdoor items</p>
            <Link to="/product-list" state={{category : "Computer and Tech"}} className="text-black text-lg hover:bg-blue-300 bg-white font-medium px-4 py-2 rounded">
              <button>Source Now</button>
            </Link>
          </div>
        </div>

        {Array.from({ length: Math.ceil(gadgetItems.length / 2) }).map((_, colIdx) => {
          const item1 = gadgetItems[colIdx * 2];
          const item2 = gadgetItems[colIdx * 2 + 1];

          return (
            <div
              key={colIdx}
              className={`w-1/5 min-w-[160px] hidden sm:flex flex-col ${colIdx === Math.ceil(gadgetItems.length / 2) - 1 ? "border-r-0" : "border-r"
                } border-gray-300`}
            >
              {[item1, item2].map((item, itemIdx) =>
                item ? (
                  <Link
                    key={itemIdx}
                    to="/product-list"
                    state={{ category: item.category?.name }}
                    className={`flex justify-between gap-2 p-4 flex-1 cursor-pointer ${itemIdx === 0 ? "border-b border-gray-300" : ""
                      }`}
                  >
                    <div className="flex flex-col justify-between">
                      <p className="text-base font-medium">{item.name}</p>
                      <p className="text-stone-400 text-sm font-normal">
                        From <br /> ${item.price}
                      </p>
                    </div>
                    <div className="self-end w-20 h-20 rounded overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                ) : null
              )}
            </div>
          );
        })}

      </div>

      {/* Mobile View */}
      <div className="sm:hidden mb-4 mt-4 w-full px-2">
        <h1 className="text-2xl text-black font-bold">Electronics and Gadgets</h1>

        <div className="mt-4 overflow-x-auto scrollbar-hide w-full">
          <div className="flex border border-stone-300 w-max rounded-md overflow-hidden">
            {gadgetItems.map((item, index) => (
              <Link
                key={index}
                to="/product-list"
                state={{ category: item.category?.name }}
                className={`min-w-[160px] sm:min-w-[200px] md:min-w-[220px] 
            ${index !== gadgetItems.length - 1 ? 'border-r border-stone-300' : ''} 
            p-3 flex-shrink-0 bg-white`}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-base font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-stone-500 mt-1">$ {item.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}


export default Gadgets;
