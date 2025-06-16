import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdStar, MdOutlineStarOutline } from "react-icons/md";
import { Range } from 'react-range';
import { IoGrid } from "react-icons/io5";
import { ImMenu } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { GoDotFill } from "react-icons/go";
import { PiGreaterThanBold } from "react-icons/pi";


const categories = [
  "Automobiles", "Clothes and Wear", "Computer and Tech",
  "Tools, Equipment", "Sports and outdoor", "Animal and pets", "Machinery Tools"
];
const brands = ["Samsung", "Huawei", "Oppo", "Pocco", "Lenovo", "Redmi", "Techno Spark", "Sony", "Nokia", "Q Mobile"];
const features = ["Metallic", "Plastic Cover", "8GB RAM", "Super Power", "Large Memory"];
const conditions = ["Any", "Refurbished", "Brand New", "Old Items"];


const products = [
  {
    image: "/images/phone.jpeg",
    name: "Apple iPhone 13",
    description: "Latest iPhone with A15 Bionic chip and improved battery life.",
    price: 799,
    oldPrice: 899,
    orders : 154,
    rating: 4.7,
    starsCount: 5
  },
  {
    image: "/images/t-7.jpeg",
    name: "Samsung Galaxy S21",
    description: "High-performance Android phone with an amazing display.",
    price: 699,
    oldPrice: 799,
    orders : 154,
    rating: 4.5,
    starsCount: 5
  },
  {
    image: "/images/t-7.jpeg",
    name: "Xiaomi Poco X5",
    description: "Budget phone with powerful features and smooth UI.",
    price: 299,
    oldPrice: 349,
    orders : 154,
    rating: 4.2,
    starsCount: 4
  },
  {
    image: "/images/t-8.jpeg",
    name: "OnePlus Nord CE",
    description: "Smooth Oxygen OS experience with solid hardware.",
    price: 349,
    oldPrice: 399,
    orders : 154,
    rating: 4.3,
    starsCount: 4
  },
  {
    image: "/images/watch.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    orders : 154,
    oldPrice: 299,
    rating: 4.0,
    starsCount: 4
  },
  {
    image: "/images/t-8.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    oldPrice: 299,
    orders : 154,
    rating: 4.0,
    starsCount: 4
  },
  {
    image: "/images/watch.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    oldPrice: 299,
    orders : 154,
    rating: 4.0,
    starsCount: 4
  },
  {
    image: "/images/phone.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    oldPrice: 299,
    rating: 4.0,
    orders : 154,
    starsCount: 4
  },
  {
    image: "/images/phone.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    oldPrice: 299,
    orders : 154,
    rating: 4.0,
    starsCount: 4
  }
];

const updatePrice = (newPriceRange) => {
  setFilters(prev => ({ ...prev, price: newPriceRange }));
};




