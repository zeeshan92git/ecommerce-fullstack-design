import React, { useState, useEffect, useContext } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { PiGreaterThanBold } from "react-icons/pi";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { MdStar, MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { RiSpeakFill } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import RelatedProducts from '../components/relatedproduct';
import Navbar from '../components/navbar.jsx';
import MobileNavbar from '../components/mobile-navbar.jsx';
import { FaGreaterThan } from "react-icons/fa6";
import { AppContext } from '../context/AppContext.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SavedForLaterContext } from "../context/savedForLaterContext.jsx";
import { FaHeart } from "react-icons/fa";

const tabs = ['Description', 'Reviews', 'Shipping', 'About Seller'];

function ProductDeatils() {

    const [product, setProduct] = useState(() => {
        // Load from localStorage immediately
        const stored = localStorage.getItem("selectedProduct");
        return stored ? JSON.parse(stored) : null;
    });

    const { productsData, backEndURL, token } = useContext(AppContext);
    console.log("backendurl and token at prod-details\n", backEndURL, token);
    
    const { toggleSaveItem } = useContext(SavedForLaterContext);
    const [saveditem , setSavedItem] = useState(false);
    const productSaved = () => {
        toast.success("Product saved for later.");
    }

    const mayLikeProducts = productsData.filter(p => p.tag === "Menu Items").slice(0, 4);
    const navigate = useNavigate();
    const [instock, setinstock] = useState(true);
    const [activeTab, setActiveTab] = useState('Description');

    const [ReadMore, setReadMore] = useState(false);
    const [showReadMore, setshowReadMore] = useState(true);

    const addToCart = async (productId) => {
        if (!token) {
            toast.warn('Login to add items to cart');
            return navigate('/login');
        }
        try {
            const { data } = await axios.post(backEndURL + '/api/cart/add', { productId: productId, quantity: 1 }, { headers: { token } });
            console.log(data);
            if (data.success) {
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            // console.log(error.message);
            toast.error("Failed to add to cart");
        }
    };

    useEffect(() => {
        if (!product) {
            const stored = localStorage.getItem("selectedProduct");
            if (stored) {
                setProduct(JSON.parse(stored));
            }
        }
    }, []);

    if (!product) return <p className='m-6 text-stone-500 text-lg'>Loading product...</p>;

    return (
        <>
            <Navbar cart={false} />
            <div className='max-w-7xl sm:mx-24 mx-8 mt-4'>
                <p className='text-stone-400 text-[18px] font-normal mb-6 sm:flex hidden gap-2 items-center'>
                    Home  <PiGreaterThanBold /> Categories <PiGreaterThanBold />  {product.category.name} <PiGreaterThanBold /> {product.name}
                </p>

                {/* 1. product img details shipping */}
                <div className='sm:flex items-start gap-2 justify-between sm:border sm:border-gray-300 sm:p-4  sm:rounded'>

                    {/* image  desktop*/}
                    <div className='hidden sm:flex flex-col gap-8 w-1/4 p-4'>
                        <div className='border border-gray-300 rounded w-64 h-72 '>
                            <img src={product?.image} alt={product?.name} className='w-full h-full object-cocver rounded' />
                        </div>
                    </div>

                    {/* mobile-view-product-img */}
                    <div className='sm:hidden flex flex-col gap-4'>
                        <MobileNavbar showBackArrow={true} categoryName={''} route="/product-list" showSelection={false} />

                        {/* image mobile*/}
                        <div className='border border-stone-300  w-full h-48  rounded-md'>
                            <img src={product?.image} alt={product?.name} className='w-full h-full object-cover rounded-md' />
                        </div>
                        {/* product details buttons */}
                        <div className='flex flex-col gap-4 mt-4'>
                            {/* 1. */}
                            <div className='flex items-center gap-1 flex-wrap'>

                                <div className='flex items-center gap-0'>
                                    {Array.from({ length: 5 }, (_, i) =>
                                        i < product?.starsCount
                                            ? <MdStar className='text-[16px] text-yellow-500' key={i} />
                                            : <MdOutlineStarOutline className='text-lg text-yellow-500' key={i} />
                                    )}
                                </div>

                                <div className='flex items-center gap-1'>
                                    <GoDotFill className='text-sm text-stone-400' />
                                    <MdOutlineMessage className='text-[15px] text-stone-400' />
                                    <span className='text-[15px] text-stone-400'>{product?.reviews.length} reviews</span>
                                </div>

                                <div className='flex items-center gap-1'>
                                    <GoDotFill className='text-sm text-stone-400' />
                                    <MdOutlineShoppingBasket className='text-[15px] text-stone-400' />
                                    <span className='text-[15px] text-stone-400'>{product.starsCount} orders</span>
                                </div>

                            </div>
                            {/* 2. */}
                            <p className='text-lg font-bold text-stone-800 w-full whitespace-normal'>{product.name}</p>
                            <p className=' flex items-center gap-2 text-lg font-bold text-red-600'>$ {product.stock[0]} <span className='font-normal text-[15px] text-stone-400'>(50-100 pcs)</span></p>
                            {/* 3. */}
                            <div className='flex items-center gap-2 justify-between'>
                                <button className='w-11/12 bg-blue-500 px-4 py-2 text-white rounded-md'>Send inquiry</button>
                                <span className='border border-stone-300 rounded-md text-blue-500  p-2'><FaRegHeart className='text-lg' /></span>
                            </div>
                            {/* 4. product details*/}
                            <div className="flex flex-col  text-lg text-gray-600">
                                {/* Price */}
                                <div className='border-b border-stone-400 w-full flex justify-between items-start pb-2'>
                                    <p className='text-[15px] text-stone-400 min-w-[120px]'>Price:</p>
                                    <p className='text-[15px] text-gray-600'>Negotiable</p>
                                </div>
                                {/* type section */}
                                {product?.attributes && (
                                    <div className='w-full space-y-2 pb-2'>
                                        {Object.entries(product.attributes).map(([key, value], i) => (
                                            <div key={i} className={`flex justify-between items-start ${i === 2 ? 'border-b border-b-stone-400 pb-2' : 'border-b-0'}`}>
                                                <p className='text-[15px] text-stone-400 min-w-[120px] capitalize'>{key}:</p>
                                                <p className='text-[15px] text-gray-600'>{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {/* Description  */}
                                <p className="mt-2 text-[15px] text-gray-600">
                                    {product.description?.summary || "No description available."}
                                    {ReadMore && (
                                        <span>{product.description?.details}</span>
                                    )}
                                </p>
                                {/* Read More */}
                                {showReadMore &&
                                    <button className="text-blue-500 self-center text-xs font-medium mt-1" onClick={() => { setReadMore(true); setshowReadMore(false); }}>Read more...</button>
                                }
                                {/* Read Less */}
                                {!showReadMore &&
                                    < button className="text-stone-500 self-center text-xs font-medium mt-1 " onClick={() => { setReadMore(false); setshowReadMore(true); }}>Read less</button>
                                }
                            </div>
                            {/* 5. AddtoCart */}
                            <div className='self-center'>
                                <button onClick={() => { addToCart(product._id); window.scrollTo({ top: 0, behavior: "smooth" }) }} className='text-white text-[15px] font-medium bg-green-600 px-10 py-2 border rounded-full border-green-600 hover:bg-green-500 hover:border-green-500 '>
                                    Add to Cart
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* central product detail section */}
                    <div className='hidden sm:flex flex-col items-start gap-1 w-1/2  p-4'>
                        {instock ? <span className='flex gap-2 items-center text-green-500 font-medium text-lg'> <IoCheckmark className='text-green-500 text-3xl ' /> In stock</span> : <RxCross2 className='text-red-500 text-lg ' />}

                        <p className='text-xl font-bold whitespace-normal w-11/12'>{product.name}</p>
                        {/* rating and sold */}
                        <div className='flex items-center gap-2 flex-wrap'>

                            <div className='flex items-start justify-between gap-1'>
                                {Array.from({ length: 5 }, (_, i) =>
                                    i < product.starsCount
                                        ? <MdStar className='text-lg text-yellow-500' key={i} />
                                        : <MdOutlineStarOutline className='text-lg text-yellow-500' key={i} />
                                )}
                                <span className='text-yellow-400 text-sm'>({product.rating})</span>
                            </div>

                            <GoDotFill className='text-sm text-stone-300' />
                            <MdOutlineMessage className='text-2xl text-stone-400' />
                            <span className='text-lg text-stone-400'>{product.reviews.length} reviews</span>

                            <GoDotFill className='text-sm text-stone-300' />
                            <MdOutlineShoppingBasket className='text-2xl text-stone-400' />
                            <span className='text-lg text-stone-400'>{product.starsCount} sold</span>
                        </div>
                        {/* stock pieces info */}
                        <div className='flex items-center w-full bg-red-100 rounded p-2'>

                            <div className='w-1/3 flex flex-col gap-1 border-r border-stone-300 p-1'>
                                <p className='text-xl text-red-500 font-bold'>$ {product.stock[0]}</p>
                                <p className='text-sm text-stone-400'>50-100 pcs</p>
                            </div>

                            <div className='w-1/3 flex flex-col gap-1 border-r border-stone-300 p-1'>
                                <p className='text-xl text-red-500 font-bold'>$ {product.stock[1]}</p>
                                <p className='text-sm text-stone-400'>100-700 pcs</p>
                            </div>

                            <div className='w-1/3 flex flex-col gap-1 p-1'>
                                <p className='text-xl text-red-500 font-bold'>$ {product.stock[2]}</p>
                                <p className='text-sm text-stone-400'>700+ pcs</p>
                            </div>

                        </div>
                        {/* attributes info */}
                        <div className='space-y-4 w-full'>
                            {/* Price */}
                            <div className='border-b border-stone-400 w-full flex justify-between items-start pb-2'>
                                <p className='text-lg text-stone-400 min-w-[120px]'>Price:</p>
                                <p className='text-lg text-gray-600'>Negotiable</p>
                            </div>
                            {/* Type Section */}
                            {product.attributes && (
                                <div className='w-full space-y-2 pb-2'>
                                    {Object.entries(product.attributes).map(([key, value], i) => (
                                        <div key={i} className={`flex justify-between items-start ${i === 2 ? 'border-b border-b-stone-400 pb-2' : 'border-b-0'}`}>
                                            <p className='text-lg text-stone-400 min-w-[120px] capitalize'>{key}:</p>
                                            <p className='text-lg text-gray-600'>{value}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>

                    {/* supplier info and details  addtoCart*/}
                    <div className='hidden sm:flex w-1/4 flex-col gap-8  '>

                        <div className='border border-gray-300 p-4 rounded '>
                            <div className='flex items-center gap-2'>
                                <div className='bg-sky-200 text-sky-400 p-2 w-14 h-14 text-center text-2xl font-bold rounded'>
                                    <span>{product?.supplierName?.charAt(0)}</span>
                                </div>
                                <p className='text-xl font-medium '>{product?.supplierName}</p>
                            </div>

                            <div className='flex items-center gap-4'>
                                <img src="https://flagcdn.com/us.svg" alt="flag" className='w-6 h-4 object-cover rounded-sm' />
                                <p className='text-lg text-stone-400'>Germany, Berlin</p>
                            </div>

                            <div className='flex items-center gap-4'>
                                <MdOutlineVerifiedUser className='text-2xl text-stone-400' />
                                <p className='text-lg text-stone-400 font-normal'>Verified Seller</p>
                            </div>

                            <div className='flex items-center gap-4'>
                                <TbWorld className='text-2xl text-stone-400' />
                                <p className='text-lg text-stone-400 font-normal'>Worldwide Shipping</p>
                            </div>

                            <div className='flex flex-col gap-2 mt-4'>
                                <button
                                    onClick={() => navigate('/', { state: { scrollToInquiry: true } })}
                                    className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 font-medium'>
                                    Send inquiry
                                </button>
                                <button className='bg-white text-blue-500 px-4 py-2 border border-stone-300 font-medium rounded-md hover:bg-blue-500 hover:text-white'>Seller's profile</button>
                            </div>

                        </div>

                        <div
                            onClick={() => { toggleSaveItem(product); productSaved(); setSavedItem(true);}}
                            className='mt-4 text-blue-500 flex cursor-pointer items-center gap-2 self-center text-lg font-medium'>
                            {saveditem ? (<FaHeart className='text-2xl' />) :(<FaRegHeart className='text-2xl' />)}
                            <p>Save for later</p>
                        </div>

                        <div className='self-center' onClick={() => addToCart(product._id)}>
                            <button className='text-white text-xl font-medium bg-green-500 px-12 py-2 border rounded-full border-green-500 hover:bg-green-600 hover:border-green-600 '>Add to Cart</button>
                        </div>
                    </div>


                    {/* Mobile view supplier info & details */}
                    <div className='sm:hidden flex flex-col items-stretch w-full border border-stone-300 rounded-md p-2 mt-4'>

                        <div className='flex items-center justify-between border-b border-stone-300 pb-2'>
                            <div className='flex items-center gap-2'>
                                <div className='bg-sky-200 text-sky-400 p-2 w-14 h-14 text-center text-2xl  font-bold rounded'>
                                    <span>{product?.supplierName.charAt(0)}</span>
                                </div>
                                <p className='text-[15px] font-medium'>{product?.supplierName}</p>
                            </div>
                            <span className='text-stone-400'><FaGreaterThan className='text-lg' /></span>
                        </div>

                        <div className='flex items-center gap-3 mt-2 w-full'>

                            <div className='flex items-center gap-2'>
                                <img src="https://flagcdn.com/us.svg" alt="flag" className='w-5 h-4 object-cover rounded-sm' />
                                <p className='text-[15px] text-stone-400'>Germany</p>
                            </div>

                            <div className='flex items-center gap-2'>
                                <MdOutlineVerifiedUser className='text-lg text-stone-400' />
                                <p className='text-[15px] text-stone-400 font-normal'>Verified</p>
                            </div>

                            <div className='flex items-center gap-2'>
                                <TbWorld className='text-lg text-stone-400' />
                                <p className='text-[15px] text-stone-400 font-normal'>Shipping</p>
                            </div>

                        </div>

                    </div>

                </div>

                {/* 2. Related products and  shop now section */}
                <RelatedProducts category={product.category.name} setProduct={setProduct} />

                {/* 3. may like and full description */}
                <div className='hidden sm:flex items-start gap-2 mt-4'>
                    {/* description reviews shipping seller info */}
                    <div className='w-10/12 border border-stone-300  rounded-md  flex flex-col items-start'>

                        <div className='w-full flex items-center text-lg gap-4 border-b  border-stone-300 px-4 mb-4'>
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-2 pt-2 transition-colors duration-200 ${activeTab === tab
                                        ? 'border-b-2 border-blue-500 text-blue-500 font-medium'
                                        : 'text-stone-400 hover:text-blue-500'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* description */}
                        {activeTab === 'Description' &&
                            <div className='flex flex-col items-start gap-2 p-4 w-full'>

                                <div className='text-stone-500 text-[18px] font-normal whitespace-normal w-full'>
                                    <p className='flex items-center gap-2'><GoDotFill />{product.description.summary}</p>
                                    <p className='flex items-center gap-2'><GoDotFill />{product.description.details}</p>
                                </div>
                                {product.attributes &&
                                    <div className='flex flex-col gap-2 items-start mt-2 w-full'>
                                        {Object.entries(product.attributes).map(([key, value], i) => (
                                            <div
                                                key={i}
                                                className='flex w-3/4 border border-stone-300 rounded overflow-hidden'
                                            >
                                                <div className='w-1/4 bg-stone-200 border-r border-stone-300 p-2'>
                                                    <p className='text-[16px] text-stone-500 font-medium'> {key.charAt(0).toUpperCase() + key.slice(1)}</p>
                                                </div>
                                                <div className='w-1/2 p-2'>
                                                    <p className='text-[16px] text-gray-700'>{value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                }
                            </div>
                        }

                        {/* reviews */}
                        {activeTab === 'Reviews' &&
                            <div className='flex flex-col items-start gap-2 p-4 w-full'>
                                <div className='w-full border border-gray-300 rounded-md p-4'>
                                    <p className='text-[22px] font-bold text-stone-600 mb-2'>Customer Reviews</p>
                                    <div className='flex items-center gap-2 mb-2'>
                                        {Array.from({ length: 5 }, (_, i) =>
                                            i < product.starsCount
                                                ? <MdStar className='text-2xl text-yellow-500' key={i} />
                                                : <MdOutlineStarOutline className='text-2xl text-yellow-500' key={i} />
                                        )}
                                        <span className='text-yellow-500 text-lg'>( {product.rating} out of 5 )</span>
                                    </div>

                                    {product.reviews.map((review, index) => (
                                        <div key={index} className='mb-4'>
                                            <p className='text-lg font-normal text-gray-600 flex items-center gap-4'> <RiSpeakFill className='text-stone-400 text-[22px]' />“{review.review}”</p>
                                            <p className='text-[20px] font-medium text-gray-500 mt-1 flex items-center gap-4'><IoPersonSharp className='text-green-500 text-[22px]' /> {review.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }

                        {/* seller */}
                        {activeTab === 'About Seller' &&
                            <div className='flex flex-col gap-2 items-start mt-2 p-4 w-full'>
                                {Object.entries(product.sellerDetails).map(([key, value], indx) => (
                                    <div
                                        key={indx}
                                        className='flex w-3/4 border border-stone-300 rounded overflow-hidden'
                                    >
                                        <div className='w-1/4 bg-stone-200 border-r border-stone-300 p-2'>
                                            <p className='text-[16px] text-stone-500 font-medium'> {key.charAt(0).toUpperCase() + key.slice(1)}</p>
                                        </div>
                                        <div className='w-1/2 p-2'>
                                            <p className='text-[16px] text-gray-700'>{value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }

                        {/* shipping */}
                        {activeTab === 'Shipping' &&
                            <div className='flex flex-col gap-2 items-start mt-2 w-full p-4'>
                                {Object.entries(product.shipping).map(([key, value], i) => (
                                    <div
                                        key={i}
                                        className='flex w-3/4 border border-stone-300 rounded overflow-hidden'
                                    >
                                        <div className='w-1/4 bg-stone-200 border-r border-stone-300 p-2'>
                                            <p className='text-[16px] text-stone-500 font-medium'> {key.charAt(0).toUpperCase() + key.slice(1)}</p>
                                        </div>
                                        <div className='w-1/2 p-2'>
                                            <p className='text-[16px] text-gray-700'>
                                                {String(value) === 'true' ? 'Yes' : String(value) === 'false' ? 'No' : value}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        }

                    </div>

                    {/* you may like products */}
                    <div className='w-full sm:w-1/5 p-4 border border-stone-300 bg-white rounded-md flex flex-col'>
                        <p className='font-semibold sm:text-xl text-lg mb-2 text-gray-800'>You may like</p>

                        {mayLikeProducts.map((prod, i) => (
                            <div key={i}
                                className='flex items-start gap-4 mb-4 cursor-pointer hover:bg-stone-300  rounded transition'
                                onClick={() => {
                                    setProduct(prod);
                                    localStorage.setItem("selectedProduct", JSON.stringify(prod));
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                            >
                                <div className='w-24 h-20 rounded border border-stone-300 overflow-hidden'>
                                    <img
                                        src={prod.image}
                                        alt={prod.name}
                                        className='w-full h-full object-cover rounded'
                                    />
                                </div>

                                <div className='flex flex-col justify-between'>
                                    <p className='font-medium text-sm text-gray-800 line-clamp-2'>{prod.name}</p>
                                    <span className='text-sm text-stone-500 font-semibold mt-1'>$ {prod.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div >

        </>
    )
}

export default ProductDeatils;
