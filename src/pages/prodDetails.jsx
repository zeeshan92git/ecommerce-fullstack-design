import React, { useState } from 'react'
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
import { TbMathGreater } from "react-icons/tb";
import Navbar from '../components/navbar.jsx';
import MobileNavbar from '../components/mobile-navbar.jsx';

const products = [
    {
        image: '/images/t-2.jpeg',
        name: 'Xiaomi Redmi 8 Original',
        price: '$32.00-$40.00',
    },
    {
        image: '/images/t-6.jpeg',
        name: 'Xiaomi Redmi 8 Original',
        price: '$32.00-$40.00',
    },
    {
        image: '/images/t-2.jpeg',
        name: 'Xiaomi Redmi 8 Original',
        price: '$32.00-$40.00',
    },
    {
        image: '/images/t-6.jpeg',
        name: 'Xiaomi Redmi 8 Original',
        price: '$32.00-$40.00',
    }
];

const product = {
    image: "/images/phone.jpeg",
    name: "Men's Long Sleeve T-shirt Cotton Base Layer Slim Muscle",
    description: "Latest iPhone with A15 Bionic chip and improved battery life.",
    price: 98.00,
    oldPrice: 899,
    orders: 154,
    rating: 4.7,
    reviews: 32,
    starsCount: 3
};

const features = [
    'Some great Fetures name Here',
    'Some great Fetures name Here',
    'Some great Fetures name Here',
    'Some great Fetures name Here'
]

const specs = [
    { Model: '#878687' },
    { Style: 'Classic Style' },
    { Certificate: 'ISO-6464990' },
    { Size: '34mm x 450mm x 19mm' },
    { Memory: '36GB RAM' }
];

const reviews = [
    {
        name: 'Ali Raza, Lahore',
        comment: 'Great quality product, delivery was fast and packaging was excellent. Will buy again!'
    },
    {
        name: 'Hina Khan, Islamabad',
        comment: 'The item matched the description perfectly. Highly satisfied with the purchase.'
    },
    {
        name: 'Usman Tariq, Karachi',
        comment: 'Good value for money. Delivery was slightly delayed but overall great experience.'
    }
];

const shippingInfo = [
    { 'Delivery Time': '3–5 business days' },
    { 'Shipping Provider': 'TCS / Leopard Courier' },
    { 'Shipping Cost': 'Free for orders over PKR 1,500' },
    { 'Tracking Available': 'Yes' }
];

const sellerInfo = [
    { 'Name': 'Zeeshan Traders' },
    { 'Location': 'Karachi, Pakistan' },
    { 'Experience': '5+ years in e-commerce' },
    { 'Response Time': 'Within 2 hours' }
];

const tabs = ['Description', 'Reviews', 'Shipping', 'About Seller'];





