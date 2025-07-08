import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

function Homeoutdoor() {

    const { productsData } = useContext(AppContext);
    //console.log("products at hommeoutdoor\n", productsData);

    const homeOutdoorItems = productsData.filter(p => p.category.name === "Home interiors");

    return (
        <>
            <div className="w-full sm:max-w-7xl sm:flex sm:items-stretch sm:border border-gray-300 bg-white sm:mx-auto rounded mt-4 overflow-hidden">
                {/* Left Banner */}
                <div className="w-1/5 min-w-[180px] relative hidden sm:block rounded-l-md overflow-hidden">
                    <img
                        src="https://res.cloudinary.com/dophfzeep/image/upload/v1750439654/home-bg_upoygf.png"
                        alt="electric-bg"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-8 left-6 z-10 text-black w-3/4">
                        <p className="text-xl font-bold mb-4 leading-snug">Home and outdoor items</p>
                        <Link to="/product-list" state={{category : "Home interiors"}} className=" text-black text-lg hover:bg-blue-300 bg-white font-medium px-4 py-2 rounded">
                           <button>Source Now</button>
                        </Link>
                    </div>
                </div>

                {/* Gadget Grids */}
                {Array.from({ length: Math.ceil(homeOutdoorItems.length / 2) }).map((_, colIdx) => {
                    const item1 = homeOutdoorItems[colIdx * 2];
                    const item2 = homeOutdoorItems[colIdx * 2 + 1];

                    return (
                        <div
                            key={colIdx}
                            className={`w-1/5 min-w-[160px] hidden sm:flex flex-col ${colIdx !== Math.floor(homeOutdoorItems.length / 2) - 1
                                ? "border-r border-gray-300"
                                : ""
                                }`}
                        >
                            {[item1, item2].map((item, itemIdx) =>
                                item ? (
                                    <Link
                                        key={itemIdx}
                                        to="/product-list"
                                        state={{ category: item.category?.name }}
                                        className={`flex justify-between gap-2 p-3 flex-1 hover:bg-gray-50 cursor-pointer ${itemIdx === 0 ? "border-b border-gray-200" : ""
                                            }`}
                                    >
                                        <div className="flex flex-col justify-between">
                                            <p className="text-base font-medium text-gray-700">{item.name}</p>
                                            <p className="text-sm text-stone-400 font-medium mt-2">
                                                From <br /> <span className="text-black font-semibold">$ {item.price}</span>
                                            </p>
                                        </div>
                                        <div className="w-20 h-20 self-end bg-gray-100 rounded overflow-hidden">
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

                {/* Mobile View */}
                <div className="sm:hidden flex flex-col mb-4 mt-4">
                    <h1 className="text-2xl text-black font-bold px-2">Home and Outdoor</h1>

                    {/* Scrollable Card Container */}
                    <div className="mt-4 overflow-x-auto scrollbar-hide  px-2">
                        <div className="flex border border-stone-300 bg-gray-100  w-max rounded-md overflow-hidden">
                            {homeOutdoorItems.map((item, index) => (
                                <Link
                                    key={index}
                                    to="/product-list"
                                    state={{ category: item.category?.name }}
                                    className={`min-w-[160px] sm:min-w-[200px] md:min-w-[220px] 
            ${index !== homeOutdoorItems.length - 1 ? 'border-r border-stone-300' : ''} 
            p-3 flex-shrink-0 bg-white`}
                                >
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-32 h-32 bg-gray-100 rounded overflow-hidden">
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



            </div>
        </>
    )
}

export default Homeoutdoor;