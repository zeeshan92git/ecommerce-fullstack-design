import React from 'react';

const products = [
    {
        image: '/images/phone.jpeg',
        name: 'Xiaomi Redmi 8 Original',
        price: '$32.00-$40.00',
    },
    {
        image: '/images/watch.jpeg',
        name: 'Xiaomi Redmi 8 Original',
        price: '$32.00-$40.00',
    },
    {
        image: '/images/t-6.jpeg',
        name: 'Xiaomi Redmi 8 Original',
        price: '$32.00-$40.00',
    },
    {
        image: '/images/port.jpeg',
        name: 'Xiaomi Redmi 8 Original',
        price: '$32.00-$40.00',
    },
    {
        image: '/images/laptop.jpeg',
        name: 'Xiaomi Redmi 8 Original',
        price: '$32.00-$40.00',
    },
    {
        image: '/images/lamp.jpeg',
        name: 'Xiaomi Redmi 8 Original',
        price: '$32.00-$40.00',
    },
];

function RelatedProducts() {
    return (
        <>
            <div className="sm:p-4 sm:border  border-stone-300 rounded-md mt-4">

                {/* heading */}
                <h2 className="text-xl font-semibold mb-4">Similar products</h2>
                <div className="overflow-x-auto pb-2">
                    <div className="flex gap-4">
                        {products.map((product, index) => (
                            <div key={index} className="min-w-[140px] flex-shrink-0 sm:bg-gray-200 p-2 rounded sm:border-0 border border-stone-300">
                                <div className="bg-white p-2 rounded">
                                    <img src={product.image} alt={product.name} className="w-full h-32 object-contain" />
                                </div>
                                <p className="mt-2 text-lg w-3/4 whitespace-normal text-gray-700">{product.name}</p>
                                <p className="text-lg font-semibold text-gray-500">{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* 100 uSD sho now */}
            <div className='mt-6 w-full h-28 px-8 rounded-md relative hidden sm:flex items-center justify-between 
              bg-[linear-gradient(60deg,_#3B82F6_60%,_#1D4ED8_40%)]'>
                <div className='flex flex-col justify-between'>
                    <p className='sm:text-2xl text-xl sm:font-bold font-medium  text-white'>Super Discount on more than 100 USD</p>
                    <p className='text-lg text-white'>Have you ever finally just write dummy info</p>
                </div>
                <div className='text-white'>
                    <button className='bg-orange-400 cursor-pointer rounded-md px-4 py-2'>
                        Shop now
                    </button>
                </div>

            </div>

        </>
    );
}

export default RelatedProducts;