function GridView() {
  const [expanded, setExpanded] = useState(false);
  const [showAllCat, setShowAllCat] = useState(false);

  const [showAllBrands, setshowAllBrands] = useState(false);
  const [expandedBrand, setexpandedBrands] = useState(false);

  const [showAllFeatures, setshowAllFeatures] = useState(false);
  const [expandedFeatures, setexpandedFeatures] = useState(false);

  const [showConditions, setshowConditions] = useState(false);
  const [showRating, setShowRating] = useState(false);

  const [showPricing, setshowPricing] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 999999]);

  const [showfeatured, setshowfeatured] = useState(false);
  const [selectedFeature, setselectedFeature] = useState('Featured');

  const [showgrid, setshowgrid] = useState(true);
  const [showlist, setshowlist] = useState(false);

  const getVisibleBrands = () => {
    if (!expandedBrand) return [];
    return showAllBrands ? brands : brands.slice(0, 3);
  }

  const getVisibleCategories = () => {
    if (!expanded) return [];
    return showAllCat ? categories : categories.slice(0, 3);
  };

  const getVisibleFeatures = () => {
    if (!expandedFeatures) return [];
    return showAllFeatures ? features : features.slice(0, 3);
  };

  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    brands: [],
    features: [],
    priceRange: [0, 999999],
    condition: null,
    rating: [],
  });

  const filteredProducts = products.filter(prod => {
    const matchCategory = selectedFilters.categories.length === 0 || selectedFilters.categories.includes(prod.category);
    const matchBrand = selectedFilters.brands.length === 0 || selectedFilters.brands.includes(prod.brand);
    const matchFeature = selectedFilters.features.length === 0 || selectedFilters.features.every(f => prod.features.includes(f));
    const matchRating = selectedFilters.rating.length === 0 || selectedFilters.rating.some(r => prod.starsCount >= r);
    const matchCondition = !selectedFilters.condition || prod.condition === selectedFilters.condition;
    const matchPrice = prod.price >= selectedFilters.priceRange[0] && prod.price <= selectedFilters.priceRange[1];

    return matchCategory && matchBrand && matchFeature && matchRating && matchCondition && matchPrice;
  });





  return (
    <div className='max-w-7xl mx-auto mt-6 flex flex-col items-start  gap-2 px-4 '>

      <p className='text-stone-400 text-lg font-light mb-3  flex gap-2 items-center'>
        Home  <PiGreaterThanBold/>  Clothing  <PiGreaterThanBold/>  Men's Wear  <PiGreaterThanBold/>  Summer Clothing
      </p>

      {/* Below 2 panels */}
      <div className='flex items-start p-2 w-full justify-between gap-2'>

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
                  setSelectedFilters(prev => ({
                    ...prev,
                    categories: prev.categories.includes(cat)
                      ? prev.categories.filter(c => c !== cat)
                      : [...prev.categories, cat]
                  }));
                }}

                className='text-stone-400 text-lg pb-2 cursor-pointer'>
                {cat}
              </p>
            ))}
            {expanded && !showAllCat && (
              <button onClick={() => setShowAllCat(true)} className="text-blue-600 text-lg  mt-2">
                Show more
              </button>
            )}
          </div>

          {/* BRANDS */}
          <div className='border-t border-gray-300 pt-2 mb-4'>
            <div className='flex items-center justify-between mb-2'>
              <p className='text-xl font-medium'>Brands</p>
              {expandedBrand ?
                <IoIosArrowUp onClick={() => { setshowAllBrands(false); setexpandedBrands(false); }} className='text-lg text-stone-400 cursor-pointer' />
                : <IoIosArrowDown onClick={() => { setexpandedBrands(true); }} className='text-lg text-stone-400 cursor-pointer' />}
            </div>
            {getVisibleBrands().map((brand, i) => (
              <label key={i} className='flex items-center   text-lg gap-2 text-stone-400'>
                <input type="checkbox" onChange={(e) => {
                  const checked = e.target.checked;
                  setSelectedFilters(prev => ({
                    ...prev,
                    brands: checked
                      ? [...prev.brands, brand]
                      : prev.brands.filter(b => b !== brand)
                  }));
                }}
                  className='w-5 h-5 text-stone-500  accent-stone-500' />
                <span>{brand}</span>
              </label>
            ))}
            {expandedBrand && !showAllBrands && (
              <button onClick={() => setshowAllBrands(true)} className="text-blue-600 text-lg mt-2">
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
            {getVisibleFeatures().map((feature, i) => (
              <label key={i} className='flex items-center text-stone-400  text-lg gap-2 '>
                <input type="checkbox" onChange={(e) => {
                  const checked = e.target.checked;
                  setSelectedFilters(prev => ({
                    ...prev,
                    features: checked
                      ? [...prev.features, feature]
                      : prev.features.filter(f => f !== feature)
                  }));
                }}
                  className='w-5 h-5 text-stone-500  accent-stone-500' />
                <span>{feature}</span>
              </label>
            ))}
            {expandedFeatures && !showAllFeatures && (
              <button onClick={() => setshowAllFeatures(true)} className="text-blue-600 text-lg mt-2">
                Show more
              </button>
            )}

          </div>

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
                    onChange={(values) => {
                      setPriceRange(values);
                      setSelectedFilters(prev => ({
                        ...prev,
                        priceRange: values
                      }));
                    }}

                    renderTrack={({ props, children }) => (
                      <div {...props} className="h-1 bg-blue-200 w-3/4  rounded-md">{children}</div>
                    )}
                    renderThumb={({ props }) => (
                      <div {...props} className="h-4 w-4 bg-blue-500 rounded-full shadow" />
                    )}
                  />
                </div>

                <div className='flex gap-2 mt-4 mb-2 mr-2'>
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

                <button className='text-center text-lg  w-full px-4 py-2  border  border-stone-300 text-blue-500 font-semibold rounded'>Apply</button>
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
                <input type="radio" onChange={() => {
                  setSelectedFilters(prev => ({
                    ...prev,
                    condition: c
                  }));
                }}
                  name="condition" className='w-5 h-5 text-stone-500 accent-stone-500' />
                <span>{c}</span>
              </label>
            ))}
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
                <input type="checkbox" onChange={(e) => {
                  const checked = e.target.checked;
                  setSelectedFilters(prev => ({
                    ...prev,
                    rating: checked
                      ? [...prev.rating, stars]
                      : prev.rating.filter(r => r !== stars)
                  }));
                }}
                  className='m-2 w-5 h-5 text-stone-500 accent-stone-500 ' />
                <span className='flex items-center'>
                  {Array.from({ length: 5 }, (_, i) =>
                    i < stars ? (<MdStar className='text-2xl' key={i} />) : (<MdOutlineStarOutline className='text-2xl' key={i} />))}
                </span>
              </label>
            ))}
          </div>

        </div>

        {/* ---------- RIGHT PANEL ---------- */}
        <div className='w-3/4'>


          <div className='mb-3  flex justify-between items-center p-3 rounded w-full border border-stone'>

            <p className='text-lg text-gray-700'>12,911 items in <span className='font-bold'>Mobile accessory</span></p>

            <div className='flex items-center gap-3 justify-between'>

              <div className='flex items-center gap-2'>
                <input type="checkbox" className='w-4 h-4 cursor-pointer text-stone-500 accent-stone-500' />
                <p className='text-lg text-stone-500'>Verified Only</p>
              </div>

              <div onClick={() => { setshowfeatured(!showfeatured) }} className="flex gap-2 items-center h-5 cursor-pointer relative border border-stone-400 rounded py-4 px-2 ">
                <a href="#" className='text-stone-500'>{selectedFeature}</a>
                {showfeatured ? <IoIosArrowUp className="text-stone-400 text-lg" /> : <IoIosArrowDown className="text-stone-400 text-lg" />}
                {showfeatured &&
                  <ul className="absolute top-full mt-2 left-2 z-10 w-40 bg-white font-normal border border-gray-300 rounded shadow-md">
                    {features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="px-4 py-2 hover:bg-blue-100 text-sm cursor-pointer"
                        onClick={() => setselectedFeature(feature)}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                }
              </div>

              <div className='flex items-stretch cursor-pointer gap-1 text-2xl border border-stone-400 p-1 rounded'>
                <IoGrid className='pr-1 border-r border-stone-400' onClick={() => { setshowgrid(true); setshowlist(false); }} />
                <ImMenu className='pl-1' onClick={() => { setshowlist(true); setshowgrid(false); }} />
              </div>
            </div>

          </div>

          {/* applied filters by user */}

          {Object.values(selectedFilters).some(v => (Array.isArray(v) ? v.length : v)) && (

            <div className='flex flex-wrap gap-2 items-center mb-4'>
              {/* Category */}
              {selectedFilters.categories.map((cat, idx) => (
                <span key={idx} className='border px-2 py-1 rounded-md bg-white text-stone-400 border-blue-400 flex items-center gap-2'>
                  {cat}
                  <button onClick={() => {
                    setSelectedFilters(prev => ({
                      ...prev,
                      categories: prev.categories.filter(c => c !== cat)
                    }));
                  }}>✕</button>
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
                  }}>✕</button>
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
                  }}>✕</button>
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
                  }}>✕</button>
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
                  }}>✕</button>
                </span>
              )}

              {/* Clear all */}
              <button onClick={() => {
                setSelectedFilters({
                  categories: [],
                  brands: [],
                  features: [],
                  priceRange: [0, 999999],
                  condition: null,
                  rating: [],
                });
                setPriceRange([0, 999999]);
              }} className='text-blue-500 ml-4 '>
                Clear all filter
              </button>

            </div>
          )}

          {showgrid &&

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {filteredProducts.map((prod, i) => (
                <div key={i} className='border border-stone-200 rounded-md shadow-sm p-4'>
                  <div className='bg-white mb-4'>
                    <img src={prod.image} alt="img" className='w-full h-48 object-contain rounded' />
                  </div>
                  <div className='flex items-center justify-between'>
                    <p className='text-xl font-medium'>${prod.price} <span className='line-through text-sm text-stone-400 ml-2'>${prod.oldPrice}</span></p>
                    <span className='border border-stone-200 rounded p-2'><FaRegHeart className='text-xl text-blue-500' /></span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <label key={prod.starsCount} className='flex items-center gap-2 text-yellow-600'>
                      <span className='flex items-center'>
                        {Array.from({ length: 5 }, (_, i) =>
                          i < prod.starsCount ? (<MdStar className='text-lg' key={i} />) : (<MdOutlineStarOutline className='text-lg' key={i} />))}
                      </span>
                    </label>
                    <p className='text-yellow-500'>({prod.rating})</p>
                  </div>

                  <p className='text-gray-600 mt-1'>{prod.description}</p>
                </div>
              ))}
            </div>

          }

          {showlist &&
            <div className='flex flex-col gap-3'>
              {filteredProducts.map((prod, i) => (
                <div key={i} className='flex items-start gap-4 border border-stone-200 rounded-md shadow-sm p-4 bg-white'>

                  <div className='flex-shrink-0 bg-white'>
                    <img src={prod.image} alt="img" className='w-full h-48 object-contain rounded' />
                  </div>

                  <div className='flex flex-col  flex-grow'>

                    <div className='flex justify-between items-start'>
                      <h3 className='text-lg font-medium text-gray-800'>{prod.name}</h3>
                      <button className='border rounded p-1 hover:bg-blue-50'>
                        <FaRegHeart className='text-2xl  text-blue-500' />
                      </button>
                    </div>

                    <div className='flex items-center gap-2 mt-1'>
                      <p className='text-xl font-semibold text-black'>${prod.price}</p>
                      <p className='line-through text-stone-400 text-lg'>${prod.oldPrice}</p>
                    </div>

                    <div className='flex items-center gap-2 mt-1'>
                      <div className='flex text-yellow-600 text-xl'>
                        {Array.from({ length: 5 }, (_, i) =>
                          i < prod.starsCount ? <MdStar key={i} /> : <MdOutlineStarOutline key={i} />
                        )}
                      </div>
                      <p className='text-lg text-yellow-500'>{prod.rating}</p>
                      <p className='flex font-light items-center  text-gray-400'><GoDotFill/> {prod.orders} orders</p>
                      <p className='flex font-light items-center text-green-500'><GoDotFill/> Free Shipping</p>
                    </div>

                    <p className='text-sm text-gray-600 mt-2'>{prod.description}</p>

                    <a href='#' className='text-blue-500 mt-2 text-sm font-medium'>
                      View details
                    </a>
                  </div>
                </div>

              ))}
            </div>


          }

          {/* Pagination */}

          <div className='flex justify-end gap-4 items-center mt-6'>

            <select className='border px-3 py-1 rounded-md cursor-pointer text-stone-400 outline-none p-6'>
              <option>Show 10 <IoIosArrowUp /></option>
              <option>Show 20</option>
              <option>Show 50</option>
            </select>

            <div className='flex gap-2 items-center'>
              <button className='px-3 py-1 border rounded-md text-stone-500'>
                <MdChevronLeft className='text-xl' />
              </button>

              <button className='px-3 py-1 border rounded-md bg-blue-100 text-blue-700 font-semibold'>1</button>
              <button className='px-3 py-1 border rounded-md text-stone-500'>2</button>
              <button className='px-3 py-1 border rounded-md text-stone-500'>3</button>

              <button className='px-3 py-1 border rounded-md text-stone-500'>
                <MdChevronRight className='text-xl' />
              </button>
            </div>


          </div>

        </div>

      </div>

    </div >
  );
}

export default GridView;
