import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdStar, MdOutlineStarOutline } from "react-icons/md";
import { Range } from 'react-range';
import { IoGrid } from "react-icons/io5";
import { ImMenu } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { PiGreaterThanBold } from "react-icons/pi";
import Navbar from '../components/navbar.jsx';
import { RxCross1 } from "react-icons/rx";
import Pagination from '../components/pagination.jsx';
import GridmobView from './gridMobView.jsx';
import { AppContext } from '../context/AppContext.jsx';
import { SavedForLaterContext } from '../context/savedForLaterContext.jsx';
import { MdVerifiedUser } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { toast } from 'react-toastify';

const features = ["Metallic", "8GB RAM", "Durable", "Productive"];
const conditions = ["New", "Old", "Refurbished"];

function GridView() {
  const navigate = useNavigate();
  const { productsData, categoriesData } = useContext(AppContext);

  const { savedItems, toggleSaveItem ,removeSavedItem} = useContext(SavedForLaterContext);
  const productSaved = ()=> {
    toast.success("Product saved for Later");
  }
  const productUnsaved = ()=> {
    toast.success("Product unsaved for Later");
  }

  const location = useLocation();
  const state = location.state || {};
  const [tagFromNav, setTagFromNav] = useState(state?.tag || null);
  const [categoryFromSearch, setCategFromSearch] = useState(state?.category || null);
  //console.log(categoryFromSearch);
  const [NavProducts, setNavProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);

  const setPropstoNull = () => {
    setTagFromNav(null);
    setCategFromSearch(null);
  }

  // Update state on location change (this fixes the problem)
  useEffect(() => {
    if (state.tag) setTagFromNav(state.tag);
    if (state.category) setCategFromSearch(state.category);
  }, [state]);

  useEffect(() => {
    if (tagFromNav) {
      if (tagFromNav === "All category") {
        setNavProducts(productsData);
        window.scrollTo({ top: 0, behavior: "smooth" });
        //console.log("Filtered:", NavProducts);
        return;
      }
      const Products = productsData.filter(p => p.tag === tagFromNav);
      setNavProducts(Products);
      //console.log("Filtered:", Products);
    }
  }, [tagFromNav, productsData]);

  useEffect(() => {
    if (categoryFromSearch) {
      const Products = productsData.filter(p => p.category?.name === categoryFromSearch);
      setSearchProducts(Products);
      window.scrollTo({ top: 0, behavior: "smooth" });
      //console.log("Filtered:", searchProducts);
    }
    else {
      setSearchProducts(productsData);
    }

  }, [categoryFromSearch, productsData]);

  //in list view show details
  const [showDetailsMap, setShowDetailsMap] = useState({});
  const toggleDetails = (prodId) => {
    setShowDetailsMap(prev => ({
      ...prev,
      [prodId]: !prev[prodId]
    }));
  };

  //states for sorting and verification
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sortOption, setSortOption] = useState("");

  //left panel filters
  const [showAllCat, setShowAllCat] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [expandedBrand, setExpandedBrand] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);

  const [showAllFeatures, setshowAllFeatures] = useState(false);
  const [expandedFeatures, setexpandedFeatures] = useState(false);

  const [showConditions, setshowConditions] = useState(false);
  const [showRating, setShowRating] = useState(false);

  const [showPricing, setshowPricing] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 999999]);

  //right side panel
  const [showgrid, setshowgrid] = useState(true);
  const [showlist, setshowlist] = useState(false);

  const [showCountedProducts, setshowCountedProducts] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  const [showFilterdProducts, setShowFilterdProducts] = useState(false);

  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 9;

  // filters functionality..
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    brands: [],
    features: [],
    priceRange: [0, 999999],
    condition: "",
    rating: [],
  });

  const [availableFilters, setAvailableFilters] = useState({
    brands: [],
    features: [],
    condition: "",
    ratings: [],
    priceRange: [0, 999999],
  });

  const getVisibleBrands = () => {
    console.log("availableFilters.brands\n", availableFilters.brands.slice(0, 3));
    if (!expandedBrand) return [];
    return showAllBrands ? availableFilters.brands : availableFilters.brands.slice(0, 3);
  };

  const getVisibleCategories = () => {
    if (!expanded) return [];
    return showAllCat ? categoriesData : categoriesData.slice(0, 3);
  };

  const getVisibleFeatures = () => {
    if (!expandedFeatures) return [];
    return showAllFeatures ? features : features.slice(0, 3);
  };

  // function to extract available filters per category
  const getFiltersForCategory = (categoryName) => {
    const productsInCategory = productsData.filter(p => p.category.name === categoryName);
    const brands = [...new Set(productsInCategory.map(p => p.brand))];
    const features = [...new Set(productsInCategory.flatMap(p => p.features || []))];
    const condition = [...new Set(productsInCategory.condition)];
    const ratings = [...new Set(productsInCategory.map(p => Math.floor(p.rating)))];
    const prices = productsInCategory.map(p => p.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    return { brands, features, condition, ratings, priceRange: [minPrice, maxPrice] };
  };

  const getFilteredProducts = () => {
    console.log("getFilteredProducts is called from elseif part\n the total products are", productsData.length);
    return productsData.filter(prod => {
      const matchCategory = selectedFilters.categories.length === 0 || selectedFilters.categories.includes(prod?.category?.name);
      //console.log("matchCategory products", matchCategory);
      const matchBrand = selectedFilters.brands.length === 0 || selectedFilters.brands.includes(prod.brand);
      //console.log(matchBrand);
      const matchFeature = selectedFilters.features.length === 0 ||
        (Array.isArray(prod.features) && selectedFilters.features.every(f => prod.features.includes(f)));
      //console.log(matchFeature);
      const matchRating = selectedFilters.rating.length === 0 || selectedFilters.rating.includes(Math.floor(prod.rating));
      //console.log(matchRating);
      console.log("Filter values:", selectedFilters.rating);
      console.log("Product rating:", prod.rating, "Rounded:", Math.floor(prod.rating));

      const matchCondition = !selectedFilters.condition || selectedFilters.condition === prod.condition;
      //console.log(matchCondition);
      const matchPrice = prod.price >= selectedFilters.priceRange[0] && prod.price <= selectedFilters.priceRange[1];
      //console.log(matchPrice);
      const matchVerified = !verifiedOnly || prod.rating > 4.5;
      //console.log(matchVerified);
      return matchCategory && matchBrand && matchFeature && matchRating && matchCondition && matchPrice && matchVerified;
    });
  }

  const getCurrentProducts = () => {
    let base = [];

    if (tagFromNav) {
      console.log("1", tagFromNav);
      base = NavProducts;
      console.log("2", base);
    }
    else if (categoryFromSearch) {
      //console.log("1", categoryFromSearch);
      base = searchProducts;
      //console.log("2", base);
    }
    else if (showCountedProducts) {
      base = productsData.slice(0, visibleCount);
      //console.log("If showCount part call\n", base);
    }
    else if (showFilterdProducts) {
      base = getFilteredProducts();
      //console.log("else if ShowFilterProducts call\n", base);
    }
    else {
      base = [...productsData];
      //console.log("Else part call\n", base);
    }

    if (sortOption === "newest") {
      base.sort((a, b) => b.starsCount - a.starsCount);
    } else if (sortOption === "oldest") {
      base.sort((a, b) => a.starsCount - b.starsCount);
    }

    const start = (currentPage - 1) * itemsPerPage;
    return base.slice(start, start + itemsPerPage);
  };

  return (
    <>
      {/* desktop menu */}
      <Navbar cart={false} />
      <div className='max-w-7xl mx-auto mt-2 flex flex-col items-start  gap-2'>

        <p className='hidden  text-stone-400 text-[18px] font-normal   sm:flex gap-2 items-center'>
          Home  <PiGreaterThanBold className='text-[18px]' /> Categories <PiGreaterThanBold className='text-[18px]' />
          <span className="">
            {tagFromNav
              ? tagFromNav
              : categoryFromSearch
                ? categoryFromSearch
                : selectedFilters.categories[0]}
          </span>

        </p>

        {/* Below 2 panels */}
        <div className='sm:flex hidden items-start p-2 w-full justify-between gap-2'>

          {/* ---------- LEFT PANEL ---------- */}
          <div className='w-1/4'>

            {/* CATEGORY  */}
            <div className='border-t border-gray-300 pt-2 mb-4'>
              <div className='flex justify-between items-center mb-4'>
                <p className='text-xl font-medium'>Category</p>
                {expanded ?
                  <IoIosArrowUp onClick={() => { setExpanded(false); setShowAllCat(false); }} className='text-lg cursor-pointer text-stone-400' />
                  : <IoIosArrowDown onClick={() => { setExpanded(true); }} className='text-lg cursor-pointer text-stone-400' />
                }
              </div>
              {getVisibleCategories().map((cat, i) => (
                <p key={i}
                  onClick={() => {
                    setExpandedBrand(false);
                    setShowAllBrands(false);
                    setPropstoNull();
                    setShowFilterdProducts(true);
                    setSelectedCategory(cat.name); // Save the category name
                    //get filters for selected category
                    const newAvailableFilters = getFiltersForCategory(cat.name);
                    setAvailableFilters(newAvailableFilters);
                    setSelectedFilters({
                      categories: [cat.name], // only one category selected
                      brands: [],
                      features: [],
                      priceRange: newAvailableFilters.priceRange,
                      condition: "",
                      rating: [],
                    });
                  }}

                  className='text-stone-400 text-lg pb-2 cursor-pointer'>
                  {cat.name}
                </p>
              ))}
              {expanded && !showAllCat && (
                <button onClick={() => setShowAllCat(true)} className="text-blue-600 text-lg  mt-2">
                  Show more
                </button>
              )}
            </div>

            {/* brand and feature filter are dynamic per category for that reason */}
            {
              selectedCategory && (
                <>
                  {/* BRANDS */}
                  <div className='border-t border-gray-300 pt-2 mb-4'>
                    <div className='flex items-center justify-between mb-2'>
                      <p className='text-xl font-medium'>Brands</p>
                      {expandedBrand ?
                        <IoIosArrowUp onClick={() => { setShowAllBrands(false); setExpandedBrand(false); }} className='text-lg text-stone-400 cursor-pointer' />
                        : <IoIosArrowDown onClick={() => { setExpandedBrand(true); }} className='text-lg text-stone-400 cursor-pointer' />}
                    </div>
                    {getVisibleBrands().map((brand, i) => (
                      <label key={i} className='flex items-center   text-lg gap-2 text-stone-400'>
                        <input type="checkbox" onChange={(e) => {
                          const checked = e.target.checked;
                          setShowFilterdProducts(true);
                          setSelectedFilters(prev => ({
                            ...prev,
                            brands: checked
                              ? [...prev.brands, brand]
                              : prev.brands.filter(b => b !== brand)
                          }));
                        }}
                          className='w-5 h-5 text-blue-500  accent-blue-500' />
                        <span>{brand}</span>
                      </label>
                    ))}
                    {expandedBrand && !showAllBrands && (
                      <button onClick={() => setShowAllBrands(true)} className="text-blue-600 text-lg mt-2">
                        Show more
                      </button>
                    )}
                  </div>
                  {/* FEATURES */}
                  <div className='border-t border-gray-300 pt-2 mb-4'>
                    <div className='flex items-center justify-between mb-2'>
                      <p className='text-xl font-medium'>Features</p>
                      {expandedFeatures ?
                        <IoIosArrowUp className='text-lg text-stone-400 cursor-pointer' onClick={() => { setexpandedFeatures(false); setshowAllFeatures(false); }} />
                        : <IoIosArrowDown className='text-lg text-stone-400 cursor-pointer' onClick={() => { setexpandedFeatures(true); }} />
                      }

                    </div>
                    {availableFilters.features.map((feature, i) => (
                      <label key={i} className='flex items-center text-stone-400  text-lg gap-2 '>
                        <input type="checkbox" onChange={(e) => {
                          const checked = e.target.checked;
                          setShowFilterdProducts(true);
                          setSelectedFilters(prev => ({
                            ...prev,
                            features: checked
                              ? [...prev.features, feature]
                              : prev.features.filter(f => f !== feature)
                          }));
                        }}
                          className='w-5 h-5  text-blue-500  accent-blue-500' />
                        <span>{feature}</span>
                      </label>
                    ))}
                    {expandedFeatures && !showAllFeatures && (
                      <button onClick={() => setshowAllFeatures(true)} className="text-blue-600 text-lg mt-2">
                        Show more
                      </button>
                    )}

                  </div>
                  {/* RATING */}
                  <div className='border-t border-gray-300 pt-2'>
                    <div className='flex items-center justify-between mb-2'>
                      <p className='text-xl font-medium'>Rating</p>
                      {showRating ? <IoIosArrowDown className='text-lg text-stone-400 cursor-pointer' onClick={() => setShowRating(false)} /> :
                        <IoIosArrowDown className='text-lg text-stone-400 cursor-pointer' onClick={() => setShowRating(true)} />}
                    </div>
                    {showRating && [1, 2, 3, 4].map((stars) => (
                      <label key={stars} className='flex items-center gap-2 text-yellow-600'>
                        <input type="radio" name="rating" onChange={(e) => {
                          const checked = e.target.checked;
                          setSelectedFilters(prev => ({
                            ...prev,
                            rating: checked
                              ? [...prev.rating, stars]
                              : prev.rating.filter(r => r !== stars)
                          }));
                          setShowFilterdProducts(true);
                        }}
                          className='m-2 w-5 h-5  text-blue-500  accent-blue-500' />
                        <span className='flex items-center'>
                          {Array.from({ length: 5 }, (_, i) =>
                            i < stars ? (<MdStar className='text-2xl' key={i} />) : (<MdOutlineStarOutline className='text-2xl' key={i} />))}
                        </span>
                      </label>
                    ))}
                  </div>
                </>)
            }

            {/* PRICING */}
            <div className='border-t border-gray-300 pt-2 mb-4'>
              <div className='flex items-center justify-between mb-4'>
                <p className='text-xl font-medium '>Pricing</p>
                {showPricing ?
                  <IoIosArrowUp className='text-lg text-stone-400 cursor-pointer' onClick={() => { setshowPricing(false); }} />
                  : <IoIosArrowDown className='text-lg text-stone-400 cursor-pointer' onClick={() => { setshowPricing(true); }} />
                }
              </div>
              {showPricing &&
                <>
                  <div className='mx-4'>

                    <Range
                      step={1000}
                      min={0}
                      max={999999}
                      values={priceRange}
                      onChange={(values) => { setPriceRange(values); }}
                      renderTrack={({ props, children }) => (
                        <div {...props} className="h-1 bg-blue-200 w-3/4  rounded-md">{children}</div>
                      )}
                      renderThumb={({ props }) => (
                        <div {...props} className="h-4 w-4 bg-blue-500 rounded-full shadow" />
                      )}
                    />
                  </div>

                  <div className='flex flex-col gap-2 mt-4 mb-2 mr-2'>
                    {/* min max prices */}
                    <div className='w-full flex items-center gap-2 justify-between'>
                      <div className='flex flex-col w-1/2'>
                        <p className='text-lg text-stone-500'>Min</p>
                        <input type="number" value={priceRange[0]}
                          onChange={(e) => {
                            const newMin = Math.min(Number(e.target.value), priceRange[1]);
                            setPriceRange([newMin, priceRange[1]]);
                          }}
                          placeholder='0' className='border border-stone-300 rounded px-4 py-2 outline-none' />
                      </div>

                      <div className='flex flex-col w-1/2'>
                        <p className='text-lg text-stone-500'>Max</p>
                        <input type="number" value={priceRange[1]}
                          onChange={(e) => {
                            const newMax = Math.max(Number(e.target.value), priceRange[0]);
                            setPriceRange([priceRange[0], newMax]);
                          }}
                          placeholder='99999' className='border border-stone-300 rounded px-4 py-2 outline-none' />
                      </div>
                    </div>

                    <button className='text-center text-lg  w-full px-4 py-2  border  border-stone-300 text-blue-500 font-semibold rounded'
                      onClick={() => { setSelectedFilters(prev => ({ ...prev, priceRange: priceRange })); setShowFilterdProducts(true); }}>
                      Apply
                    </button>

                  </div>
                </>}
            </div>

            {/* CONDITION */}
            <div className='border-t border-gray-300 pt-2 mb-4'>
              <div className='flex items-center justify-between mb-2'>
                <p className='text-xl font-medium'>Condition</p>
                {showConditions ? <IoIosArrowUp className='text-lg text-stone-400 cursor-pointer' onClick={() => { setshowConditions(false); }} />
                  : <IoIosArrowDown className='text-lg text-stone-400 cursor-pointer' onClick={() => { setshowConditions(true); }} />}
              </div>
              {showConditions && conditions.map((c, i) => (
                <label key={i} className='flex items-center gap-2  mb-2 text-lg text-stone-400'>
                  <input type="radio" name="condition" onChange={() => {
                    setSelectedFilters(prev => ({
                      ...prev,
                      condition: c
                    }));
                    setShowFilterdProducts(true);
                  }}
                    className='w-5 h-5  text-blue-500  accent-blue-500' />
                  <span>{c}</span>
                </label>
              ))}
            </div>

          </div>

          {/* ---------- RIGHT PANEL ---------- */}
          <div className='w-3/4'>
            {/* top item count filters  */}
            <div className='mb-2  flex justify-between items-center p-2 rounded w-full border border-stone-300'>

              <p className="text-lg text-gray-700">
                {getCurrentProducts().length} items in{" "}
                {tagFromNav ? (
                  <span className="font-bold">{tagFromNav} Tab</span>
                ) : categoryFromSearch ? (
                  <span className="font-bold">{categoryFromSearch} Accessory</span>
                ) : showFilterdProducts && selectedFilters.categories.length > 0 ? (
                  <span className="font-bold">{selectedFilters.categories[0]} Accessory</span>
                ) : (
                  <span>Accessory</span>
                )}
              </p>


              <div className='flex items-center gap-3 justify-between'>

                <div className='flex items-center gap-2'>
                  <input type="checkbox" checked={verifiedOnly} onChange={() => { setVerifiedOnly(prev => !prev); setShowFilterdProducts(true); }} className='w-4 h-4 cursor-pointer text-blue-500 accent-blue-500' />
                  <p className='text-lg text-stone-500'>Verified Only</p>
                </div>

                <select onChange={(e) => setSortOption(e.target.value)} className="border outline-none text-stone-500 px-2 py-1 rounded">
                  <option value="">Sort by</option>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>

                <div className='flex items-center cursor-pointer gap-2 text-2xl border border-stone-400  rounded'>
                  <span className='border-r border-stone-400 p-1'>
                    <IoGrid onClick={() => { setshowgrid(true); setshowlist(false); }} />
                  </span>
                  <span className='p-0.5'>
                    <ImMenu onClick={() => { setshowlist(true); setshowgrid(false); }} />
                  </span>
                </div>
              </div>

            </div>

            {/* applied filters by user */}
            {Object.values(selectedFilters).some(v => (Array.isArray(v) ? v.length : v)) && (

              <div className='flex flex-wrap gap-2 items-center mb-2'>
                {/* Category */}
                {selectedFilters.categories.map((cat, idx) => (
                  <span key={idx} className='border px-2 py-1 rounded-md bg-white text-stone-400 border-blue-400 flex items-center gap-2'>
                    {cat}
                    <button onClick={() => {
                      setSelectedFilters(prev => ({
                        ...prev,
                        categories: prev.categories.filter(c => c !== cat)
                      }));
                    }}><RxCross1 /></button>
                  </span>
                ))}

                {selectedFilters.brands.map((b, i) => (
                  <span key={i} className='border px-2 py-1 rounded-md bg-white text-stone-400 border-blue-400 flex items-center gap-2'>
                    {b}
                    <button onClick={() => {
                      setSelectedFilters(prev => ({
                        ...prev,
                        brands: prev.brands.filter(br => br !== b)
                      }));
                    }}><RxCross1 /></button>
                  </span>
                ))}

                {selectedFilters.features.map((f, i) => (
                  <span key={i} className='border px-2 py-1 rounded-md bg-white text-stone-400 border-blue-400 flex items-center gap-2'>
                    {f}
                    <button onClick={() => {
                      setSelectedFilters(prev => ({
                        ...prev,
                        features: prev.features.filter(ft => ft !== f)
                      }));
                    }}><RxCross1 /></button>
                  </span>
                ))}

                {selectedFilters.rating.map((r, i) => (
                  <span key={i} className='border px-2 py-1 rounded-md bg-white text-stone-400 border-blue-400  flex items-center gap-2'>
                    {r} Stars
                    <button onClick={() => {
                      setSelectedFilters(prev => ({
                        ...prev,
                        rating: prev.rating.filter(rt => rt !== r)
                      }));
                    }}><RxCross1 /></button>
                  </span>
                ))}

                {selectedFilters.condition && (
                  <span className='border px-2 py-1 rounded-md bg-white text-stone-400 border-blue-400  flex items-center gap-2'>
                    {selectedFilters.condition}
                    <button onClick={() => {
                      setSelectedFilters(prev => ({
                        ...prev,
                        condition: null
                      }));
                    }}><RxCross1 /></button>
                  </span>
                )}

                {/* Clear all */}
                {selectedCategory &&
                  <button onClick={() => {
                    setSelectedFilters({ categories: [], brands: [], features: [], priceRange: [0, 999999], condition: "", rating: [], });
                    setPriceRange([0, 999999]); setSelectedCategory(null); setVerifiedOnly(false); setSortOption(""); showFilterdProducts(false);
                  }} className='flex items-center gap-2 bg-blue-500 font-normal  text-white ml-4 rounded p-1'>
                    Clear all filters
                  </button>
                }

              </div>
            )}

            {showgrid &&
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {getCurrentProducts().map((prod, i) => {
                  const isSaved = savedItems.some(item => item._id === prod._id);
                  return (
                    <div key={i}
                      className='border border-stone-300 rounded-md shadow-sm cursor-pointer'>
                      <div className='bg-white mb-3  rounded-md w-full h-56'>
                        <img
                          onClick={() => {
                            localStorage.setItem("selectedProduct", JSON.stringify(prod));
                            navigate("/product-detail");
                          }} src={prod.image} alt="img" className='w-full h-full rounded-t-md object-cover' />
                      </div>
                      <div className='flex items-center gap-2 px-1'>
                        <p className='text-xl font-medium'>$ {prod.price} <span className='line-through text-[15px] text-red-500 ml-2'>${prod.oldPrice}</span></p>
                        <button
                          key={prod._id}
                          className='border text-blue-500 rounded p-1 hover:bg-blue-50'
                        >
                          {isSaved ? <FaHeart onClick={() => {removeSavedItem(prod._id); productUnsaved();}} className='text-2xl' /> : <FaRegHeart onClick={() => {toggleSaveItem(prod); productSaved();}} className='text-2xl' />}
                        </button>
                      </div>
                      <div className='flex items-center gap-2 p-2'>
                        <label key={prod.starsCount} className='flex items-center gap-2 text-yellow-500'>
                          <span className='flex items-center'>
                            {Array.from({ length: 5 }, (_, i) =>
                              i < prod.starsCount ? (<MdStar className='text-lg' key={i} />) : (<MdOutlineStarOutline className='text-lg' key={i} />))}
                          </span>
                        </label>
                        <p className='text-yellow-500'>({prod.rating})</p>
                      </div>
                      <div className='flex items-center gap-1 px-1'>
                        {prod.rating > 4.5 && <span className='text-green-500'><MdVerifiedUser className='text-[24px]' /></span>}
                        <p className='text-stone-800 mt-1 text-xl font-medium px-1 pb-2'>{prod.name}</p>
                      </div>

                    </div>)

                })}
              </div>
            }

            {showlist &&
              <div className='flex flex-col gap-4'>
                {getCurrentProducts().map((prod, i) => {
                  const isSaved = savedItems.some(item => item._id === prod._id);
                  return (
                    <div key={i}
                      className='flex items-start gap-8 border border-stone-300 rounded-md shadow-sm bg-white'>
                      <div className='flex-shrink-0 bg-red-500 w-56 h-56 rounded-md '>
                        <img
                          onClick={() => {
                            localStorage.setItem("selectedProduct", JSON.stringify(prod));
                            navigate("/product-detail");
                          }}
                          src={prod.image} alt="img" className='w-full h-full object-cover rounded-l-md' />
                      </div>

                      <div className='flex flex-col items-start flex-grow p-2'>

                        <div className='flex justify-between items-center gap-8'>
                          <div className='flex items-center gap-2'>
                            {prod.rating > 4.5 && <span className='text-green-500'><MdVerifiedUser className='text-[24px]' /></span>}
                            <h3 className='text-xl font-medium text-stone-800'>{prod.name}</h3>
                          </div>
                          <button
                            key={prod._id}
                            className='border text-blue-500 rounded p-1 hover:bg-blue-50'
                          >
                            {isSaved ? <FaHeart onClick={() => {removeSavedItem(prod._id); productUnsaved();}} className='text-2xl' /> : <FaRegHeart onClick={() => {toggleSaveItem(prod); productSaved();}} className='text-2xl' />}
                          </button>
                          {/* <button >
                          {savedItem ?
                            (<FaHeart onClick={() => { removeSavedItem(prod._id); setSavedItem(false); }} className='text-xl text-blue-500' />) :
                            (<FaRegHeart onClick={() => { toggleSaveItem(prod); setSavedItem(true); }} className='text-xl text-blue-500' />)}
                        </button> */}
                        </div>

                        <div className='flex items-center gap-2 mt-1 '>
                          <p className='text-xl font-semibold text-black'>$ {prod.price}</p>
                          <p className='line-through text-red-500 text-lg'>${prod.oldPrice}</p>
                        </div>

                        <div className='flex items-center gap-2 mt-1'>
                          <div className='flex text-yellow-600 text-xl'>
                            {Array.from({ length: 5 }, (_, i) =>
                              i < prod.starsCount ? <MdStar key={i} /> : <MdOutlineStarOutline key={i} />
                            )}
                          </div>
                          <p className='text-lg text-yellow-500'>{prod.rating}</p>
                          <p className='flex font-light items-center text-gray-400'><GoDotFill />{prod.starsCount} orders</p>
                          <p className='flex font-light items-center text-green-500'><GoDotFill /> Free Shipping</p>
                        </div>

                        <p className='text-sm text-gray-600 mt-2'>{prod.description.summary}</p>

                        {!showDetailsMap[prod._id] && (
                          <button onClick={() => toggleDetails(prod._id)} className='text-blue-500 mt-2 text-sm font-normal'>
                            Show details
                          </button>
                        )}

                        {showDetailsMap[prod._id] && (
                          <div className='flex flex-col gap-2 items-start'>
                            <p className='text-sm text-gray-600 mt-2'>{prod.description.details}</p>
                            <button onClick={() => toggleDetails(prod._id)} className='text-stone-500 font-normal mt-2 text-sm '>
                              Hide details
                            </button>
                          </div>
                        )}

                      </div>
                    </div>

                  )
                })}
              </div>
            }

            {/* Select & Pagination */}
            <div className='flex items-center  justify-end gap-4  mt-6 p-2'>

              <select className='border border-stone-300 p-2 rounded cursor-pointer text-stone-500 outline-none'
                onChange={(e) => {
                  const count = parseInt(e.target.value);
                  setVisibleCount(count);
                  setshowCountedProducts(true);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                <option value={5}> Show 5</option>
                <option value={10}>Show 10</option>
                <option value={15}>Show 15</option>
                <option value={20}>Show 20</option>
                <option value={itemsPerPage}>Show Maximum</option>
              </select>

              <Pagination currentPage={currentPage} setcurrentPage={setcurrentPage} itemsPerPage={itemsPerPage} />

            </div>

          </div>

        </div>

      </div >

      {/* Mobile Grid View */}
      <GridmobView />
    </>
  );
}
export default GridView;