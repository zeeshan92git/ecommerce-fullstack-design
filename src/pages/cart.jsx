import React from 'react';
import { MdLock } from "react-icons/md";
import { PiVanFill } from "react-icons/pi";
import { MdOutlineMessage } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

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
    return (
        <div className='max-w-7xl mx-20 '>

            <h1 className='text-[24px] font-bold mb-5 mt-5'>My cart ({myprodCount})</h1>

            {/* products list */}
            <div className='flex items-start gap-2 mb-6'>

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
                                            <option key={n + 1} value={n + 1} selected={n + 1 === prod.quantity}>Qty: {n + 1}</option>
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

                        <button className='text-center font-bold text-lg bg-green-500 text-white py-4 px-5 w-full rounded-md'>Checkout</button>
                    </div>



                </div>



            </div>

            {/* payment suport delivery */}
            <div className='flex items-center gap-6 mb-6'>

                <div className='flex items-center gap-2'>
                    <MdLock className='w-10 h-10 bg-stone-300 text-gray-400 text-2xl p-2 rounded-full' />
                    <div className='flex flex-col'>
                        <p className='text-lg'>Secure Payment</p>
                        <p className='text-stone-400'>Have you ever finally just</p>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <MdOutlineMessage className='w-10 h-10 bg-stone-300 text-gray-400 text-2xl p-2 rounded-full' />
                    <div className='flex flex-col'>
                        <p className='text-lg'>Customer Support</p>
                        <p className='text-stone-400'>Have you ever finally just</p>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <PiVanFill className='w-10 h-10 bg-stone-300 text-gray-400 text-2xl p-2 rounded-full' />
                    <div className='flex flex-col'>
                        <p className='text-lg'>Free Delivery</p>
                        <p className='text-stone-400'>Have you ever finally just</p>
                    </div>
                </div>



            </div>

            {/* saved for later products */}
            <div className='p-6 border border-stone-300 rounded w-full mb-6'>
                <h1 className='text-xl font-bold mb-3'>Saved For Later</h1>

                <div className='flex items-start gap-6'>
                    {products.map((prod, indx) => (
                        <div key={indx} className='flex flex-col items-start gap-6 w-1/4 border border-stone-300 rounded'>
                            <div className='w-full h-48 p-4 bg-white rounded'>
                                <img src={prod.image} alt={prod.name} className='w-full h-full object-contain rounded' />
                            </div>
                            <div className='flex flex-col gap-2 bg-gray-300 p-2'>
                                <p className='text-xl font-medium'>$ {prod.price}</p>
                                <p className='text-lg  text-stone-400 whitespace-normal w/3/4'>{prod.name}</p>
                                <button className='font-medium flex items-center self-center gap-2 text-blue-500 px-3 py-2 border border-blue-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 rounded'>
                                    <IoCartOutline className='text-2xl' /> Move to cart</button>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

            {/* design  100 USD shop now */}
            <div className='mt-6 w-full h-28 px-8 rounded-md relative flex items-center justify-between 
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