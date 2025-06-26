import React, { useContext } from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function DealsOffer() {

  const { productsData } = useContext(AppContext);
  //console.log("productsData at deals\n", productsData);
  const dealOfferProducts = productsData.filter(p => Math.round(((p.oldPrice - p.price) / p.oldPrice * 100)) > 20.0);
  //console.log("dealOfferProducts \n", dealOfferProducts);
  // Set your deal end time here
  const dealEndTime = new Date("2025-07-10T23:59:59");
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = dealEndTime - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      } else {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);

        setTimeLeft({
          days: String(d).padStart(2, '0'),
          hours: String(h).padStart(2, '0'),
          minutes: String(m).padStart(2, '0'),
          seconds: String(s).padStart(2, '0'),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Desktop view */}
      <div className="sm:bg-gray-100 flex items-stretch justify-between gap-2 rounded-md sm:border border-gray-300 p-2 sm:mt-4 mt-2 max-w-7xl mx-auto overflow-x-auto scrollbar-hide">

        {/* Title + Countdown */}
        <div className="hidden sm:block w-2/12 min-w-[160px] p-2">
          <h1 className="text-2xl font-bold">Deals and offers</h1>
          <p className="text-lg text-gray-400">Hygiene equipments</p>
          <div className="flex gap-2 mt-2">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hour', value: timeLeft.hours },
              { label: 'Min', value: timeLeft.minutes },
              { label: 'Sec', value: timeLeft.seconds }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-500 rounded-md text-white w-16 h-14 flex flex-col items-center justify-center text-xs">
                <span className="font-bold text-lg leading-none">{item.value}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Blocks */}
        {dealOfferProducts.map((prod, i) => (
          <Link to="/product-list" state={{ category: prod.category.name }} key={i} className="hidden sm:flex flex-col items-center gap-2 w-2/12 min-w-[160px] h-full border-l border-gray-300">
            <div className='w-44 h-40 rounded-md'>
              <img src={prod.image} alt={prod.name} className="w-full h-full object-cover rounded-md" />
            </div>

            <p className="text-center font-medium w-3/4 truncate">{prod.name}</p>
            {timeLeft.days &&
              <p className="text-red-500 text-center font-medium bg-red-200 px-3 py-1 rounded-full">
               - {Math.round(((prod.oldPrice - prod.price) / prod.oldPrice * 100))}<span>%</span>
              </p>
            }

          </Link>
        ))}

      </div>

      {/* Mobile Menu */}
      <div className='sm:hidden flex items-center justify-between gap-2 px-2'>

        <div className='flex items-center justify-between gap-4'>
          <p className="text-[18px] font-bold">Deals and Offers</p>
          <div className='flex gap-2'>
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hour', value: timeLeft.hours },
              { label: 'Min', value: timeLeft.minutes },
              { label: 'Sec', value: timeLeft.seconds }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-500 rounded-md text-white w-10 h-10  flex flex-col items-center justify-center text-[14px]">
                <span className="font-normal text-[13px] leading-none">{item.value}</span>
                <span className="font-normal text-[13px] leading-none">{item.label}</span>
              </div>
            ))}
          </div>
        </div>


      </div>

      {/* Product Blocks */}
      <div className='bg-gray-100 sm:hidden flex items-stretch justify-between gap-2 rounded-md border border-gray-300 p-2 mt-4 max-w-7xl mx-auto overflow-x-auto scrollbar-hide'>
        {dealOfferProducts.map((prod, i) => (
          <Link to="/product-list" state={{category : prod.category.name}} key={i} className={`1sm:hidden flex flex-col items-center gap-2 w-2/12 min-w-[160px] h-full ${i===0 ? 'border-l-0' : 'border-l'} border-gray-300`}>
            <div className='w-32 h-32'>
                <img src={prod.image} alt={prod.name} className="w-full h-full object-cover rounded-md" />
            </div>
            <p className="text-center w-3/4 font-medium truncate">{prod.name}</p>
            {timeLeft.days &&
              <p className="text-red-500 text-center font-medium bg-red-200 px-2 py-1 text-[15px] rounded-full">
                - {Math.round(((prod.oldPrice - prod.price) / prod.oldPrice * 100))}<span>%</span>
              </p>
            }
          </Link>
        ))}
      </div>

    </>
  );
}

export default DealsOffer;
