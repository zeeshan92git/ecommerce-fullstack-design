import React from 'react';
import { useState } from 'react';
import MobileNavbar from '../components/mobile-navbar.jsx';
import { MdOutlineSort } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { IoGrid } from "react-icons/io5";
import { ImMenu } from "react-icons/im";
import { MdStar, MdOutlineStarOutline } from "react-icons/md";
import { RxCross2 } from 'react-icons/rx';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const products = [
    {
        image: "/images/phone.jpeg",
        name: "Apple iPhone 13",
        description: "Latest iPhone with A15 Bionic chip and improved battery life.",
        price: 5000,
        oldPrice: 899,
        orders: 154,
        rating: 4.7,
        starsCount: 5,
        category: "Automobiles",
        brand: "Oppo",
        features: ['8GB RAM', 'Large Memory'],
        condition: 'new',
        createdAt: "2024-06-15T08:00:00Z" // ISO date format
    },
    {
        image: "/images/t-7.jpeg",
        name: "Samsung Galaxy S21",
        description: "High-performance Android phone with an amazing display.",
        price: 10000,
        oldPrice: 799,
        orders: 154,
        rating: 4.5,
        starsCount: 5,
        category: "Automobiles",
        brand: "Oppo",
        features: ['Super Power', 'Large Memory'],
        condition: 'new',
        createdAt: "2024-06-15T08:00:00Z" // ISO date format
    },
    {
        image: "/images/t-7.jpeg",
        name: "Xiaomi Poco X5",
        description: "Budget phone with powerful features and smooth UI.",
        price: 5000,
        oldPrice: 349,
        orders: 154,
        rating: 4.2,
        starsCount: 4,
        category: "Automobiles",
        brand: "Oppo",
        features: ['Super Power', 'Large Memory'],
        condition: 'new',
        createdAt: "2024-06-15T08:00:00Z" // ISO date format
    },
    {
        image: "/images/t-8.jpeg",
        name: "OnePlus Nord CE",
        description: "Smooth Oxygen OS experience with solid hardware.",
        price: 5000,
        oldPrice: 399,
        orders: 154,
        rating: 4.3,
        starsCount: 4,
        category: "Automobiles",
        brand: "Oppo",
        features: ['Super Power', 'Large Memory'],
        condition: 'new',
        createdAt: "2024-06-15T08:00:00Z" // ISO date format
    },
    {
        image: "/images/watch.jpeg",
        name: "Huawei P40 Lite",
        description: "Great camera system with long battery life.",
        price: 5000,
        orders: 154,
        oldPrice: 299,
        rating: 4.0,
        starsCount: 4,
        category: "Automobiles",
        brand: "Oppo",
        features: ['Super Power', 'Large Memory'],
        condition: 'new',
        createdAt: "2024-06-15T08:00:00Z" // ISO date format
    },
    {
        image: "/images/t-8.jpeg",
        name: "Huawei P40 Lite",
        description: "Great camera system with long battery life.",
        price: 269,
        oldPrice: 299,
        orders: 154,
        rating: 4.0,
        starsCount: 4,
        category: "Automobiles",
        brand: "Oppo",
        features: ['Super Power', 'Large Memory'],
        condition: 'new',
        createdAt: "2024-06-15T08:00:00Z" // ISO date format
    },
    {
        image: "/images/watch.jpeg",
        name: "Huawei P40 Lite",
        description: "Great camera system with long battery life.",
        price: 269,
        oldPrice: 299,
        orders: 154,
        rating: 4.0,
        starsCount: 4,
        category: "Automobiles",
        brand: "Oppo",
        features: ['Super Power', 'Large Memory'],
        condition: 'new',
        createdAt: "2024-06-15T08:00:00Z" // ISO date format
    },
    {
        image: "/images/phone.jpeg",
        name: "Huawei P40 Lite",
        description: "Great camera system with long battery life.",
        price: 269,
        oldPrice: 299,
        rating: 4.0,
        orders: 154,
        starsCount: 4,
        category: "Automobiles",
        brand: "Oppo",
        features: ['Super Power', 'Large Memory'],
        condition: 'new',
        createdAt: "2024-06-15T08:00:00Z" // ISO date format
    },
    {
        image: "/images/phone.jpeg",
        name: "Huawei P40 Lite",
        description: "Great camera system with long battery life.",
        price: 269,
        oldPrice: 299,
        orders: 154,
        rating: 4.0,
        starsCount: 4,
        category: "Automobiles",
        brand: "Oppo",
        features: ['Super Power', 'Large Memory'],
        condition: 'new',
        createdAt: "2024-06-15T08:00:00Z" // ISO date format
    },
    {
        image: "/images/phone.jpeg",
        name: "Apple iPhone 13",
        description: "Latest iPhone with A15 Bionic chip and improved battery life.",
        price: 5000,
        oldPrice: 899,
        orders: 154,
        rating: 4.7,
        starsCount: 5,
        category: "Automobiles",
        brand: "Oppo",
        features: ['8GB RAM', 'Large Memory'],
        condition: 'new',
        createdAt: "2024-06-15T08:00:00Z" // ISO date format
    },
    {
        image: "/images/phone.jpeg",
        name: "Apple iPhone 13",
        description: "Latest iPhone with A15 Bionic chip and improved battery life.",
        price: 5000,
        oldPrice: 899,
        orders: 154,
        rating: 4.7,
        starsCount: 5,
        category: "Automobiles",
        brand: "Oppo",
        features: ['8GB RAM', 'Large Memory'],
        condition: 'new',
        createdAt: "2024-06-15T08:00:00Z" // ISO date format
    },
    {
        image: "/images/t-7.jpeg",
        name: "Samsung Galaxy S21",
        description: "High-performance Android phone with an amazing display.",
        price: 10000,
        oldPrice: 799,
        orders: 154,
        rating: 4.5,
        starsCount: 5,
        category: "Automobiles",
        brand: "Oppo",
        features: ['Super Power', 'Large Memory'],
        condition: 'new',
        createdAt: "2024-06-15T08:00:00Z" // ISO date format
    },
    {
        image: "/images/t-7.jpeg",
        name: "Xiaomi Poco X5",
        description: "Budget phone with powerful features and smooth UI.",
        price: 5000,
        oldPrice: 349,
        orders: 154,
        rating: 4.2,
        starsCount: 4,
        category: "Automobiles",
        brand: "Oppo",
        features: ['Super Power', 'Large Memory'],
        condition: 'new',
        createdAt: "2024-06-15T08:00:00Z" // ISO date format
    },
    {
        image: "/images/t-8.jpeg",
        name: "OnePlus Nord CE",
        description: "Smooth Oxygen OS experience with solid hardware.",
        price: 5000,
        oldPrice: 399,
        orders: 154,
        rating: 4.3,
        starsCount: 4,
        category: "Automobiles",
        brand: "Oppo",
        features: ['Super Power', 'Large Memory'],
        condition: 'new',
        createdAt: "2024-06-15T08:00:00Z" // ISO date format
    },
    {
        image: "/images/watch.jpeg",
        name: "Huawei P40 Lite",
        description: "Great camera system with long battery life.",
        price: 5000,
        orders: 154,
        oldPrice: 299,
        rating: 4.0,
        starsCount: 4,
        category: "Automobiles",
        brand: "Oppo",
        features: ['Super Power', 'Large Memory'],
        condition: 'new',
        createdAt: "2024-06-15T08:00:00Z" // ISO date format
    },
    {
        image: "/images/t-8.jpeg",
        name: "Huawei P40 Lite",
        description: "Great camera system with long battery life.",
        price: 269,
        oldPrice: 299,
        orders: 154,
        rating: 4.0,
        starsCount: 4,
        category: "Automobiles",
        brand: "Oppo",
        features: ['Super Power', 'Large Memory'],
        condition: 'new',
        createdAt: "2024-06-15T08:00:00Z" // ISO date format
    },
    {
        image: "/images/watch.jpeg",
        name: "Huawei P40 Lite",
        description: "Great camera system with long battery life.",
        price: 269,
        oldPrice: 299,
        orders: 154,
        rating: 4.0,
        starsCount: 4,
        category: "Automobiles",
        brand: "Oppo",
        features: ['Super Power', 'Large Memory'],
        condition: 'new',
        createdAt: "2024-06-15T08:00:00Z" // ISO date format
    },
    {
        image: "/images/phone.jpeg",
        name: "Huawei P40 Lite",
        description: "Great camera system with long battery life.",
        price: 269,
        oldPrice: 299,
        rating: 4.0,
        orders: 154,
        starsCount: 4,
        category: "Automobiles",
        brand: "Oppo",
        features: ['Super Power', 'Large Memory'],
        condition: 'new',
        createdAt: "2024-06-15T08:00:00Z" // ISO date format
    },
    {
        image: "/images/phone.jpeg",
        name: "Huawei P40 Lite",
        description: "Great camera system with long battery life.",
        price: 269,
        oldPrice: 299,
        orders: 154,
        rating: 4.0,
        starsCount: 4,
        category: "Automobiles",
        brand: "Oppo",
        features: ['Super Power', 'Large Memory'],
        condition: 'new',
        createdAt: "2024-06-15T08:00:00Z" // ISO date format
    },
    {
        image: "/images/phone.jpeg",
        name: "Apple iPhone 13",
        description: "Latest iPhone with A15 Bionic chip and improved battery life.",
        price: 5000,
        oldPrice: 899,
        orders: 154,
        rating: 4.7,
        starsCount: 5,
        category: "Automobiles",
        brand: "Oppo",
        features: ['8GB RAM', 'Large Memory'],
        condition: 'new',
        createdAt: "2024-06-15T08:00:00Z" // ISO date format
    }
];

