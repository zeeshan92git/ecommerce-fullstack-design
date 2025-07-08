import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

function Recommenditems() {

  const { productsData } = useContext(AppContext);
  console.log("recommend\n", productsData);

  const recommendedItems = productsData.filter(p => p.rating > 4.5);
  console.log(recommendedItems);

  return (

    <section className="max-w-7xl mx-auto sm:p-4 p-2 mt-4">
      <h2 className="sm:text-3xl text-2xl font-bold mb-4">Recommended Items</h2>
      {/* Grid layout: */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-start mb-6">

        {recommendedItems.map((item, index) => (
          <Link
            key={index}
            to="/product-list"
            state={{ category: item.category?.name }}
            className="border border-gray-200 rounded-lg shadow-sm bg-white w-full flex flex-col items-center p-4 gap-3 hover:shadow-md transition-shadow duration-200"
          >
            {/* Image */}
            <div className="sm:w-48 sm:h-36 w-32 h-32 rounded-md overflow-hidden bg-gray-100">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="w-full text-left space-y-1">
              <p className="text-stone-800 font-bold sm:text-xl text-lg truncate">{item.name}</p>
              <p className="sm:text-lg text-[15px] font-semibold text-stone-500">$ {item.price}</p>
            </div>
          </Link>
        ))}
        
      </div>
    </section >
  )
}

export default Recommenditems;
