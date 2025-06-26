import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

function RelatedProducts({ category , setProduct }) {

    console.log("category\n", category);
    const { productsData } = useContext(AppContext);
    const relatedProducts = productsData.filter(p => p.category.name === category);
    console.log("relatedProducts\n", relatedProducts);

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <div className="sm:p-4 sm:border  border-stone-300 rounded-md mt-4">

                {/* heading */}
                <h2 className="text-xl font-semibold mb-4">Similar products</h2>
                <div className="overflow-x-auto pb-2">
                    <div className="flex gap-4 overflow-x-auto scrollbar-hide py-2">
                        {relatedProducts.map((product, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    setProduct(product);
                                    localStorage.setItem("selectedProduct", JSON.stringify(product));
                                    window.scrollTo({top : 0 , behavior:"smooth"});
                                }}
                                className="min-w-[160px] max-w-[180px] flex-shrink-0 bg-white  rounded-md cursor-pointer border border-stone-300 shadow-sm"
                            >
                                <div className="w-full h-44 rounded-t-md overflow-hidden bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="mt-2 px-1 text-[16px] font-medium text-gray-800 line-clamp-2">{product.name}</p>
                                <p className="text-[15px] px-1 font-semibold text-gray-600 mt-1">$ {product.price}</p>
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