function ProductDeatils() {

    const [instock, setinstock] = useState(true);
    const [activeTab, setActiveTab] = useState('Description');
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 1;
    const visibleProducts = products.slice(currentIndex, currentIndex + itemsToShow);
    const next = () => {
        if (currentIndex + itemsToShow < products.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    const [ReadMore, setReadMore] = useState(false);
    const [showReadMore, setshowReadMore] = useState(true);
    
    return (
        <>
            <Navbar/>        
            <div className='max-w-7xl sm:mx-24 mx-8 mt-4'>
                <p className='text-stone-400 text-[16px] font-normal mb-6 sm:flex hidden gap-2 items-center'>
                    Home  <PiGreaterThanBold />  Clothing  <PiGreaterThanBold />  Men's Wear  <PiGreaterThanBold />  Summer Clothing
                </p>
                {/* 1. product img details shipping */}
                <div className='sm:flex items-start gap-2 justify-between sm:border sm:border-gray-300 sm:p-4  sm:rounded'>

                    {/* image and small img's left panel */}
                    <div className='hidden sm:flex flex-col w-1/4 p-2'>
                        <div className='border border-gray-300 p-4 rounded '>
                            <img src="/images/t-2.jpeg" alt="img" className='w-full h-full object-contain rounded' />
                        </div>

                        <div className='flex items-center justify-center mt-4 gap-2'>
                            <div className='w-24 h-20 bg-white p-2 border border-stone-300 mt-4 rounded'>
                                <img src="/images/t-2.jpeg" alt="img" className='w-full h-full object-contain rounded-md' />
                            </div>
                            <div className='w-24 h-20 bg-white p-2 border border-stone-300 mt-4 rounded'>
                                <img src="/images/t-2.jpeg" alt="img" className='w-full h-full object-contain rounded-md' />
                            </div>
                            <div className='w-24 h-20 bg-white p-2 border border-stone-300 mt-4 rounded'>
                                <img src="/images/t-2.jpeg" alt="img" className='w-full h-full object-contain rounded-md' />
                            </div>
                            <div className='w-24 h-20 bg-white p-2 border border-stone-300 mt-4 rounded'>
                                <img src="/images/t-2.jpeg" alt="img" className='w-full h-full object-contain rounded-md' />
                            </div>
                        </div>
                    </div>

                    {/* mobile-view-product-img */}
                    <div className='sm:hidden flex flex-col gap-4'>
                        <MobileNavbar showBackArrow={true} categoryName="" />

                        {/* images crousel */}
                        <div className='relative w-full mb-4 mt-4 bg-gray-100 py-1 rounded-md'>
                            <div className='flex gap-4  items-center justify-center'>
                                {visibleProducts.map((p, i) => (
                                    <div key={i} className='w-48 h-48 flex-shrink-0 bg-white py-2 border rounded-md'>
                                        <img src={p.image} alt={p.name} className='w-full h-full object-contain' />
                                    </div>
                                ))}
                            </div>

                            {/* Arrows */}
                            <div className='absolute bottom-2 border border-stone-300 right-2 flex gap-2 bg-stone-300 opacity-90 p-1 rounded-full shadow'>
                                <button onClick={prev} disabled={currentIndex === 0}
                                    className={`text-2xl ${currentIndex === 0 ? 'text-gray-400' : 'text-gray-700 hover:text-black'}`}>
                                    <IoIosArrowBack />
                                </button>
                                <button onClick={next} disabled={currentIndex + itemsToShow >= products.length}
                                    className={`text-2xl ${currentIndex + itemsToShow >= products.length ? 'text-gray-400' : 'text-gray-700 hover:text-black'}`}>
                                    <IoIosArrowForward />
                                </button>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 mt-4'>
                            {/* 1. */}
                            <div className='flex items-center gap-1 flex-wrap'>

                                <div className='flex items-start justify-between gap-1'>
                                    {Array.from({ length: 5 }, (_, i) =>
                                        i < product.starsCount
                                            ? <MdStar className='text-lg text-yellow-600' key={i} />
                                            : <MdOutlineStarOutline className='text-lg text-yellow-600' key={i} />
                                    )}
                                </div>
                                <GoDotFill className='text-sm text-stone-300' />
                                <MdOutlineMessage className='text-lg text-stone-400' />
                                <span className='text-[15px] text-stone-400'>{product.reviews}</span>

                                <GoDotFill className='text-sm text-stone-300' />
                                <MdOutlineShoppingBasket className='text-lg text-stone-400' />
                                <span className='text-[15px] text-stone-400'>{product.orders} orders</span>
                            </div>
                            {/* 2. */}
                            <p className='text-lg font-bold text-stone-800 w-full whitespace-normal'>{product.name}</p>
                            <p className=' flex items-center gap-2 text-lg font-bold text-red-600'>${product.price} <span className='font-normal text-[15px] text-stone-400'>(50-100 pcs)</span></p>
                            {/* 3. */}
                            <div className='flex items-center gap-2 justify-between'>
                                <button className='w-11/12 bg-blue-500 px-4 py-2 text-white rounded-md'>Send inquiry</button>
                                <span className='border border-stone-300 rounded-md text-blue-500  p-2'><FaRegHeart className='text-lg' /></span>
                            </div>
                            {/* 4. */}
                            <div className="flex flex-col  text-lg text-gray-600">

                                {/* Property Rows */}
                                <div className="flex items-center justify-between">
                                    <span className="font-medium">Condition</span>
                                    <span>Brand new</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="font-medium">Material</span>
                                    <span>Plastic</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="font-medium">Category</span>
                                    <span>Electronics, gadgets</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="font-medium">Item num</span>
                                    <span>23421</span>
                                </div>

                                {/* Description */}
                                <p className="mt-2 text-gray-600">
                                    Info about edu item is an ideal companion for anyone engaged in learning. The drone provides precise and
                                    {ReadMore ? <span> read more info read more info read more info read more info read more info read more info</span> : ''}
                                </p>

                                {/* Read More */}
                                {showReadMore &&
                                    <button className="text-blue-500 self-center text-[15px] font-medium mt-1" onClick={() => { setReadMore(true); setshowReadMore(false); }}>Read more...</button>
                                }
                                {/* Read Less */}
                                {!showReadMore &&
                                    < button className="text-stone-500 self-center text-[15px] font-medium mt-1 " onClick={() => { setReadMore(false); setshowReadMore(true); }}>Read less</button>
                                }
                            </div>

                        </div>
                    </div>

                    {/* central product detail section */}
                    <div className='hidden sm:flex flex-col items-start gap-1 w-1/2  p-4'>
                        {instock ? <span className='flex gap-2 items-center text-green-500 font-medium text-lg'> <IoCheckmark className='text-green-500 text-3xl ' /> In stock</span> : <RxCross2 className='text-red-500 text-lg ' />}

                        <p className='text-xl font-bold whitespace-normal w-11/12'>{product.name}</p>

                        <div className='flex items-center gap-2 flex-wrap'>

                            <div className='flex items-start justify-between gap-1'>
                                {Array.from({ length: 5 }, (_, i) =>
                                    i < product.starsCount
                                        ? <MdStar className='text-lg text-yellow-500' key={i} />
                                        : <MdOutlineStarOutline className='text-lg text-yellow-500' key={i} />
                                )}
                                <span className='text-yellow-400 text-sm'>{product.rating}</span>
                            </div>

                            <GoDotFill className='text-sm text-stone-300' />
                            <MdOutlineMessage className='text-2xl text-stone-400' />
                            <span className='text-lg text-stone-400'>{product.reviews}</span>

                            <GoDotFill className='text-sm text-stone-300' />
                            <MdOutlineShoppingBasket className='text-2xl text-stone-400' />
                            <span className='text-lg text-stone-400'>{product.orders}</span>
                        </div>

                        <div className='flex items-center w-full bg-red-100 rounded p-2'>

                            <div className='w-1/3 flex flex-col gap-1 border-r border-stone-300 p-1'>
                                <p className='text-xl text-red-500 font-bold'>${product.price}</p>
                                <p className='text-sm text-stone-400'>50-100 pcs</p>
                            </div>

                            <div className='w-1/3 flex flex-col gap-1 border-r border-stone-300 p-1'>
                                <p className='text-xl text-red-500 font-bold'>$90.00</p>
                                <p className='text-sm text-stone-400'>100-700 pcs</p>
                            </div>

                            <div className='w-1/3 flex flex-col gap-1 p-1'>
                                <p className='text-xl text-red-500 font-bold'>$78.00</p>
                                <p className='text-sm text-stone-400'>700+ pcs</p>
                            </div>

                        </div>

                        <div className='space-y-4 w-full'>

                            {/* Price */}
                            <div className='border-b border-stone-400 w-full flex justify-between items-start pb-2'>
                                <p className='text-lg text-stone-400 min-w-[120px]'>Price:</p>
                                <p className='text-lg text-gray-600'>Negotiable</p>
                            </div>

                            {/* Type Section */}
                            <div className='border-b border-stone-400 w-full space-y-2 pb-2'>
                                <div className='flex justify-between items-start'>
                                    <p className='text-lg text-stone-400 min-w-[120px]'>Type:</p>
                                    <p className='text-lg text-gray-600'>Classic shoes</p>
                                </div>
                                <div className='flex justify-between items-start'>
                                    <p className='text-lg text-stone-400 min-w-[120px]'>Material:</p>
                                    <p className='text-lg text-gray-600'>Plastic Material</p>
                                </div>
                                <div className='flex justify-between items-start'>
                                    <p className='text-lg text-stone-400 min-w-[120px]'>Design:</p>
                                    <p className='text-lg text-gray-600'>Modern nice</p>
                                </div>
                            </div>

                            {/* Customization Section */}
                            <div className='border-b border-stone-400 w-full space-y-2 pb-2'>
                                <div className='flex justify-between items-start'>
                                    <p className='text-lg text-stone-400 min-w-[120px]'>Customization:</p>
                                    <p className='text-lg text-gray-600'>Customized Logo and <br />design custom packages</p>
                                </div>
                                <div className='flex justify-between items-start'>
                                    <p className='text-lg text-stone-400 min-w-[120px]'>Protection:</p>
                                    <p className='text-lg text-gray-600'>Refund Policy</p>
                                </div>
                                <div className='flex justify-between items-start'>
                                    <p className='text-lg text-stone-400 min-w-[120px]'>Warranty:</p>
                                    <p className='text-lg text-gray-600'>2 years full warranty</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* supplier info and details */}
                    <div className='hidden sm:flex w-1/4 flex-col gap-3  border border-gray-300 p-3 rounded'>
                        <div className='flex items-start gap-2'>
                            <div className='bg-sky-200 text-sky-400 p-2 w-14 h-14 text-center text-2xl font-bold rounded'>
                                <span>R</span>
                            </div>
                            <p className='text-lg '>Supplier <br />Guanjoi Trading LLC</p>
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
                            <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 font-medium'>Send inquiry</button>
                            <button className='bg-white text-blue-500 px-4 py-2 border border-stone-300 font-medium rounded-md hover:bg-blue-500 hover:text-white'>Seller's profile</button>
                        </div>


                        <div className='mt-4 text-blue-500 flex items-center gap-2 self-center text-lg font-medium'>
                            <FaRegHeart className='text-2xl' />
                            <p>Save for later</p>
                        </div>

                    </div>
                    {/* Mobile view supplier info & details */}
                    <div className='sm:hidden flex flex-col w-full border border-stone-300 rounded-md p-2 mt-4'>

                        <div className='flex items-center justify-between border-b border-stone-300 pb-2'>
                            <div className='flex items-start gap-2'>
                                <div className='bg-sky-200 text-sky-400 p-2 w-14 h-14 text-center text-2xl font-bold rounded'>
                                    <span>R</span>
                                </div>
                                <p className='text-lg '>Supplier <br />Guanjoi Trading LLC</p>
                            </div>
                            <span className='text-stone-400'><TbMathGreater className='text-lg' /></span>
                        </div>

                        <div className='flex items-center gap-6 mt-2 w-full'>

                            <div className='flex items-center gap-4'>
                                <img src="https://flagcdn.com/us.svg" alt="flag" className='w-5 h-4 object-cover rounded-sm' />
                                <p className='text-[15px] text-stone-400'>Germany</p>
                            </div>

                            <div className='flex items-center gap-4'>
                                <MdOutlineVerifiedUser className='text-2xl text-stone-400' />
                                <p className='text-[15px] text-stone-400 font-normal'>Verified</p>
                            </div>

                            <div className='flex items-center gap-4'>
                                <TbWorld className='text-2xl text-stone-400' />
                                <p className='text-[15px] text-stone-400 font-normal'>Shipping</p>
                            </div>

                        </div>

                    </div>

                </div>
                {/* 2. Related products and  shop now section */}
                <RelatedProducts />
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
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias tempora facilis a id dolore voluptatem odit asperiores eius aperiam delectus ducimus incidunt nam laboriosam nihil odio voluptas eos, temporibus iusto!
                                        Officia perspiciatis aliquid nobis optio eaque magni mollitia vero commodi. Sint doloribus commodi tempora sequi tempore deserunt cupiditate! Soluta, vero aliquid incidunt deleniti assumenda consequatur reiciendis vitae eum possimus nam.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti dicta porro at ex totam voluptas, velit repellendus tenetur qui eaque accusamus iure similique reiciendis a, non labore ratione? Illum.</p>
                                </div>

                                <div className='flex flex-col gap-2 items-start mt-2 w-full'>
                                    {specs.map((spec, indx) => {
                                        const [key, value] = Object.entries(spec)[0];
                                        return (
                                            <div
                                                key={indx}
                                                className='flex w-3/4 border border-stone-300 rounded overflow-hidden'
                                            >
                                                <div className='w-1/4 bg-stone-200 border-r border-stone-300 p-2'>
                                                    <p className='text-[16px] text-stone-500 font-medium'>{key}</p>
                                                </div>
                                                <div className='w-1/2 p-2'>
                                                    <p className='text-[16px] text-gray-700'>{value}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>


                                <div className='flex flex-col gap-2 items-start mt-2'>
                                    {features.map((f, i) => (
                                        <div key={i} className='flex items-center gap-4'>
                                            <IoCheckmark className='text-stone-400 text-xl' />
                                            <p className='text-stone-400 text-[18px]'>{f}</p>
                                        </div>
                                    ))}

                                </div>

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
                                        <span className='text-yellow-400 text-lg'>( {product.rating} out of 5 )</span>
                                    </div>

                                    {reviews.map((review, index) => (
                                        <div key={index} className='mb-4'>
                                            <p className='text-lg font-normal text-gray-600 flex items-center gap-4'> <RiSpeakFill className='text-stone-400 text-[22px]' />“{review.comment}”</p>
                                            <p className='text-[20px] font-medium text-gray-500 mt-1 flex items-center gap-4'><IoPersonSharp className='text-green-500 text-[22px]' /> {review.name}</p>
                                        </div>
                                    ))}
                                </div>


                            </div>
                        }

                        {/* seller */}
                        {activeTab === 'About Seller' &&
                            <div className='flex flex-col gap-2 items-start mt-2 p-4 w-full'>
                                {sellerInfo.map((info, indx) => {
                                    const [key, value] = Object.entries(info)[0];
                                    return (
                                        <div
                                            key={indx}
                                            className='flex w-3/4 border border-stone-300 rounded overflow-hidden'
                                        >
                                            <div className='w-1/4 bg-stone-200 border-r border-stone-300 p-2'>
                                                <p className='text-[16px] text-stone-500 font-medium'>{key}</p>
                                            </div>
                                            <div className='w-1/2 p-2'>
                                                <p className='text-[16px] text-gray-700'>{value}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        }

                        {/* shipping */}
                        {activeTab === 'Shipping' &&
                            <div className='flex flex-col gap-2 items-start mt-2 w-full p-4'>
                                {shippingInfo.map((info, indx) => {
                                    const [key, value] = Object.entries(info)[0];
                                    return (
                                        <div
                                            key={indx}
                                            className='flex w-3/4 border border-stone-300 rounded overflow-hidden'
                                        >
                                            <div className='w-1/4 bg-stone-200 border-r border-stone-300 p-2'>
                                                <p className='text-[16px] text-stone-500 font-medium'>{key}</p>
                                            </div>
                                            <div className='w-1/2 p-2'>
                                                <p className='text-[16px] text-gray-700'>{value}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        }

                    </div>
                    {/* you may like products */}
                    <div className='w-1/5 p-4 border border-stone-300 bg-white rounded-md flex flex-col'>
                        <p className='font-semibold mb-2'>You may like</p>

                        {products.map((prod, i) => (
                            <div key={i} className='flex items-start gap-2 mb-3'>
                                <div className='w-24 h-20 rounded border border-stone-300 bg-white p-1.5' >
                                    <img src={prod.image} alt={prod.name} className=' w-full h-full object-contain rounded' />
                                </div>

                                <div>
                                    <p className='font-medium'>{prod.name}</p>
                                    <span className='text-sm text-stone-400'>{prod.price}</span>
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
