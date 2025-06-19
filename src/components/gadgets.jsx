import React from "react";

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
  
  // Flatten the items for mobile scroll view
  const flatItems = gadgetItems.flat();

  return (
    <>
      {/* Desktop View */}
      <div className="bg-white w-full sm:max-w-7xl sm:flex sm:items-center sm:border border-gray-300 sm:mx-auto rounded mt-4 overflow-hidden">
        {/* Left Banner */}
        <div className="w-1/5 sm:block hidden min-w-[180px] relative">
          <img
            src="/images/electronic.png"
            alt="electric-bg"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-6 z-10 text-black w-3/4">
            <p className="text-xl font-bold mb-4 leading-snug">
              Consumer electronics and gadgets
            </p>
            <button className="text-black text-lg hover:bg-blue-300 bg-white font-medium px-4 py-2 rounded">
              Source Now
            </button>
          </div>
        </div>

        {/* Gadget Grid Columns (Desktop only) */}
        {gadgetItems.map((column, colIdx) => (
          <div
            key={colIdx}
            className="w-1/5 min-w-[160px] hidden sm:flex flex-col border-r border-gray-300"
          >
            {column.map((item, itemIdx) => (
              <div
                key={itemIdx}
                className={`flex justify-between p-4 flex-1 ${itemIdx === 0 ? "border-b border-gray-300" : ""
                  }`}
              >
                <div className="flex flex-col justify-between">
                  <p className="text-lg font-normal">{item.name}</p>
                  <p className="text-stone-400 font-medium">
                    From <br /> {item.price}
                  </p>
                </div>
                <div className="self-end">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain ml-4"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="sm:hidden mb-4 mt-4 w-full px-2">
        <h1 className="text-2xl text-black font-bold">Electronics and Gadgets</h1>

        <div className="mt-4 overflow-x-auto scrollbar-hide w-full">
          <div className="flex border border-stone-300 w-max">
            {flatItems.map((item, index) => (
              <div
                key={index}
                className={`min-w-[180px] ${index === flatItems.length - 1 ? "border-r-0" : "border-r border-stone-300"} p-4 flex-shrink-0`}
              >
                <div className="flex flex-col items-center justify-between gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-28 object-cover"
                  />
                  <div className="flex flex-col items-start justify-between">
                    <p className="text-lg font-medium">{item.name}</p>
                    <p className="text-stone-400 text-lg font-normal mt-2">
                      From {item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


export default Gadgets;
