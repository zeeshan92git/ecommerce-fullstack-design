import React from 'react';

function DealsOffer() {
  return (
    <div className=' bg-gray-100 flex items-stretch justify-between gap-2 rounded-md border border-gray-300  p-2 mt-4  max-w-7xl mx-auto'>

      <div className='w-2/12  p-2'>
        <h1 className='text-2xl font-bold'>Deals and offers</h1>
        <p className='text-lg text-gray-400'>Hygiene equipments</p>
        <div className='flex gap-2 mt-2'>
          <div className='bg-stone-500 rounded-md text-white w-16 h-14 flex flex-col items-center justify-center text-xs'>
            <span className='font-bold text-lg leading-none'>04</span>
            <span>Days</span>
          </div>
          <div className='bg-stone-500 rounded-md text-white w-16 h-14 flex flex-col items-center justify-center text-xs'>
            <span className='font-bold text-lg leading-none'>04</span>
            <span>Hours</span>
          </div>
          <div className='bg-stone-500 rounded-md text-white w-16 h-14 flex flex-col items-center justify-center text-xs'>
            <span className='font-bold text-lg leading-none'>04</span>
            <span>Min</span>
          </div>
          <div className='bg-stone-500 rounded-md text-white w-16 h-14 flex flex-col items-center justify-center text-xs'>
            <span className='font-bold text-lg leading-none'>04</span>
            <span>Sec</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center gap-2 w-2/12 h-full border-l border-gray-300 pl-4'>
        <img src="/images/watch.jpeg" alt="phone" className='w-32 h-32 object-contain rounded-md' />
        <p className='text-center font-medium'>Smart Watches</p>
        <span className='text-red-500 text-center font-medium bg-red-200 px-3 rounded-full w-fit'>-25%</span>
      </div>

      <div className='flex flex-col items-center gap-2 w-2/12 h-full border-l border-gray-300 pl-4'>
        <img src="/images/laptop.jpeg" alt="phone" className='w-32 h-32 object-contain rounded-md' />
        <p className='text-center font-medium'>Smart Watches</p>
        <span className='text-red-500 text-center font-medium bg-red-200 px-3 rounded-full w-fit'>-25%</span>
      </div>

      <div className='flex flex-col items-center gap-2 w-2/12 h-full border-l border-gray-300 pl-4'>
        <img src="/images/camera.jpeg" alt="phone" className='w-32 h-32 object-contain rounded-md' />
        <p className='text-center font-medium'>Smart Watches</p>
        <span className='text-red-500 text-center font-medium bg-red-200 px-3 rounded-full w-fit'>-25%</span>
      </div>

      <div className='flex flex-col items-center gap-2 w-2/12 h-full border-l border-gray-300 pl-4'>
        <img src="/images/headphone.jpeg" alt="phone" className='w-32 h-32 object-contain rounded-md' />
        <p className='text-center font-medium'>Smart Watches</p>
        <span className='text-red-500 text-center font-medium bg-red-200 px-3 rounded-full w-fit'>-25%</span>
      </div>

      <div className='flex flex-col items-center gap-2 w-2/12 h-full border-l border-gray-300 pl-4'>
        <img src="/images/phone.jpeg" alt="phone" className='w-32 h-32 object-contain rounded-md' />
        <p className='text-center font-medium'>Smart Watches</p>
        <span className='text-red-500 text-center font-medium bg-red-200 px-3 rounded-full w-fit'>-25%</span>
      </div>

    </div>
  );
}

export default DealsOffer;
