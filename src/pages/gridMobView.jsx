import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import MobileNavbar from '../components/mobile-navbar.jsx';
import { MdOutlineSort } from "react-icons/md";
import { IoOptionsSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { IoGrid } from "react-icons/io5";
import { ImMenu } from "react-icons/im";
import { MdStar, MdOutlineStarOutline } from "react-icons/md";
import { RxCross2 } from 'react-icons/rx';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { AppContext } from '../context/AppContext.jsx';
import { useLocation } from 'react-router-dom';
import Pagination from '../components/pagination.jsx';
import { useNavigate } from 'react-router-dom';

const categories = ["Automobiles", "Clothes and Wear", "Home interiors", "Computer and Tech", "Tools, Equipment", "Sports and Outdoor", "Animal and Pets", "Machinery tools"];
const conditions = ["New", "Old", "Refurbished"];


function GridmobView() {

    const location = useLocation();
    const state = location.state || {};

    const [categoryFromRoute, setCategFromRoute] = useState(state?.category || null);
    console.log("##",categoryFromRoute);
    //console.log("category from deals and offer sending to navbar from gridMobview",categoryFromRoute);
    const { productsData } = useContext(AppContext);
    //console.log("productsData at gridMob\n", productsData.length, productsData);

    const [showMobgrid, setshowMobgrid] = useState(true);
    const [showMoblist, setshowMoblist] = useState(false);

    const [sortBy, setSortBy] = useState("New");
    const [showSortMenu, setShowSortMenu] = useState(false);

    const [visibleCount, setVisibleCount] = useState(10);
    const [showCountedProducts, setshowCountedProducts] = useState(false);

    const [showFilter, setshowFilter] = useState(false);
    const [appliedFilters, setappliedFilters] = useState(0);

    const navigate = useNavigate();

    const incrementFilters = () => {
        setappliedFilters(prev => prev + 1);
    };

    const decrementFilters = () => {
        setappliedFilters(prev => (prev > 0 ? prev - 1 : 0));
    };

    const [currentPage, setcurrentPage] = useState(1);
    const itemsPerPage = 9;


    const [showCategory, setshowCategory] = useState(false);
    const [showbrand, setshowbrand] = useState(false);
    const [showFeatures, setshowFeatures] = useState(false);
    const [showConditions, setshowConditions] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [selectedCondition, setSelectedCondition] = useState(null);

    const [dynamicBrands, setDynamicBrands] = useState([]);
    const [dynamicFeatures, setDynamicFeatures] = useState([]);

    // Show more toggles
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [showAllBrands, setShowAllBrands] = useState(false);
    const [showAllFeatures, setShowAllFeatures] = useState(false);
    const [showAllConditions, setShowAllConditions] = useState(false);

    const [showFilterproducts, setShowFilterproducts] = useState(false);
    const [sortOption, setSortOption] = useState("");

    const getFilteredProducts = () => {
        console.log("getFilteredProducts invoked\n");
        let base = productsData;
        // Apply category filter
        if (selectedCategory) {
            console.log("selectedCategory", selectedCategory);
            base = base.filter(prod => prod.category.name === selectedCategory);
            console.log(base);
        }

        // Apply brand filter (only if category selected)
        if (selectedBrand && selectedCategory) {
            base = base.filter(prod => prod.brand === selectedBrand);
        }

        // Apply feature filter 
        if (selectedFeature && selectedCategory) {
            base = base.filter(prod =>
                prod.attributes && Object.prototype.hasOwnProperty.call(prod.attributes, selectedFeature)
            );
        }

        // Apply condition
        if (selectedCondition) {
            base = base.filter(prod => prod.condition === selectedCondition);
        }
        return base;
    };

    const getCatgFromRouteProducts = () => {
        if (categoryFromRoute === "All categories")
            return productsData;
        const Products = productsData.filter(p => p.category.name === categoryFromRoute);
        return Products;
    };;

    // Clear all
    const clearAllFilters = () => {
        setSelectedCategory(null);
        setSelectedBrand(null);
        setSelectedFeature(null);
        setSelectedCondition(null);
    };

    const getCurrentProducts = () => {
        let base = [];
        if (categoryFromRoute) {
            //console.log("@",categoryFromRoute);
            base = getCatgFromRouteProducts();
            //console.log(base);
        }
        else if (showFilterproducts) {
            console.log(" showFilterproducts invoked.\n");
            base = getFilteredProducts();
            console.log("FilterProducts\n", base);
        }
        else {
            base = [...productsData];
        }

        if (showCountedProducts) {
            return base.slice(0, visibleCount);
        }

        // Sorting logic
        if (sortOption === "New") {
            base = base.filter((p => p.rating > 4.5));
            console.log("new Prod", base);
        } else if (sortOption === "Old") {
            base = base.filter((p => p.rating < 4.3));
            console.log("old Prod", base);
        } else if (sortOption === "Price") {
            base.sort((a, b) => a.price - b.price); // Low to high
            console.log("Price Wise", base);
        } else if (sortOption === "Rating") {
            base.sort((a, b) => b.rating - a.rating); // High to low
            console.log("Rating Wise", base);
        }

        const start = (currentPage - 1) * itemsPerPage;
        return base.slice(start, start + itemsPerPage);
    };

    useEffect(() => {
        if (selectedCategory) {
            const filtered = productsData.filter(p => p.category.name === selectedCategory);

            // Get unique brands
            const dynamicBrands = [...new Set(filtered.map(p => p.brand))];

            // Get all attribute keys from products (as features)
            const featureKeysSet = new Set();
            filtered.forEach(p => {
                if (p.attributes && typeof p.attributes === 'object') {
                    Object.keys(p.attributes).forEach(key => featureKeysSet.add(key));
                }
            });
            const dynamicFeatures = Array.from(featureKeysSet);

            setDynamicBrands(dynamicBrands);
            setDynamicFeatures(dynamicFeatures);
        }
        window.scrollTo({ top: 0, scroll: "smooth" });
    }, [selectedCategory, productsData]);

    useEffect(() => {
        setCategFromRoute(location.state?.category);
        getCatgFromRouteProducts();
    }, [location.state?.category]);


    return (
        <div className='w-full'>
            {/* mobile-menu below all */}
            <MobileNavbar showBackArrow={true} categoryName={categoryFromRoute} route='/' showSelection={true} />

            <div className='sm:hidden flex items-center justify-between gap-2 mt-4 mx-2 border border-stone-400 border-r-0 border-l-0 px-4 py-2 w-full '>

                {/* sorting */}
                <div className='relative '>
                    <div onClick={() => { setShowSortMenu(!showSortMenu); }}
                        className='flex items-center gap-4 border border-stone-400 rounded p-1 cursor-pointer'
                    >
                        <MdOutlineSort className='text-lg text-stone-800' />
                        <p className='text-stone-800 font-medium text-sm'>Sort by: {sortBy}</p>
                    </div>

                    {showSortMenu && (
                        <div className='absolute z-20 mt-1 bg-white border border-stone-300 rounded shadow w-full'>
                            {["New", "Old", "Price", "Rating"].map((option, idx) => (
                                <p key={idx} onClick={() => { setSortBy(option); setShowSortMenu(false); setSortOption(option); }}
                                    className={`px-4 py-2 hover:bg-blue-100 text-stone-600 cursor-pointer text-sm ${sortBy === option ? "bg-blue-100 font-medium text-blue-600" : ""}`}>
                                    {option}
                                </p>
                            ))}
                        </div>
                    )}
                </div>

                {/* filter button */}
                <div onClick={() => { setshowFilter(true); }} className='flex items-center  gap-4 border border-stone-400 rounded px-4 py-1'>
                    <IoOptionsSharp className='text-[15px] text-stone-800' />
                    <p className='text-stone-800 font-medium text-sm'>Filter ({appliedFilters})</p>
                </div>

                {/* Sidebar filter panel */}
                {/* Overlay */}
                {showFilter && (
                    <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setshowFilter(false)} />
                )}
                <div className={`fixed top-0 left-0 h-full w-72 p-4 bg-gray-100 shadow-md z-50 transition-transform duration-300 ${showFilter ? 'translate-x-0' : '-translate-x-full'}`}>
                    {/* Header */}
                    <div className='flex items-center justify-between'>
                        <p className='text-lg text-stone-700 font-semibold'>Filter Products</p>
                        <RxCross2 className='text-xl text-black cursor-pointer' onClick={() => setshowFilter(false)} />
                    </div>

                    {/* Clear All */}
                    <div className="flex justify-end mt-2">
                        <button className="text-sm text-red-500 hover:underline font-medium" onClick={() => { clearAllFilters(); setappliedFilters(0); setShowFilterproducts(false); }}>Clear All</button>
                    </div>

                    {/* Filter Section Template */}
                    {[
                        {
                            title: "Category",
                            items: categories,
                            show: showCategory,
                            setShow: setshowCategory,
                            selected: selectedCategory,
                            setSelected: setSelectedCategory,
                            showAll: showAllCategories,
                            setShowAll: setShowAllCategories
                        },
                        {
                            title: "Brands",
                            items: dynamicBrands,
                            show: showbrand,
                            setShow: setshowbrand,
                            selected: selectedBrand,
                            setSelected: setSelectedBrand,
                            showAll: showAllBrands,
                            setShowAll: setShowAllBrands
                        },
                        {
                            title: "Features",
                            items: dynamicFeatures,
                            show: showFeatures,
                            setShow: setshowFeatures,
                            selected: selectedFeature,
                            setSelected: setSelectedFeature,
                            showAll: showAllFeatures,
                            setShowAll: setShowAllFeatures
                        },
                        {
                            title: "Condition",
                            items: conditions,
                            show: showConditions,
                            setShow: setshowConditions,
                            selected: selectedCondition,
                            setSelected: setSelectedCondition,
                            showAll: showAllConditions,
                            setShowAll: setShowAllConditions
                        }
                    ].map((section, idx) => (
                        <div key={idx} className='flex flex-col gap-1 mt-4 border-t border-stone-300 pt-2'>
                            {/* Header */}
                            <div className='flex items-center justify-between'>
                                <p className='text-stone-700 font-medium text-lg'>{section.title}</p>
                                <div className="flex items-center gap-2">
                                    {section.selected && (
                                        <button className="text-[13px] text-red-500 hover:underline font-medium" onClick={() => { section.setSelected(null); decrementFilters(); setShowFilterproducts(false); setDynamicBrands([]); setDynamicFeatures([]); }}>Clear</button>
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
                                            onClick={() => { section.setSelected(item); incrementFilters(); setShowFilterproducts(true); }}
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
                <div className='sm:hidden flex flex-col gap-3 mt-4 mx-2'>
                    {getCurrentProducts().map((prod, indx) => (
                        <div key={indx}
                            onClick={() => {
                                navigate("/product-detail");
                                localStorage.setItem("selectedProduct", JSON.stringify(prod));
                            }}
                            className='flex items-center  gap-4 bg-white  border border-stone-400 rounded'>
                            <div className='w-40 h-40 rounded'>
                                <img src={prod.image} alt={prod.name} className='w-full bg-white h-full object-cover rounded-l' />
                            </div>
                            <div className='flex flex-1 flex-col gap-1'>
                                <h1 className='text-stone-800 text-[18px] font-semibold'>{prod.name}</h1>
                                <p className='text-stone-600 text-lg font-medium'>$ {prod.price}</p>
                                <div className='flex items-center text-yellow-500 text-xl gap-1'>
                                    {Array.from({ length: 5 }, (_, i) =>
                                        i < prod.starsCount - 2 ? <MdStar key={i} /> : <MdOutlineStarOutline key={i} />
                                    )}
                                    <p className='text-yellow-600 text-[18px] font-normal'>({prod.rating})</p>
                                </div>
                                <p className='flex items-center gap-1 text-stone-400 text-[13px]'><GoDotFill className='text-[13px]' />{prod.starsCount} orders</p>
                                <p className='flex items-center gap-1 text-[13px] text-green-500 font-light'><GoDotFill className='text-[13px]' />Free Shipping</p>
                            </div>
                        </div>
                    ))}

                </div>
            }

            {/* products section grid */}
            {showMobgrid &&
                <div className='sm:hidden grid grid-cols-2 gap-4 mt-4 px-4'>
                    {getCurrentProducts().map((prod, indx) => (
                        <div key={indx}
                            onClick={() => {
                                navigate("/product-detail");
                                localStorage.setItem("selectedProduct", JSON.stringify(prod));
                            }}
                            className='bg-white border border-stone-400 rounded'>

                            <div className='w-full h-28 mb-2 rounded'>
                                <img src={prod.image} alt={prod.name} className='w-full h-full object-cover bg-white rounded-t' />
                            </div>
                            <h1 className='text-stone-800 text-base font-semibold truncate px-0.5'>{prod.name}</h1>
                            <p className='text-stone-600 text-sm font-medium px-0.5'>$ {prod.price}</p>
                            <div className='flex items-center text-yellow-500 text-sm gap-1 mt-1 px-0.5 '>
                                {Array.from({ length: 5 }, (_, i) =>
                                    i < prod.starsCount - 2 ? <MdStar key={i} /> : <MdOutlineStarOutline key={i} />
                                )}
                                <p className='text-yellow-500 text-sm font-normal px-0.5'>({prod.rating})</p>
                            </div>
                            <p className=' flex items-center gap-1 text-[13px] text-stone-400 mt-1 px-0.5'><GoDotFill className='text-[15px]' />Orders: {prod.starsCount}</p>
                            <p className=' flex items-center gap-1 text-[13px] text-green-500 font-light mt-1 px-0.5 pb-1'><GoDotFill className='text-[15px] text-green-500' />Free Shipping</p>
                        </div>
                    ))}

                </div>
            }

            {/* pagination */}
            <div className='flex sm:hidden items-center gap-2 justify-end mt-4 mx-4'>

                <select className='top-0 border border-stone-300 p-2 rounded cursor-pointer text-stone-500 text-sm outline-none'
                    onChange={(e) => {
                        const count = parseInt(e.target.value);
                        setVisibleCount(count);
                        setshowCountedProducts(true);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}>
                    <option value={5}> Show 5</option>
                    <option value={10}>Show 10</option>
                    <option value={15}>Show 15</option>
                </select>
                <Pagination currentPage={currentPage} setcurrentPage={setcurrentPage} itemsPerPage={itemsPerPage} />

            </div>

            {/* May like products */}
            <h1 className='sm:hidden mt-4 mb-2 text-xl font-bold ml-4'>You may also like</h1>
            <div className='sm:hidden flex flex-row items-center gap-4 overflow-x-auto w-full  p-4'>
                {productsData.slice(0, 6).map((p, i) => (
                    <div
                        key={i}
                        className='flex flex-col gap-3 border border-stone-300  w-60 h-60  rounded-md flex-shrink-0'
                    >
                        {/* Image */}
                        <div className='w-full h-32 self-center rounded-md'>
                            <img src={p.image} alt={p.name} className='w-full h-full object-cover bg-white rounded-t-md ' />
                        </div>

                        {/* Text Info */}
                        <div className='w-full px-2 pb-1'>
                            <p className='text-lg text-stone-800 font-medium'>
                                $ {p.price}
                            </p>
                            <p className='text-stone-500 font-normal  pb-1'>
                                {p.description.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default GridmobView;