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
            <div className="p-4 border rounded-md mt-4">

                <h2 className="text-xl font-semibold mb-4">Related products</h2>

                <div className="overflow-x-auto pb-2">
                    <div className="flex gap-4">
                        {products.map((product, index) => (
                            <div key={index} className="min-w-[140px] flex-shrink-0 bg-gray-200 p-2 rounded">
                                <div className="bg-white p-2 rounded">
                                    <img src={product.image} alt={product.name} className="w-full h-32 object-contain" />
                                </div>
                                <p className="mt-2 text-lg w-3/4 whitespace-normal text-gray-700">{product.name}</p>
                                <p className="text-lg text-gray-500">{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

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

        </>
    );
}

export default RelatedProducts;
