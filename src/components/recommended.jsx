import React from 'react';

const items = [
  { price: '10.30', img: '/images/t-1.jpeg', descr: 'T-Shirts for men with different colors' },
  { price: '10.30', img: '/images/t-2.jpeg', descr: 'T-Shirts for men with different colors' },
  { price: '12.34', img: '/images/t-3.jpeg', descr: 'T-Shirts for men with different colors' },
  { price: '34.5', img: '/images/t-4.jpeg', descr: 'T-Shirts for men with different colors' },
  { price: '12.90', img: '/images/t-5.jpeg', descr: 'T-Shirts for men with different colors' },
  { price: '23.45', img: '/images/t-6.jpeg', descr: 'T-Shirts for men with different colors' },
  { price: '56.60', img: '/images/t-7.jpeg', descr: 'T-Shirts for men with different colors' },
  { price: '12.35',img: '/images/t-8.jpeg', descr: 'T-Shirts for men with different colors' },
  { price: '10.25', img: '/images/t-9.jpeg', descr: 'T-Shirts for men with different colors' },
  { price: '25.35', img: '/images/t-10.jpeg', descr: 'T-Shirts for men with different colors' },
];


function Recommenditems() {
  return (
     <section className="max-w-7xl mx-auto px-4 py-8  mt-4">
      <h2 className="text-3xl font-bold mb-6">Recommended Items</h2>

      {/* 1st Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        {items.slice(0,5).map((item, index) => (
          <div
            key={`top-${index}`}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 w-full h-full flex flex-col gap-2 items-center justify-center"
          >
            <img src={item.img} alt="img" className='w-44 h-44 object-contain'/>
            <div>
                <span className='font-medium'>${item.price}</span>
                <p className='text-stone-400'>{item.descr}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 2nd Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
       {items.slice(5,10).map((item, index) => (
          <div
            key={`top-${index}`}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 w-full h-full flex flex-col gap-2 items-center justify-center"
          >
            <img src={item.img} alt="img" className='w-44 h-44 object-contain'/>
            <div>
                <span className='font-medium'>${item.price}</span>
                <p className='text-stone-400'>{item.descr}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Recommenditems;
