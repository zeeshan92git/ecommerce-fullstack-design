import React, { useState } from 'react';
import { MdLock } from "react-icons/md";
import { PiVanFill } from "react-icons/pi";
import { MdOutlineMessage } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineMinus } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";
const myprodCount = 3;

const cartproducts = [
    {
        name: "T-shirts with multiple colors, for men and lady",
        size: "medium",
        color: "blue",
        material: "Plastic",
        price: 78.99,
        seller: "Artel Market",
        image: "/images/t-2.jpeg", // replace with actual image URL
        quantity: 9
    },
    {
        name: "Classic Winter Coat",
        size: "large",
        color: "black",
        material: "Wool",
        price: 120.49,
        seller: "WinterWear Co.",
        image: "/images/t-6.jpeg",
        quantity: 2
    },
    {
        name: "Elegant Leather Handbag",
        size: "medium",
        color: "brown",
        material: "Leather",
        price: 150.00,
        seller: "Luxury Bags",
        image: "/images/bags.jpeg",
        quantity: 1
    }
];

const products = [
    {
        image: '/images/phone.jpeg',
        name: 'GoPro HERO6 4k Action Camera- Balck',
        price: '32.00',
    },
    {
        image: '/images/t-7.jpeg',
        name: 'GoPro HERO6 4k Action Camera- Balck',
        price: '98.00',
    },
    {
        image: '/images/laptop.jpeg',
        name: 'GoPro HERO6 4k Action Camera- Balck',
        price: '120.00',
    },
    {
        image: '/images/t-8.jpeg',
        name: 'GoPro HERO6 4k Action Camera- Balck',
        price: '45.00',
    }
];


