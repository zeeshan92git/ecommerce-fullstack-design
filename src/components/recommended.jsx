import React from 'react';

const items = [
  { price: '10.30', img: '/images/t-1.jpeg', descr: 'T-Shirts for men with different colors' },
  { price: '10.30', img: '/images/t-2.jpeg', descr: 'T-Shirts for men with different colors' },
  { price: '12.34', img: '/images/t-3.jpeg', descr: 'T-Shirts for men with different colors' },
  { price: '34.5', img: '/images/t-4.jpeg', descr: 'T-Shirts for men with different colors' },
  { price: '12.90', img: '/images/t-5.jpeg', descr: 'T-Shirts for men with different colors' },
  { price: '23.45', img: '/images/t-6.jpeg', descr: 'T-Shirts for men with different colors' },
  { price: '56.60', img: '/images/t-7.jpeg', descr: 'T-Shirts for men with different colors' },
  { price: '12.35', img: '/images/t-8.jpeg', descr: 'T-Shirts for men with different colors' },
  { price: '10.25', img: '/images/t-9.jpeg', descr: 'T-Shirts for men with different colors' },
  { price: '10.25', img: '/images/watch.jpeg', descr: 'T-Shirts for men with different colors' }
];
console.log(items.length);


function Recommenditems() {
  return (

    <section className="max-w-7xl mx-auto px-4 py-8  mt-4">
      <h2 className="text-3xl font-bold mb-4">Recommended Items</h2>

       {/* Grid layout: row-wise layout will be handled by CSS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-start mb-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg shadow-sm p-4 w-full flex flex-col gap-2 items-center"
          >
            <img src={item.img} alt="img" className="w-40 h-44 object-contain" />
            <div className="text-[17px] flex flex-col items-start text-center">
              <span className="font-medium text-lg">${item.price}</span>
              <p className="text-stone-400 mt-2">{item.descr}</p>
            </div>
          </div>
        ))}
      </div>


    </section >
  )
}

export default Recommenditems;