const categories = ["Automobiles", "Clothes and Wear", "Computer and Tech", "Tools, Equipment", "Sports and outdoor", "Animal and pets", "Machinery Tools"];
const brands = ["Samsung", "Huawei", "Oppo", "Pocco", "Lenovo", "Redmi", "Techno Spark", "Sony", "Nokia", "Q Mobile"];
const features = ["Metallic", "8GB RAM", "Durable", "Productive"];
const conditions = ["Any", "Refurbished", "Brand New", "Old Items"];


function GridmobView() {

    const [showMobgrid, setshowMobgrid] = useState(true);
    const [showMoblist, setshowMoblist] = useState(false);

    const [sortBy, setSortBy] = useState("Newest");
    const [showSortMenu, setShowSortMenu] = useState(false);

    const sortedProducts = [...products].sort((a, b) => {
        switch (sortBy) {
            case "Newest":
                return new Date(b.createdAt) - new Date(a.createdAt);
            case "Oldest":
                return new Date(a.createdAt) - new Date(b.createdAt);
            case "Price: Low to High":
                return a.price - b.price;
            case "Price: High to Low":
                return b.price - a.price;
            case "Rating":
                return b.rating - a.rating;
            default:
                return b.id - a.id; // Newest
        }
    });
    const [showFilter, setshowFilter] = useState(false);
    const [appliedFilters, setappliedFilters] = useState(0);

    const incrementFilters = () => {
        setappliedFilters(prev => prev + 1);
    };

    const decrementFilters = () => {
        setappliedFilters(prev => (prev > 0 ? prev - 1 : 0));
    };


    const [showCategory, setshowCategory] = useState(false);
    const [showbrand, setshowbrand] = useState(false);
    const [showFeatures, setshowFeatures] = useState(false);
    const [showConditions, setshowConditions] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [selectedCondition, setSelectedCondition] = useState(null);

    // Show more toggles
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [showAllBrands, setShowAllBrands] = useState(false);
    const [showAllFeatures, setShowAllFeatures] = useState(false);
    const [showAllConditions, setShowAllConditions] = useState(false);

    // Clear all
    const clearAllFilters = () => {
        setSelectedCategory(null);
        setSelectedBrand(null);
        setSelectedFeature(null);
        setSelectedCondition(null);
    };


    return (
        <div>
            {/* mobile-menu below all */}
            <MobileNavbar showBackArrow={true} categoryName="Electronics" />

            <div className='sm:hidden flex items-center justify-between gap-2 mt-4 border border-stone-400 border-r-0 border-l-0 px-4 py-2'>
                {/* sorting */}
                <div className='relative w-1/3'>
                    <div onClick={() => setShowSortMenu(!showSortMenu)}
                        className='flex items-center justify-between gap-2 border border-stone-400 rounded px-4 py-1 cursor-pointer'
                    >
                        <p className='text-stone-800 font-normal text-lg'>Sort: {sortBy}</p>
                        <MdOutlineSort className='text-xl text-stone-800' />
                    </div>

                    {showSortMenu && (
                        <div className='absolute z-20 mt-1 bg-white border border-stone-300 rounded shadow w-full'>
                            {["Newest", "Oldest", "Price: Low to High", "Price: High to Low", "Rating wise"].map((option, idx) => (
                                <p key={idx} onClick={() => { setSortBy(option); setShowSortMenu(false); }}
                                    className={`px-4 py-2 hover:bg-blue-100 text-stone-600 cursor-pointer text-sm ${sortBy === option ? "bg-blue-100 font-medium text-blue-600" : ""}`}>
                                    {option}
                                </p>
                            ))}
                        </div>
                    )}
                </div>

                {/* filter button */}
                <div onClick={() => { setshowFilter(true); }} className='w-1/4 flex items-center justify-between gap-2 border border-stone-400 rounded px-4 py-1'>
                    <p className='text-stone-800 font-normal text-lg'>Filter ({appliedFilters})</p>
                    <CiFilter className='text-xl text-stone-800' />
                </div>


                {/* Sidebar filter panel */}

                {/* Overlay */}
                {showFilter && (
                    <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setshowFilter(false)} />
                )}
                <div className={`fixed top-0 left-0 h-full w-80 p-4 bg-gray-100 shadow-md z-50 transition-transform duration-300 ${showFilter ? 'translate-x-0' : '-translate-x-full'}`}>
                    {/* Header */}
                    <div className='flex items-center justify-between'>
                        <p className='text-lg text-stone-700 font-semibold'>Filter Products</p>
                        <RxCross2 className='text-xl text-black cursor-pointer' onClick={() => setshowFilter(false)} />
                    </div>

                    {/* Clear All */}
                    <div className="flex justify-end mt-2">
                        <button className="text-sm text-red-500 hover:underline font-medium" onClick={() => { clearAllFilters(); setappliedFilters(0); }}>Clear All</button>
                    </div>

                    {/* Filter Section Template */}
                    {[
                        { title: "Category", items: categories, show: showCategory, setShow: setshowCategory, selected: selectedCategory, setSelected: setSelectedCategory, showAll: showAllCategories, setShowAll: setShowAllCategories },
                        { title: "Brands", items: brands, show: showbrand, setShow: setshowbrand, selected: selectedBrand, setSelected: setSelectedBrand, showAll: showAllBrands, setShowAll: setShowAllBrands },
                        { title: "Features", items: features, show: showFeatures, setShow: setshowFeatures, selected: selectedFeature, setSelected: setSelectedFeature, showAll: showAllFeatures, setShowAll: setShowAllFeatures },
                        { title: "Condition", items: conditions, show: showConditions, setShow: setshowConditions, selected: selectedCondition, setSelected: setSelectedCondition, showAll: showAllConditions, setShowAll: setShowAllConditions }
                    ].map((section, idx) => (
                        <div key={idx} className='flex flex-col gap-1 mt-4 border-t border-stone-300 pt-2'>
                            {/* Header */}
                            <div className='flex items-center justify-between'>
                                <p className='text-stone-700 font-medium text-lg'>{section.title}</p>
                                <div className="flex items-center gap-2">
                                    {section.selected && (
                                        <button className="text-[13px] text-red-500 hover:underline font-medium" onClick={() => { section.setSelected(null); decrementFilters(); }}>Clear</button>
                                    )}
                                    <span className='text-lg cursor-pointer' onClick={() => section.setShow(!section.show)}>
                                        {section.show ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </span>
                                </div>
                            </div>

                            {/* Items */}
                            {section.show && (
                                <>
                                    {(section.showAll ? section.items : section.items.slice(0, 3)).map((item, i) => (
                                        <p key={i}
                                            onClick={() => { section.setSelected(item); incrementFilters(); }}
                                            className={`text-lg cursor-pointer pb-1 ${section.selected === item ? 'text-blue-600 font-semibold' : 'text-stone-500'}`}>
                                            {item}
                                        </p>
                                    ))}
                                    {/* Show more/less */}
                                    {section.items.length > 3 && (
                                        <button
                                            onClick={() => section.setShowAll(!section.showAll)}
                                            className="text-sm text-blue-500 hover:underline self-start"
                                        >
                                            {section.showAll ? 'Show less' : 'Show more'}
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                </div>


                {/* grid and menu */}
                <div className='flex items-center cursor-pointer gap-1 text-xl border border-stone-400  rounded'>
                    <span className='border-r border-stone-400 p-0.5'>
                        <IoGrid onClick={() => { setshowMobgrid(true); setshowMoblist(false); }} />
                    </span>
                    <span className='p-0.5'>
                        <ImMenu onClick={() => { setshowMoblist(true); setshowMobgrid(false); }} />
                    </span>
                </div>

            </div>

            {/* products section list */}
            {showMoblist &&
                <div className='sm:hidden flex flex-col gap-3 mt-4'>
                    {sortedProducts.map((prod, indx) => (
                        <div key={indx} className='flex items-center  gap-4 bg-white  border border-stone-400 rounded p-4 mx-6'>
                            <div className='w-28 h-28'>
                                <img src={prod.image} alt={prod.name} className='w-full bg-white h-full object-contain rounded' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-stone-600 text-xl font-semibold'>{prod.name}</h1>
                                <p className='text-stone-800 text-lg font-medium'>$ {prod.price}</p>
                                <div className='flex items-center text-yellow-500 text-xl gap-1'>
                                    {Array.from({ length: 5 }, (_, i) =>
                                        i < prod.starsCount - 2 ? <MdStar key={i} /> : <MdOutlineStarOutline key={i} />
                                    )}
                                    <p className='text-yellow-600 text-[18px] font-normal'>({prod.rating})</p>
                                    <p className='flex items-center gap-1 text-stone-400 text-lg'><GoDotFill className='text-lg' />{prod.orders}</p>
                                </div>
                                <p className='text-lg text-green-500 font-light'>Free Shipping</p>
                            </div>
                        </div>
                    ))}

                </div>
            }

            {/* products section grid */}
            {showMobgrid &&
                <div className='sm:hidden grid grid-cols-2 gap-4 mt-4 px-4'>
                    {products.map((prod, indx) => (
                        <div key={indx} className='bg-white border border-stone-400 rounded p-3'>
                            <div className='w-full h-28 mb-2'>
                                <img
                                    src={prod.image}
                                    alt={prod.name}
                                    className='w-full h-full object-contain bg-white rounded'
                                />
                            </div>
                            <h1 className='text-stone-600 text-base font-semibold truncate'>{prod.name}</h1>
                            <p className='text-stone-800 text-sm font-medium'>$ {prod.price}</p>
                            <div className='flex items-center text-yellow-500 text-sm gap-1 mt-1'>
                                {Array.from({ length: 5 }, (_, i) =>
                                    i < prod.starsCount - 2 ? <MdStar key={i} /> : <MdOutlineStarOutline key={i} />
                                )}
                                <p className='text-yellow-600 text-sm font-normal'>({prod.rating})</p>
                            </div>
                            <p className='text-[13px] text-stone-400 mt-1'>Orders: {prod.orders}</p>
                            <p className='text-[13px] text-green-500 font-light mt-1'>Free Shipping</p>
                        </div>
                    ))}

                </div>
            }

            {/* May like products */}
            <h1 className='sm:hidden mt-4 mb-2 text-2xl font-bold ml-4'>You may also like</h1>
            <div className='sm:hidden flex flex-row items-center gap-4 overflow-x-auto w-full  p-4'>
                {products.map((p, i) => (
                    <div
                        key={i}
                        className='flex flex-col gap-3 border border-stone-300 p-4  w-60 h-60  rounded-md flex-shrink-0'
                    >
                        {/* Image */}
                        <div className='w-28 h-24 self-center'>
                            <img src={p.image} alt={p.name} className='w-full h-full object-contain bg-white' />
                        </div>

                        {/* Text Info */}
                        <div className='w-full'>
                            <p className='text-xl text-stone-800 font-medium mb-1'>
                                $ {p.price}
                            </p>
                            <p className='text-gray-400 font-normal whitespace-normal'>
                                {p.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default GridmobView;