function Cart() {

    const [showOption, setshowOption] = useState(false);
    const [quantity, setquantity] = useState(1);


    const getQuantity = (action) => {
        if (action === 'increase') {
            setquantity(prev => prev + 1);
        } else if (action === 'decrease') {
            setquantity(prev => (prev > 1 ? prev - 1 : 1));
        }
        else return 1;
    };
    return (
        <div className='max-w-7xl sm:mx-20 mx-4 sm:px-0 px-4'>

            <h1 className='sm:block hidden text-[24px] font-bold mb-5 mt-5'>My cart ({myprodCount})</h1>
            <h1 className='sm:hidden flex items-center gap-3 text-[24px] font-bold mb-5 mt-5'>
                <GoArrowLeft className='text-xl' /> Shopping Cart
            </h1>
            {cartproducts.length === 0 && (
                <p className="text-center text-gray-500 my-10">Your cart is empty</p>
            )}

            {/* products list desktop view */}
            <div className='sm:flex hidden items-start gap-2 mb-6'>
                {/* left side */}
                <div className='w-3/4 border border-stone-300 p-3 rounded-md'>
                    <div className="space-y-4">
                        {cartproducts.map((prod, index) => (
                            <div key={index} className="flex justify-between items-start border-b pb-4">
                                {/* Image */}
                                <div className="w-20 h-20 border border-stone-300 p-2 flex-shrink-0">
                                    <img src={prod.image} alt={prod.name} className="w-full h-full object-contain" />
                                </div>

                                {/* Details */}
                                <div className="flex-1 px-4">
                                    <p className="text-lg font-medium text-gray-800">{prod.name}</p>
                                    <p className="text-lg text-gray-400">
                                        Size: {prod.size}, Color: {prod.color}, Material: {prod.material}
                                    </p>
                                    <p className="text-[15px] text-gray-400">Seller: {prod.seller}</p>

                                    {/* Buttons */}
                                    <div className="mt-2 flex gap-2">
                                        <button className="px-3 py-1 text-sm font-medium border border-stone-300 text-red-500 rounded hover:bg-red-500 hover:text-white hover:border-red-500">Remove</button>
                                        <button className="px-3 py-1 text-sm font-medium border border-stone-300 text-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-blue-500">Save for later</button>
                                    </div>
                                </div>

                                {/* Price + Quantity */}
                                <div className="flex flex-col items-end gap-2">
                                    <p className="text-lg font-semibold text-gray-800">${prod.price.toFixed(2)}</p>
                                    <select className="border rounded px-2 py-1 text-lg text-gray-700 cursor-pointer outline-none">
                                        {[...Array(10).keys()].map(n => (
                                           <option key={n + 1} value={n + 1}>{`Qty: ${n + 1}`}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* right side */}
                <div className='w-1/4'>

                    <div className='w-full flex flex-col gap-2 mb-4 border border-stone-300 rounded-md p-3'>
                        <p className='text-lg text-stone-600'>Have a coupon?</p>
                        <div className='flex items-center gap-0 p-2'>
                            <input type="text" placeholder='Add coupon' className='text-stone-400 border border-stone-400 px-3 py-2 rounded-l outline-none' />
                            <button className='px-3 py-2 text-blue-500 border border-stone-400 -ml-px rounded-r font-medium'>Apply</button>
                        </div>

                    </div>

                    <div className='w-full flex flex-col gap-2 border border-stone-300 rounded-md p-3'>

                        <div className='flex flex-col gap-2 border-b border-stone-300'>

                            <div className='flex items-center justify-between'>
                                <p className='text-lg text-stone-600'>Subtotal:</p>
                                <span className='text-lg text-stone-400'>-$1200</span>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='text-lg text-stone-600'>Discount:</p>
                                <span className='text-lg text-green-500'>-$60.00</span>
                            </div>

                            <div className='flex items-center justify-between mb-2'>
                                <p className='text-lg text-stone-600'>Tax:</p>
                                <span className='text-lg text-red-500'>+$14.00</span>
                            </div>

                        </div>

                        <div className='flex items-center justify-between mt-2'>
                            <p className='text-lg text-stone-800 font-bold'>Total</p>
                            <span className='text-lg text-stone-800 font-bold'>$1357.97</span>
                        </div>

                        <button className='text-center font-bold text-lg bg-green-600 hover:bg-green-500 text-white py-4 px-5 w-full rounded-md'>Checkout</button>
                    </div>



                </div>
            </div>

            {/* product list mobile view */}
            <div className='sm:hidden flex flex-col gap-2 border-t border-stone-400 p-2 mb-4'>
                {cartproducts.map((cprod, i) => (
                    <div key={i} className='flex flex-col gap-2 border-b border-stone-300 p-2'>
                        <div className='flex items-center gap-2 justify-between w-full'>
                            <div className='flex items-center gap-2 w-3/4'>
                                <div className='border border-stone-300 p-2 w-24 h-24 rounded-md'>
                                    <img src={cprod.image} alt={cprod.name} className='w-full h-full rounded object-contain' />
                                </div>
                                <div className='flex flex-col gap-1 text-gray-400'>
                                    <p className='text-black text-lg font-medium'>{cprod.name}</p>
                                    <p>Size : {cprod.size}, <span> Color: {cprod.color}</span></p>
                                    <p>Seller: {cprod.seller}</p>
                                </div>
                            </div>
                            {showOption
                                ? <div className='flex flex-col gap-2 w-1/4'>
                                    <button className="p-2 text-sm font-medium border border-stone-300 text-red-500 rounded hover:bg-red-500 hover:text-white hover:border-red-500">Remove</button>
                                    <button className="p-2 text-sm font-medium border border-stone-300 text-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-blue-500">Save for later</button>
                                </div>
                                : <SlOptionsVertical className='text-xl' onClick={() => setshowOption(true)} />
                            }
                        </div>
                        <div className='flex items-center justify-between w-full'>
                            <div className='flex items-center border border-stone-300 rounded-md overflow-hidden'>
                                <span className='text-[20px] px-4 py-2 border-r border-stone-300'>
                                    <button className='text-[20px] text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed' disabled={quantity === 1} onClick={() => getQuantity('decrease')}>
                                        <AiOutlineMinus />
                                    </button>
                                </span>
                                <span className='text-[20px] px-4 py-2 border-r border-stone-300'>
                                    {quantity}
                                </span>
                                <span className='text-[20px] px-4 py-2'>
                                    <button className='text-[20px] text-gray-500' onClick={() => getQuantity('increase')}>
                                        <IoAddOutline />
                                    </button>
                                </span>
                            </div>
                            <span className='text-lg font-medium'>$ {cprod.price}</span>
                        </div>

                    </div>
                ))}
            </div>

            {/* payment suport delivery */}
            <div className='flex items-center sm:gap-6 gap-3 sm:mb-6 mb-2 sm:p-0 p-4'>
                <div className='flex items-center gap-2'>
                    <MdLock className='sm:w-10 sm:h-10 w-10 h-10 bg-stone-300 text-gray-400 sm:text-2xl text-lg p-2 rounded-full' />
                    <div className='flex flex-col items-start'>
                        <p className='sm:text-lg text-[15px] font-medium'>Secure Payment</p>
                        <p className='text-stone-400 sm:text-[15px] sm:block hidden'>Have you ever finally just</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <MdOutlineMessage className='sm:w-10 sm:h-10 w-10 h-10 bg-stone-300 text-gray-400 sm:text-2xl text-lg p-2 rounded-full' />
                    <div className='flex flex-col items-start'>
                        <p className='sm:text-lg text-[15px] font-medium'>Customer Support</p>
                        <p className='text-stone-400 sm:text-[15px] sm:block hidden'>Have you ever finally just</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <PiVanFill className='w-10 h-10 bg-stone-300 text-gray-400 sm:text-2xl text-lg p-2 rounded-full' />
                    <div className='flex flex-col items-start'>
                        <p className='sm:text-lg text-[15px] font-medium'>Free Delivery</p>
                        <p className='text-stone-400 sm:text-[15px] sm:block hidden'>Have you ever finally just</p>
                    </div>
                </div>
            </div>

            {/* saved for later products */}
            <div className='p-6 sm:border border-stone-300 rounded w-full mb-6'>
                <h1 className='text-2xl font-bold mb-4'>Saved For Later</h1>
                <div className='flex sm:flex-row flex-col items-start sm:gap-6 gap-4'>
                    {products.map((prod, indx) => (
                        <div key={indx} className='flex sm:flex-col flex-row sm:items-start items-center flex-shrink-0 sm:gap-6 gap-2 sm:w-1/4 border border-stone-300 rounded'>
                            <div className='sm:w-full sm:h-48 w-52 h-52 sm:p-4  p-2 bg-white rounded'>
                                <img src={prod.image} alt={prod.name} className='w-full h-full object-contain rounded' />
                            </div>
                            <div className='flex flex-col gap-2 sm:bg-gray-300 p-2 sm:w-full w-60'>
                                <p className='sm:text-xl text-xl font-medium'>$ {prod.price}</p>
                                <p className='text-lg text-stone-400 whitespace-normal sm:w/3/4'>{prod.name}</p>

                                <button className='font-medium hidden sm:flex items-center self-center gap-2 text-blue-500 px-3 py-2 border border-blue-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 rounded'>
                                    <IoCartOutline className='text-2xl' /> Move to cart
                                </button>

                                <div className='flex items-center gap-2'>
                                    <button className=' w-3/4 border border-stone-300 text-blue-500 px-3 py-2 rounded text-sm hover:bg-blue-500 hover:text-white hover:border-blue-500'>Move to cart</button>
                                    <button className='border border-stone-300 text-red-500 px-3 py-2 rounded text-sm hover:bg-red-500 hover:text-white hover:border-red-500'>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* design  100 USD shop now */}
            <div className='mt-6 w-full h-28 px-8 rounded-md relative hidden sm:flex items-center justify-between 
              bg-[linear-gradient(60deg,_#3B82F6_60%,_#1D4ED8_40%)]'>
                <div className='flex flex-col p-2'>
                    <p className='text-2xl font-bold  text-white'>Super Discount on more than 100 USD</p>
                    <p className='text-lg text-white'>Have you ever finally just write dummy info</p>
                </div>
                <button className='text-white bg-orange-400 px-4 py-2 cursor-pointer rounded-md'>
                    Shop now
                </button>

            </div>




        </div>
    )
}

export default Cart;